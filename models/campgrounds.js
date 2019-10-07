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
	activity_status:String 
});
module.exports =Campground;
