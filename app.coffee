mongoose = require "mongoose"
_ = require "underscore"

#mongoose.connect('mongodb://localhost/my_database');
mongoose.connect 'mongodb:test:homework@dbh29.mongolab.com:27297/haiku'


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
  
  
console.log(process.env.MONGOLAB_URL)


  


