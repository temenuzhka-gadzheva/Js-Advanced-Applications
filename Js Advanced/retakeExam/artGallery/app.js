class ArtGallery {
    constructor(creator) {
        this.creator = creator
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 }
        this.listOfArticles = []
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!")
        }
        if (this.listOfArticles.some(x => x.articleName == articleName && x.articleModel == articleModel)) {
            this.listOfArticles.map(x => {
                if (x.articleName == articleName && x.articleModel == articleModel) {
                    x.quantity += quantity
                }
            })
        } else {
            let obj = {
                articleModel,
                articleName,
                quantity
            }
            this.listOfArticles.push(obj);
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        if (this.guests.some(x => x.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }
        let pointsOfGuests = {
            Vip: 500,
            Middle: 250
        }
        let points = pointsOfGuests[personality]
        if (points == undefined) {
            points = 50;
        }
        let structureOfGuest = {
            guestName,
            points,
            purchaseArticle: 0
        }

        this.guests.push(structureOfGuest);

        return `You have successfully invited ${guestName}!`

    }

    buyArticle(articleModel, articleName, guestName) {
        if (!this.listOfArticles.some(x => x.articleName == articleName)) {
            throw new Error("This article is not found.")
        } else {
            let article = this.listOfArticles.filter(x => x.articleName == articleName && x.articleModel == articleModel)[0]
            if (article) {
                if (article.quantity == 0) {
                    return `The ${articleName} is not available.`
                }
                if (!this.guests.some(x => x.guestName == guestName)) {
                    return "This guest is not invited."
                }

                let currPointsOfAricle = this.possibleArticles[article.articleModel];
                let guest = this.guests.find(x => x.guestName == guestName);
                if (guest.points < currPointsOfAricle) {
                    return "You need to more points to purchase the article."
                }
                guest.points -= currPointsOfAricle;
                guest.purchaseArticle++
                article.quantity--

                return `${guestName} successfully purchased the article worth ${currPointsOfAricle} points.`
            }
            else {
                throw new Error("This article is not found.")
            }
        }
    }

    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            let output = [];
            output.push('Articles information:');

            this.listOfArticles.forEach(x => {
                output.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`)
            })

            return output.join('\n')
        }
        if (criteria === 'guest') {
            let output = [];
            output.push('Guests information:');

            this.guests.forEach(x => {
                output.push(`${x.guestName} - ${x.purchaseArticle}`)
            })

            return output.join('\n')
        }
    }
}