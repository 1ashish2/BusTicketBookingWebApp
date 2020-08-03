const mongoose = require('mongoose')

var PostMessage = mongoose.model('PostMessage',
{
    name : {type:String},
    email : {type:String},
    phone :{type:String},
    password:{type:String}
},'register')
var PostMessagebuslist = mongoose.model('PostMessagebuslist',
{   

    operatorName:{type:String},
    fare:{type:String},
    totalseats:{type:String},
    availableseat:{type:String},
    bookedseat:{type:Array},
    Departure:{type:String},
    date:{type:String},
    Arrival:{type:String},
    bustype:{type:String},
    routeid:{type:String},
    from:{type:String},
    to:{type:String}

},'buslist')

module.exports = { PostMessage,PostMessagebuslist}