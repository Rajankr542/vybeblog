var express =require("express");
var router =express.Router();
var Campground=require("../models/campgrounds");
var passport       =require("passport"); 



router.get("/blogs",function(req,res){
var filter_value="All";
	Campground.find({},function(err,allcampgrounds){
		if(err){
			console.log(err);
		}else{
			res.render("campgrounds/campgrounds",{campgrounds:allcampgrounds.reverse(),filter_value:filter_value});

		}
	});
});


router.post("/blogs/category/All",function(req,res){
var filter_value="All";
    Campground.find({}, function(err, foundcampgrounds) {
		if(err){
			console.log(err);
		}else{ 
      		  res.render("campgrounds/campgrounds",{campgrounds:foundcampgrounds,filter_value:filter_value});
		}
	});
});


router.post("/blogs/category/Health-&-fitness",function(req,res){
var filter_value="Health & fitness";
    Campground.find({'blogtype': filter_value}, function(err, foundcampgrounds) {
		if(err){
			console.log(err);
		}else{
      		  res.render("campgrounds/campgrounds",{campgrounds:foundcampgrounds,filter_value:filter_value});
		}
	});
});

router.post("/blogs/category/Lifestyle-&-Leisure",function(req,res){
var filter_value="Lifestyle & Leisure";
    Campground.find({'blogtype': filter_value}, function(err, foundcampgrounds) {
		if(err){
			console.log(err);
		}else{
      		  res.render("campgrounds/campgrounds",{campgrounds:foundcampgrounds,filter_value:filter_value});
		}
	});
});


router.post("/blogs/category/Design-&-Art",function(req,res){
var filter_value="Design & Art";
    Campground.find({'blogtype': filter_value}, function(err, foundcampgrounds) {
		if(err){
			console.log(err);
		}else{
      		  res.render("campgrounds/campgrounds",{campgrounds:foundcampgrounds,filter_value:filter_value});
		}
	});
});



router.post("/blogs/category/Self-Development",function(req,res){
var filter_value="Self Development";
    Campground.find({'blogtype': filter_value}, function(err, foundcampgrounds) {
		if(err){
			console.log(err);
		}else{
      		  res.render("campgrounds/campgrounds",{campgrounds:foundcampgrounds,filter_value:filter_value});
		}
	});
});



router.post("/blogs/category/:id",function(req,res){
var filter_value=req.params.id;
    Campground.find({'blogtype': filter_value}, function(err, foundcampgrounds) {
		if(err){
			console.log(err);
		}else{
      		  res.render("campgrounds/campgrounds",{campgrounds:foundcampgrounds,filter_value:filter_value});
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
