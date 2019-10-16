var express       =require("express");
var router        =express.Router();
var Campground    =require("../models/campgrounds");
var Comment       =require("../models/comment");


router.post("/blogs/:id/comments",function(req,res){
Campground.findById(req.params.id,function(err,Campground){
	if(err){
		console.log(err);
		res.redirect("/blogs");
	}else{
		Comment.create(req.body.comment,function(err,comment){
			if(err){
				console.log(err);
			}else{
				Campground.comments.push(comment);
				Campground.save();
				res.redirect("/blogs/"+Campground._id);
			}
		});
	}
	});
});

module.exports=router;