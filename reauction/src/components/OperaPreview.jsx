class AuctionDetails {
    /**
     * 
     * @param {Number} price the starting price of the opera
     * @param {Number} nrPeopleInterested how many people have bid
     * @param {Array<Number>} offersHistory all the past offers
     * @param {Number} currentBid current price
     * @param {Date} lastDay last day available to place a bid 
     */
    constructor(price, nrPeopleInterested, offersHistory, currentBid, lastDay) {
        this.price = price
        this.nrPeopleInterested = nrPeopleInterested
        this.offersHistory = offersHistory
        this.currentBid = currentBid
        this.lastDay = lastDay
    }
}

class OperaProps {
    /**
     * 
     * @param {string} image 
     * @param {string} name 
     * @param {string} location 
     * @param {string} periodOfTime 
     * @param {string} description 
     * @param {string} collection 
     * @param {AuctionDetails} auctionDetails 
     */
    constructor(image, name, location, periodOfTime, description, collection, auctionDetails) {
        this.image = image
        this.name = name
        this.location = location
        this.periodOfTime = periodOfTime
        this.description = description
        this.collection = collection
        this.auctionDetails = auctionDetails
    }
}

/**
 * 
 * @param {OperaProps} opera 
 */
export default function OperaPreview(opera) {
    return <>

    </>
}

OperaPreview.OperaOnly = () => {
    
}