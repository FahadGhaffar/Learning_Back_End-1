const { model } = require("mongoose")


const login = async (req, res) => {


    const { username, password } = await req.body
    console.log(username, password);
    console.log(req.body)
    res.send('Fake Login/Register/Signup Route')

}


const dashboard = (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)

    res.status(200).json({ msg: `Hello, John Doe`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}` })


}

module.exports = {

    login, dashboard

}