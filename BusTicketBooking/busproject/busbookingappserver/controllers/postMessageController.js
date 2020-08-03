const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId


var { PostMessage} = require('../models/postMessage')


router.get('/', (req, res) => {
    PostMessage.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})


router.post('/', (req, res) => {
    var newRecord = new PostMessage({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
})



module.exports = router