
const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser;
let page;

let bookLibraryUrl = `http://127.0.0.1:5500/index.html`;

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

let corespondationMessages = {
    1: {
        author: "Alex",
        title: "Hello",
        
    },
    2: {
        author: "Boby",
        title: "Hey, Alex! I`m fine, thank you! And how are you?"
    },
}

describe('Book library tests ', function () {
    before(async () => {
        // за да се виждат тестове през браузъра
        browser = await chromium.launch({ headless: false, slowMo: 1000 });
        //  browser = await chromium.launch();
    });
    // before и  after се изпълняват по един път преди и след  всички тестове 
    after(async () => { await browser.close(); });

    // beforeEach и  afterEach се изпълняват преди и след всеки тест
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    describe('Should load correct server', () => {

        it.only("Should call correct server", async () => {
            // подавам данните
            await page.route('**/jsonstore/collections/books', route => route.fulfill(fakeResponse(corespondationMessages)));
            // отивам на страницата
            await page.goto(bookLibraryUrl);
            // изчаквам зачвката
            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('#loadBooks'),
            ]);
            // проверявам резултата
            let expectedResult = await response.json();
            expect(expectedResult).to.eql(corespondationMessages);

        });

        it("Should textarea correct complete", async () => {
            // подавам данните
            await page.route('**/jsonstore/messenger', route => route.fulfill(fakeResponse(corespondationMessages)));
            // отивам на страницата
            await page.goto(messengerUrl);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#refresh'),
            ]);

            // държи се като queryselector
            // резултата който се получава
            let messagesTextArea = await page.$eval('#messages', (textArea) => textArea.value);
            // резултата който се очаква от сървара
            let expectedResult = Object.values(corespondationMessages).map(v => `${v.author}: ${v.content}`).join('\n');
            expect(messagesTextArea).to.eql(expectedResult);

        });
    });

    describe('Should correct create messages and send it', () => {


        it("Should create complete correctlly message", async () => {

            let requestData = undefined;

            let expectedResult = {
                author: 'Marty',
                content: 'Heey'
            };

            await page.route('**/jsonstore/messenger', (route, request) => {
                // проверявам дали заявлата е post
                if (request.method().toUpperCase() === 'POST') {
                    // взимам данните
                    requestData = request.postData();
                    route.fulfill(fakeResponse(createdMessage))
                }

            });

            await page.goto(messengerUrl);
            // взимаме автора и съобщението 
            await page.fill("#author", expectedResult.author);
            await page.fill("#content", expectedResult.content);

            await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#submit'),
            ]);

            let actualResult = JSON.parse(requestData);

            expect(actualResult).to.eql(expectedResult);

        });

        it("Should clear message form", async () => {


            let requestData = undefined;
            let expectedResult = {
                author: 'Marty',
                content: 'Heey'
            };
            await page.route('**/jsonstore/messenger', (route, request) => {

                if (request.method().toUpperCase() === 'POST') {
                    requestData = request.postData();
                    route.fulfill(fakeResponse(createdMessage))
                }
            });

            await page.goto(messengerUrl);
            await page.fill("#author", expectedResult.author);
            await page.fill("#content", expectedResult.content);

            await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#submit'),
            ]);

            let authorInput = await page.$eval('#author', a => a.value);
            let messageInput = await page.$eval('#content', c => c.value);

            expect(authorInput).to.equal('');
            expect(messageInput).to.equal('');

        });
    })
});
