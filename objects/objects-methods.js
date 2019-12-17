let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    //this is a method
    checkAvailability: function (partySize) {
        //console.log(this)
        //   console.log(this.guestCapacity)

        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft //true
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCapacity + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCapacity - partySize
    }

}
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

//let status = restaurant.checkAvailability(4)
//console.log(status)\