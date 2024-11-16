import express from 'express';

const app = express();

const PORT = 3005 || process.env.PORT;


app.get('/', (req, res) => {
    res.status(200).json({
        status : 200,
        message : "hello world"
    })
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})