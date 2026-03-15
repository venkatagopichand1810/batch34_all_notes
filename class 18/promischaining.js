// book a ticket
// searching the train function
function searchTrains(from, to) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Train-101", "Train-201"])
        }, 1000)
    })

}

// select train function 
function selectTrain(train) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(train)
        }, 1000)
    })

}

// 3. check the seat availablity

function checkSeatAvailability(train) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ train, seat: 25 })
        }, 1000)
    })

}

//4. Book the seat

function bookSeat(seatInfo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ ticketId: "TCK123", seatInfo })
        }, 1000)
    })

}



//5. make payment
function makePayment(ticket) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ status: "PAID", ticket })
        }, 1000)
    })

}


//6. send sms
function sendSMS(payment) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ sms: "Confirmation sms sent", payment })
        }, 1000)
    })

}

// 7) Generate ticket

function generateInvoice(smsStatus) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ invoiceID: "INv123", smsStatus })
        }, 1000)
    })

}

console.log("starting the railway ticket booking");

searchTrains("chennai", "mumbai")
    .then((trains) => {
        console.log("1. Trains found", trains)
        return selectTrain(trains[0])
    })
    .then((selectedTrain) => {
        console.log("2. Train selected", selectedTrain)
        return checkSeatAvailability(selectedTrain)
    })
    .then((availablity) => {
        console.log("3. Seat availablity", availablity)
        return bookSeat(availablity)
    })
    .then((ticket) => {
        console.log("4. Seat Booked", ticket)
        return makePayment(ticket)
    })
    .then((paymentStatus) => {
        console.log("5. Payment Done", paymentStatus)
        return sendSMS(paymentStatus)
    })
    .then((smsStatus) => {
        console.log("6. SMS sent", smsStatus);
        return generateInvoice(smsStatus)
    })
    .then((invoice) => {
        console.log("7. Invoice generated", invoice)
        console.log("Congrats, Booking is completed successfully")
    })
