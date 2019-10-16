var express =require("express");
var router =express.Router();
var Campground=require("../models/campgrounds");
var Filter_value=require("../models/filter_values");
var passport       =require("passport"); 



router.get("/blogs",function(req,res){
	Campground.find({},function(err,allcampgrounds){
		if(err){
			console.log(err);
		}else{
			Filter_value.find({},function(err,filter_value){
				if(err){
					console.log(err);
				}else{
			res.render("campgrounds/campgrounds",{campgrounds:allcampgrounds,Filter_value:filter_value});

				}

			});
		}
	});
});



router.get("/blogs/:id",function(req,res){
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundcampground){
		if(err){
			console.log(err);
		}else{
			res.render("campgrounds/descriptionshow",{campgrounds:foundcampground});
		}
	});
});

router.put("/blogs/filter_value/:id",function(req,res){
  var filter_value=req.body.filter_value;
  var filter_value={filter_value:filter_value};
  Filter_value.findByIdAndUpdate(req.params.id,filter_value,function (err){
    if(err){
      console.log(err);
    }else{
      res.redirect("/blogs#row filter_listing_container");
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
