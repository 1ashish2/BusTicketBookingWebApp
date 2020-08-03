const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId


var {PostMessagebuslist } = require('../models/postMessage')


router.get('/', (req, res) => {
    PostMessagebuslist.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})

module.exports= router;