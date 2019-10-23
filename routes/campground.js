var express =require("express");
var router =express.Router();
var Campground=require("../models/campgrounds");
var passport       =require("passport"); 



router.get("/blogs",function(req,res){
	Campground.find({},function(err,allcampgrounds){
		if(err){
			console.log(err);
		}else{
			res.render("campgrounds/campgrounds",{campgrounds:allcampgrounds.reverse()});

		}
	});
});


router.post("/blogs/category/All",function(req,res){
var filter_value=req.params.id;
console.log(filter_value);
    Campground.find({}, function(err, foundcampgrounds) {
		if(err){
			console.log(err);
		}else{ 
      		  res.render("campgrounds/campgrounds",{campgrounds:foundcampgrounds});
		}
	});
});


router.post("/blogs/category/:id",function(req,res){
var filter_value=req.params.id;
console.log(filter_value);
    Campground.find({'blogtype': filter_value}, function(err, foundcampgrounds) {
		if(err){
			console.log(err);
		}else{
			console.log(foundcampgrounds);
      		  // res.redirect("/campgrounds#row filter_listing_container",{campgrounds:allcampgrounds.reverse()});  
      		  res.render("campgrounds/campgrounds",{campgrounds:foundcampgrounds});
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
