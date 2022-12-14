require("dotenv").config();

require("express-async-errors");


// const { application } = require("express");
const express = require("express")

const app = express();
const router = express.Router();

const connectDB = require("./db/connect");

const productsRouter = require("./routes/products");

const notFoundMiddleware = require("./middlerware/error-handler")
const notFound = require("./middlerware/not-found")

// app.use(express.json)
// router.route('/').get((req, res) => {
//     console.log("checking")
//     // res.send(`<h1>Store APi</h1 ><a href="/api/v1/products"> Products route</a>`)
//     res.send("hello");
// })
app.get('/', (req, res) => {

    res.send(`<h1>Store APi</h1 ><a href="/api/v1/products"> Products route</a>`)

})

app.use('/api/v1/products', productsRouter);
app.get("/check", (req, res) => {

    res.send('hello')

})
app.use(notFoundMiddleware);
app.use(notFound);
const Port = process.env.PORT || 5000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(Port, console.log(`you current Port is ${Port}`));
    } catch (error) {
        console.log(error);
    }
    //   connectDB

}

start()