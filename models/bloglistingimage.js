var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var photoSchema = new Schema({
  path:  { type: String }
  });
var Photolisting =mongoose.model('Photolistings', photoSchema);

module.exports=Photolisting;
