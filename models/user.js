const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define model
const userSchema = new Schema({
    email: {type:String,unique:true,lowercase:true},
    password: String
});

//crete the model class
const ModelClass  = mongoose.model('user',userSchema);

//export the model
moudle.exports = ModelClass;