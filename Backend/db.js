const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://sdevProject:password255@addb.qkkovqx.mongodb.net/?retryWrites=true&w=majority",
//mongoose.connect("mongodb+srv://protester:protester_2023@cluster0.fdxdlrw.mongodb.net/",
                    
{useNewUrlParser: true})

module.exports = mongoose