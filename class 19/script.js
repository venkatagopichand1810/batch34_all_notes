try {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(d)
} catch (err) {
    console.log("techincal issues try again")
}
finally {
    console.log("DONE")
}


try {
    let num = 10;
    num()
} catch (err) {
    console.log(err.message)
} finally {
    console.log("Done")
}
