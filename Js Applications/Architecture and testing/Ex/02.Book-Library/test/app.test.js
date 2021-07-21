
const { chromium } = require('playwright-chromium');
const { assert } = require('chai');

let browser;
let page;

function fakeResponse(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
}

let createdBook = {
    ale: {
        author: "Alex",
        title: "Brief Interviews with Hideous Men by David Foster Wallace",
    },
    bob: {
        author: "Boby",
        title: "The Particular Sadness of Lemon Cake by Aimee Bender"
    }
}

describe('Book library tests', function () {
    // this.timeout(5000); 
    before(async () => {
        browser = await chromium.launch({ headless: false, slowMo: 1000 });
        // browser = await chromium.launch();
    });

    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });
   
    it('Should call correct server', async () => {
        await page.route('**/jsonstore/collections/books', route => {
            route.fulfill(fakeResponse(createdBook))
        });

        await page.goto('http://127.0.0.1:5500');

        const [response] = await Promise.all([
            page.waitForResponse('**/jsonstore/collections/books'),
            page.click('#loadBooks')
        ]);

        let actualResult = await response.json();
        assert.deepEqual(actualResult, createdBook);
    });
    it('Should create new book correctlly', async () => {
        await page.route('**/jsonstore/collections/books', route => {
            route.fulfill(fakeResponse(createdBook));
        });

        await page.goto('http://127.0.0.1:5500');
        await page.fill('#createForm input[name="title"]', 'Alex');
        await page.fill('#createForm input[name="author"]', 'Brief Interviews with Hideous Men by David Foster Wallace');

        const [response] = await Promise.all([
            page.waitForResponse('**/jsonstore/collections/books'),
            page.click('#createForm button')
        ]);

        let actualResult = await response.json();
        assert.deepEqual(actualResult, createdBook);

    });
    it('Should new  book added correctly  in the  table', async () => {
        await page.route('**/jsonstore/collections/books', route => {
            route.fulfill(fakeResponse(createdBook));
        });
        await page.goto('http://127.0.0.1:5500');
        await page.fill('#createForm input[name="title"]', 'Alex');
        await page.fill('#createForm input[name="author"]', 'Brief Interviews with Hideous Men by David Foster Wallace');

        const [response] = await Promise.all([
            page.waitForResponse('**/jsonstore/collections/books'),
            page.click('#createForm button'),
            page.click('#loadBooks')
        ]);
        let actualResult = await page.textContent('tbody tr td');
        let editButton = await page.isVisible('.editBtn');
        let deleteButton = await page.isVisible('.deleteBtn');

        assert.equal(actualResult, 'Brief Interviews with Hideous Men by David Foster Wallace');
        assert.equal(editButton, true);
        assert.equal(deleteButton, true);

    });

    it("Should detete work correctlly", async () => {

        let booksInTable = {
            original: { id: "ale", book: { author: 'Alex', title: 'Brief Interviews with Hideous Men by David Foster Wallace' } },
            deleted: { author: 'Alex', title: 'Brief Interviews with Hideous Men by David Foster Wallace' },
        };

        let respBookInTable = {
            fillTable: {
                status: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(createdBook),
            },
            del: {
                status: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(booksInTable.deleted),
            },
            original: {
                status: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(createdBook.ale),
            },
        };

        await page.goto('http://127.0.0.1:5500');

        await page.route("**/jsonstore/collections/books*", (route) => {
            let replies = {
                get: respBookInTable.fillTable,
                delete: respBookInTable.del,
            };

            let method = route.request().method();
            route.fulfill(replies[method.toLowerCase()]);
        });

        await Promise.all([
            page.waitForResponse("**/jsonstore/collections/books*"),
            page.click("#loadBooks"),
        ]);

        page.on("dialog", (dialog) => {
            dialog.accept();
        });

        await page.route("**/jsonstore/collections/books/ale", (route) => {
            assert.equal(route.request().method(), "DELETE");
            route.fulfill(respBookInTable.del);
        });

        await page.click('tr[data-id="ale"] button.deleteBtn');
    });

    let createdBook = {

        ale: {
            author: "Alex",
            title: "Brief Interviews with Hideous Men by David Foster Wallace",
        },
        bob: {
            author: "Boby",
            title: "The Particular Sadness of Lemon Cake by Aimee Bender"
        }
    }

    it(" Should be correctlly data when edit book", async () => {

        let originAndEditedBook = {
            original: { id: "ale", book: { author: 'Alex', title: 'Brief Interviews with Hideous Men by David Foster Wallace' } },
            edited: { author: 'Alex-ale', title: 'Brief Interviews with Hideous Men by David Foster Wallace-ale' },
        };

        let respBooks = {
            fillTable: {
                status: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(createdBook),
            },
            edit: {
                status: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(originAndEditedBook.edited),
            },
            original: {
                status: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(createdBook.ale),
            },
        };
        await page.goto('http://127.0.0.1:5500');

        await page.route("**/jsonstore/collections/books", (x) => x.fulfill(respBooks.fillTable));

        await Promise.all([
            page.waitForResponse("**/jsonstore/collections/books"),
            page.click("#loadBooks"),
        ]);

        await page.route("**/jsonstore/collections/books/**", (route) => {
            let replies = {
                get: respBooks.original,
                put: respBooks.edit,
                delete: respBooks.del,
            };

            let method = route.request().method();
            route.fulfill(replies[method.toLowerCase()]);
        });

        let [create, edit] = await Promise.all([
            page.isVisible("form#createForm"),
            page.isVisible("form#editForm"),
        ]);

        assert.equal(create, true);
        assert.equal(edit, false);

        await page.click('tr[data-id="ale"] button.editBtn');

        [create, edit] = await Promise.all([
            page.isVisible("form#createForm"),
            page.isVisible("form#editForm"),
        ]);

        assert.equal(create, false);
        assert.equal(edit, true);

        let [bookHeader, bookWriter] = await Promise.all([

            page.$eval('#editForm > input[name="title"]', (b) => b.value),
            page.$eval('#editForm > input[name="author"]', (b) => b.value),
        ]);
        // дали се модифицират
        assert.equal(bookHeader, originAndEditedBook.original.book.title);
        assert.equal(bookWriter, originAndEditedBook.original.book.author);

        await page.fill('#editForm > input[name="title"]', originAndEditedBook.edited.title);
        await page.fill('#editForm > input[name="author"]', originAndEditedBook.edited.author);

        await page.click("#editForm > button");

        [bookHeader, bookWriter] = await Promise.all([
            page.$eval('#editForm > input[name="title"]', (b) => b.value),
            page.$eval('#editForm > input[name="author"]', (b) => b.value),
        ]);
        // дали се зачистват след изпращане
        assert.equal(bookHeader, "");
        assert.equal(bookWriter, "");
    });
});



