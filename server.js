const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))



const apiRoutes = require('./routes');
app.use('/api/points', apiRoutes)


/*
    Set up MongoDB
 */

const mongoose = require('mongoose')
const uri = "mongodb+srv://pointsApi:pointsApi123@pointsapicluster.u0xqa4b.mongodb.net/PointsDB?retryWrites=true&w=majority"

mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB.')
    })
    .catch((err) => {
        console.error(err)
})


app.listen(3000, () => console.log("Server up and running at port 3000."))