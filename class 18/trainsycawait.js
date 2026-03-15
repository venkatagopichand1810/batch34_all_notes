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


async function bookrailTicket() {

    console.log("starting the railway ticket booking");

    const trains = await searchTrains("chennai", "mumbai");
    console.log("1. Trains found", trains)

    const selectedTrain = await selectTrain(trains[0])
    console.log("2. Train selected", selectedTrain)

    const availablity = await checkSeatAvailability(selectedTrain);
    console.log("3. Seat availablity", availablity)

    const ticket = await bookSeat(availablity);
    console.log("4. Seat Booked", ticket)

    const paymentStatus = await makePayment(ticket);
    console.log("5. Payment Done", paymentStatus)

    const smsStatus = await sendSMS(paymentStatus);
    console.log("6. SMS sent", smsStatus);


    const invoice = await generateInvoice(smsStatus);
    console.log("7. Invoice generated", invoice)
    console.log("Congrats, Booking is completed successfully")


}

bookrailTicket()
