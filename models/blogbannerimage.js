var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var photoSchema = new Schema({
  path:  { type: String }
  });
var Photobanner =mongoose.model('Photobanners', photoSchema);

module.exports=Photobanner;
