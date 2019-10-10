var express =require("express");
var router =express.Router();
var Campground=require("../models/campgrounds");
var passport       =require("passport"),
multer         = require('multer'),
path           = require('path');



router.get("/admin",function(req,res){
	Campground.find({},function(err,allcampgrounds){
		if(err){
			console.log(err);
		}else{
			res.render("admin/bloglisting",{campgrounds:allcampgrounds});
		}
	});
});

router.get("/admin/campgrounds/new",function(req,res){
	res.render("admin/new");
});





var storageEngineforbanner = multer.diskStorage({
  destination: './public/files/blog/banner',
  filename: function(req, file, fn){
    fn(null,  new Date().getTime().toString()+'-'+file.fieldname+path.extname(file.originalname));
  }
}); 

var upload =  multer({
  storage: storageEngineforbanner,
  limits: { fileSize:5 * 1024 * 1024 },
  fileFilter: function(req, file, callback){
    validateFile(file, callback);
  }
}).single('photo');

var validateFile = function(file, cb ){
  allowedFileTypes = /jpeg|jpg|png|gif/;
  var extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  var mimeType  = allowedFileTypes.test(file.mimetype);
  if(extension && mimeType){
    return cb(null, true);
  }else{
    cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
  }
}


router.post('/admin/campgrounds',function(req,res){
 upload(req, res, function(err){
         if (err) {
             console.log(err);
         }else{
        if(req.file == undefined){
          
          res.redirect('/?msg=2');
        }else{
             
 var fullPath = "/files/blog/banner/"+req.file.filename;
 var camp_name=req.body.camp_name;
 var camp_image=req.body.camp_image;
 var camp_alt=req.body.camp_img_alt;
 var camp_description=req.body.camp_description;
 var camp_blogtype=req.body.camp_blogtype;
 var activity_status=req.body.camp_activity;
            var document = {
              name:camp_name,
              image:fullPath,
              alt:camp_alt,
              description:camp_description,
              blogtype:camp_blogtype,
              activity_status:activity_status
            };
  
 Campground.create(document,function(err,newlycreated){
            if(err){ 
              throw err;
            } 
            res.redirect("/admin");
         });
      }
    }
  });
});


router.put('/admin/campgrounds/:id/banner',function(req,res){
 upload(req, res, function(err){
         if (err) {
             console.log(err);
         }else{
        if(req.file == undefined){
          
          res.redirect('/?msg=2');
        }else{
             
 var fullPath = "/files/blog/banner/"+req.file.filename;
            var document = {
              image:fullPath,
            };
  
Campground.findByIdAndUpdate(req.params.id,document,function(err,updateCampground){
            if(err){ 
              throw err;
            } 
            res.redirect("/admin");
         });
      }
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
