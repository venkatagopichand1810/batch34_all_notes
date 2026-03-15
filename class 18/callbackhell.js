function prepareBiryani(callback) {
    setTimeout(() => {
        console.log("Step 1: Buy chicken and clean it");
        callback()
    }, 2000)
}

function prepareMasala(callback){
    setTimeout(() => {
        console.log("Step 2: Prepare masala for the chicken");
        callback()
    }, 3000)
 
}
function cookRice(callback){
    setTimeout(() => {
        console.log("Step 3: Cooking the rice")
        callback()
    }, 5000)
 
}

function cooker(callback){
    setTimeout(() => {
        console.log("Step 4: put all the massala, chicken and rice");
        callback()
    }, 6000)
 
}


function waitforsometimetocook(callback){
    setTimeout(() => {
        console.log("Step 5: leave it for sometime to cook properly ");
        callback()
    }, 7000)
 
}
function biryaniDone(callback){
    setTimeout(() => {
        console.log("Step 6: Yummy briyani is done ");
        callback()
    }, 8000)
 
}

function serve(){
    setTimeout(() => {
        console.log("Step 7: serve the biryani ");
    }, 1000)
 
}

prepareBiryani(() =>{
    prepareMasala(() => {
        cookRice(() => {
            cooker(() => {
               waitforsometimetocook(() => {
                    biryaniDone(() => {
                        serve()
                    })
               }) 
            })
        })
    })
})

//we are doing nested callback, muliple callbacks are there.. callback hell