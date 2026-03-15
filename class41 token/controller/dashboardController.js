
// protected dashboard only opens for the valid users 

exports.getDashboard = (req, res) => {
    res.json({
        message: "Welcome to dashboard",
        user: req.user
    })
}