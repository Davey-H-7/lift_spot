

const express = require('express');
const app = express();
const createRouter = require('./helpers/create_router.js')
const cors = require('cors');

const MongoClient = require('mongodb').MongoClient

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
.then((client) => {
    const db = client.db('lift_spot');
    const runCollection = db.collection('lifts');
    const runsRouter = createRouter(runCollection);
    app.use('/api/lifts', runsRouter);
})
.catch(console.error)

app.listen(9000, function(){
    console.log("Listening on port 9000");
})