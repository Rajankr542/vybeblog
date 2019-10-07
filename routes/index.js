var express    =require("express"),
router         =express.Router(),
User           =require("../models/user"),
Photo          =require("../models/blogphoto"),
passport       =require("passport"),
multer         = require('multer'),
path           = require('path');


var storageEngine = multer.diskStorage({
  destination: './public/files/blog',
  filename: function(req, file, fn){
    fn(null,  new Date().getTime().toString()+'-'+file.fieldname+path.extname(file.originalname));
  }
}); 
var upload =  multer({
  storage: storageEngine,
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


router.post('/uploadblogimage',function(req,res){
 upload(req, res, function(err){
         if (err) {
             console.log(err);
         }else{
        if(req.file == undefined){
          
          res.redirect('/?msg=2');
        }else{
             
            var fullPath = "/files/blog/"+req.file.filename;
            var document = {
              path:     fullPath, 
              caption:   req.body.caption
            };
  
          var photo = new Photo(document); 
          photo.save(function(error){
            if(error){ 
              throw error;
            } 
            res.send({link:fullPath});
         });
      }
    }
  });
});

router.get("/",function(req,res){
	res.render("landing");
});

router.get("/signup",function(req,res){
	res.render("register");
});

router.post("/signup",function(req,res){
	var newUser =new User({username:req.body.username});
	User.register(newUser,req.body.password,function(err,user){
		if(err){
			console.log("err");
			return res.render("register");
		}
		passport.authenticate("local")(req,res ,function(){
			res.redirect("/campgrounds");
		});
	});
});
router.get("/login",function(req,res){
	res.render("login");
});

router.post("/login",passport.authenticate("local",
{
successRedirect:"/admin",
failureRedirect:"/login"
}),function(req,res){
});

router.get("/logout",function(req,res){
	req.logout();
	res.redirect("/campgrounds");
});

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

module.exports=router;