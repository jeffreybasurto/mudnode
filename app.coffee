# for web server
express = require 'express'

# for database 
mongoose = require 'mongoose'
# for optional utiltiy
_ = require 'underscore'

#mongoose.connect('mongodb://localhost/my_database');
mongoose.connect process.env.MONGOLAB_URI


Schema = mongoose.Schema
ObjectId = Schema.ObjectId

Test = new Schema { title: String}
mongoose.model('Test', Test)

MyModel = mongoose.model 'Test'

instance = new MyModel
instance.title = 'hello'

instance.save (err) ->
  console.log("saving")

MyModel.find {}, (err, docs) ->
  _.each docs, (d)-> console.log(d)
  
  
console.log(process.env.MONGOLAB_URI)


  


