var mongoose=require('mongoose');
var Comment = mongoose.model('Comment', { author: String, text:String,email:String });
module.exports =Comment;
