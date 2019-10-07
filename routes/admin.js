var express =require("express");
var router =express.Router();
var Campground=require("../models/campgrounds");
var passport       =require("passport"); 



router.get("/admin",function(req,res){
	Campground.find({},function(err,allcampgrounds){
		if(err){
			console.log(err);
		}else{
			res.render("admin/bloglisting",{campgrounds:allcampgrounds});
		}
	});
});

router.get("/admin/campgrounds/new",isLoggedIn,function(req,res){
	res.render("admin/new");
});

router.post("/admin/campgrounds",function(req,res){
	var camp_name=req.body.camp_name;
	var camp_image=req.body.camp_image;
	var camp_alt=req.body.camp_img_alt;
	var camp_description=req.body.camp_description;
	var camp_blogtype=req.body.camp_blogtype;
	var activity_status=req.body.camp_activity;

	var newCampground={name:camp_name,image:camp_image,alt:camp_alt,description:camp_description,blogtype:camp_blogtype ,activity_status:activity_status};
	Campground.create(newCampground,function(err,newlycreated){
		if(err){
			console.log(err);
		}else{
			res.redirect("/admin");
		}

	});
});


router.get("/admin/campgrounds/:id/edit",function(req,res){
  Campground.findById(req.params.id,function(err,Campground){
  	if(err){
  		console.log("error");
  	}else{
  		res.render("admin/edit",{Campground:Campground});
  	}
  });
});

router.put("/admin/campgrounds/:id",function(req,res){
Campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,updateCampground){
if(err){
	console.log(err);
}else{
	res.redirect("/admin");
}
});
});


router.delete("/admin/campgrounds/:id",function(req,res){
Campground.findByIdAndDelete(req.params.id,function(err){
if(err){
	console.log(err);
}else{
	res.redirect("/admin");
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
