var express    		=require("express"),
app            		=express(),
mongoose       		=require('mongoose'),
bodyParser     		=require("body-parser"),
methodOverride 		=require("method-override"),
Campground     		=require("./models/campgrounds"),
Comment        		=require("./models/comment"),
User 		   		=require("./models/user"), 
Photo 		   		=require("./models/blogphoto"),                     
Filter_value 		=require("./models/filter_values"),                     
seedDB         		=require("./seeds"),
passport      	 	=require("passport"),
LocalStrategy 		=require("passport-local"),
multer         		=require('multer'),
path  		   		=require('path'),
commentsroutes 		=require("./routes/comment"),
campgroundroutes	=require("./routes/campground"),
indexroutes 		=require("./routes/index"),
adminroutes			=require("./routes/admin");



mongoose.connect('mongodb+srv://rajankr5422:Rajan@9818@cluster0-jlil9.mongodb.net/Yelp_camp?retryWrites=true&w=majority', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));


//passport configuration
app.use(require("express-session")({
	secret:"Over again Rajan is the best",
	resave:false,
	saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req,res,next){
	res.locals.currentUser=req.user;
	next();
});

app.use(indexroutes);
app.use(campgroundroutes);
app.use(commentsroutes);
app.use(commentsroutes);
app.use(adminroutes);


app.listen(process.env.PORT,process.env.IP,function(req,res){
	console.log("This page serve on the port 3000!!!");
});