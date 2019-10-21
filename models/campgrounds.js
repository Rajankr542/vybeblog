var mongoose=require('mongoose');
var Campground = mongoose.model('Campground', { 
	name: String,
	image: String,
	alt:String,
	description:String,
	comments:
	[
		{
			type:mongoose.Schema.Types.ObjectId,
			ref:'Comment'
		}
	],
	blogtype:String,
	author:String,
	date:String,
	activity_status:String 
});
module.exports =Campground;
