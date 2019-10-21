var express =require("express");
var router =express.Router();
var Campground=require("../models/campgrounds");
var passport       =require("passport"); 



router.get("/blogs",function(req,res){
	Campground.find({},function(err,allcampgrounds){
		if(err){
			console.log(err);
		}else{
			res.render("campgrounds/campgrounds",{campgrounds:allcampgrounds});

		}
	});
});



router.get("/blogs/:id",function(req,res){
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundcampground){
		if(err){
			console.log(err);
		}else{
	Campground.find({},function(err,allcampgrounds){
		if(err){
			console.log(err);
		}
		else{
			var allcampgrounds=allcampgrounds.reverse();
			res.render("campgrounds/descriptionshow",{campgrounds:foundcampground,peopleread:allcampgrounds});
		}
	});
		}
	});
});


function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

module.exports=router;
