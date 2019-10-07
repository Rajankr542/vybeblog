var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var photoSchema = new Schema({
  path:  { type: String },
  caption: { type: String }
  });
var Photo =mongoose.model('Photos', photoSchema);

module.exports=Photo;
