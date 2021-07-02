
class Story {

    constructor(title, creator) {

        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {

        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;

        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;

        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }

    like(username) {

        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");

        } else if (username === this.creator) {
            throw new Error("You can't like your own story!");

        } else {
            this._likes.push(username);

            return `${username} liked ${this.title}!`
        }
    }


    dislike(username) {

        if (this._likes.includes(username)) {

            const indexOfUser = this._likes.indexOf(username);
            this._likes.splice(indexOfUser, 1);

            return `${username} disliked ${this.title}`;

        } else {
            throw new Error("You can't dislike this story!");
        }
    }

    comment(username, content, id) {

        if (id === undefined ||
            !this._comments.some(x => x.id === id)) {

            let commObj = {

                id: this._comments.length + 1,
                username,
                content,
                replies: [],
            };

            this._comments.push(commObj);

            return `${username} commented on ${this.title}`;

        } else {
            let findingId = this._comments.find(x => x.id === id);
            let indexOfComment = this._comments.indexOf(findingId);

            if (this._comments[indexOfComment].replies === undefined) {
               
                this._comments[indexOfComment].replies = [];
            }

            let obj = {
                id: `${id}.${this._comments[indexOfComment].replies.length + 1}`,
                username,
                content,
            };

            this._comments[indexOfComment].replies.push(obj);

            return "You replied successfully";
        }
    }

    toString(sortingType) {

        let output = `Title: ${this.title}\n`;
        output += `Creator: ${this.creator}\n`;
        output += `Likes: ${this._likes.length}\n`;
        output += `Comments:\n`;

        if (sortingType === 'asc') {

            for (const comm of this._comments) {

                output += `-- ${comm.id}. ${comm.username}: ${comm.content}\n`;

                if (comm.replies.length > 0) {

                    for (const rep of comm.replies) {

                        output += `--- ${rep.id}. ${rep.username}: ${rep.content}\n`;
                    }
                }
            }
        } else if (sortingType === 'desc') {

            let reversedComments = this._comments.reverse();

            for (const revComm of reversedComments) {

                output += `-- ${revComm.id}. ${revComm.username}: ${revComm.content}\n`;

                if (revComm.replies.length > 0) {

                    let reversedReplies = revComm.replies.reverse();
                   

                    for (const revRep of reversedReplies) {

                        output += `--- ${revRep.id}. ${revRep.username}: ${revRep.content}\n`;
                    }
                }
            }

        } else if (sortingType === 'username') {

            let sortingUsersByName = this._comments
            .sort((a, b) => a.username.localeCompare(b.username));

            for (const user of sortingUsersByName) {

                output += `-- ${user.id}. ${user.username}: ${user.content}\n`;

                if (user.replies.length > 0) {

                    let sortedReplies = user.replies
                    .sort((a, b) => a.username.localeCompare(b.username));

                    for (const sortRep of sortedReplies) {

                        output += `--- ${sortRep.id}. ${sortRep.username}: ${sortRep.content}\n`;
                    }
                }
            }

        }

     

        return output.trim();
    }
};


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
