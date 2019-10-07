var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");
var Filter_value = require("./models/filter_values");

data=[
{ name: 'New to Seattle? Check out these absurdly beautiful public parks',
  image: "/images/banner.jpg",
  alt:'Delhi hill',
  description:'<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32</p><p class="bolder_text">Best Time to Go</p><p><img src="/files/blog/1570447913394-photo.jpg" style="width: 1128px;" class="fr-fic fr-dib"></p><div class="quate_div"><p class="des_sec_page_quate">Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.</p></div><p class="bolder_text">Where to Stay</p><p><img src="/files/blog/1570450711850-photo.jpg" style="width: 1128px;" class="fr-fic fr-dib"></p><p>Combining the elegance and gentility of an Edwardian home, the Union Street Inn is the perfect pied-&agrave;-terre for those who want to explore San Francisco. With only 6 guest rooms, this is the perfect spot for anyone looking for comfort and intimacy in their accommodation.</p><p>San Francisco&rsquo;s most historic hotel, Palace Hotel, dates back to 1875 and is located in Downtown SF. At one point in time, it was the largest and most costly hotel in the world. It is still timelessly beautiful. Even if you don&rsquo;t stay here, come for afternoon high tea in the Garden Court and a cocktail at the Pied Piper.</p><p>Airbnb is also a great way to arrange accommodation during your visit and offers a variety of apartments and rooms for rent across the city at competitive prices.</p><p class="bolder_text">Enjoy a Delicious Breakfast</p><p><img src="/files/blog/1570451435247-photo.jpg" style="width: 1128px;" class="fr-fic fr-dib"><strong>Sam&rsquo;s Anchor Cafe (SF Staple Sunday Brunch):</strong> Across the bay, in Tiburon, this lovely cafe offers great seafood, brunch, and burgers, with lovely views out over the sea. Take the blue and gold fleet ferry over to Sam&rsquo;s Anchor Cafe for a perfect Sunday Brunch.</p><p><strong>Nopa:</strong> Nopa&rsquo;s weekend brunch is a delightful change of pace from traditional egg and potato packed menus. And, you guessed it, you&rsquo;ll need a reservation a week or two ahead of plans. Otherwise, try showing up 30 minutes before opening and you might be able to grab a seat at the bar.</p><p><strong>Mama&rsquo;s on Washington Square:</strong> Gobble down your French Toast at Mama&rsquo;s, a local favorite for 50+ years. Menu items include fluffy benedicts, homemade jam, fresh omelets, spicy Italian sausage, five types of French toast.</p>',
  blogtype:'Health & fintness',
  activity_status:'active'
},
{ name: 'New to Seattle? Check out these absurdly beautiful public parks',
  image: "/images/banner.jpg",
  alt:'Delhi hill',
  description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  blogtype:'Travel',
  activity_status:'active'
},
{ name: 'New to Seattle? Check out these absurdly beautiful public parks',
  image: "/images/banner.jpg",
  alt:'Delhi hill',
  description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  blogtype:'Music',
  activity_status:'active'
},
{ name: 'New to Seattle? Check out these absurdly beautiful public parks',
  image: "/images/banner.jpg",
  alt:'Delhi hill',
  description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  blogtype:'Lifestyle $ Leisure',
  activity_status:'active'
},
{ name: 'New to Seattle? Check out these absurdly beautiful public parks',
  image: "/images/banner.jpg",
  alt:'Delhi hill',
  description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  blogtype:'Technologies',
  activity_status:'active'
},
{ name: 'New to Seattle? Check out these absurdly beautiful public parks',
  image: "/images/banner.jpg",
  alt:'Delhi hill',
  description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  blogtype:'Design & Art',
  activity_status:'active'
},
{ name: 'New to Seattle? Check out these absurdly beautiful public parks',
  image: "/images/banner.jpg",
  alt:'Delhi hill',
  description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  blogtype:'Self Development',
  activity_status:'active'
},
{ name: 'New to Seattle? Check out these absurdly beautiful public parks',
  image: "/images/banner.jpg",
  alt:'Delhi hill',
  description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  blogtype:'Entertainment',
  activity_status:'active'
},
{ name: 'New to Seattle? Check out these absurdly beautiful public parks',
  image: "/images/banner.jpg",
  alt:'Delhi hill',
  description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  blogtype:'Business',
  activity_status:'active'
},
{ name: 'New to Seattle? Check out these absurdly beautiful public parks',
  image: "/images/banner.jpg",
  alt:'Delhi hill',
  description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  blogtype:'Health & fintness',
  activity_status:'active'
},
{ name: 'New to Seattle? Check out these absurdly beautiful public parks',
  image: "/images/banner.jpg",
  alt:'Delhi hill',
  description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  blogtype:'Travel',
  activity_status:'active'
},
{ name: 'New to Seattle? Check out these absurdly beautiful public parks',
  image: "/images/banner.jpg",
  alt:'Delhi hill',
  description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  blogtype:'Music',
  activity_status:'active'
}
]

function seedDB(){
      Filter_value.deleteMany({},function(err){
        if(err){
        console.log(err);
        }else{
        Filter_value.create({filter_value:'All'},function(err,filter_value){
        if(err){
        console.log(err);
        }else{
        console.log("filter value is created");
        Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.deleteMany({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        Comment.create(
                                { author: "Rajan",
                                text: "This place is great, but I wish there was internet",
                                email:"Rajankumar@gmail.com"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                   
                                }
                            });
                    }
                });
            });
        });
    }); 

                                          }
                                        })
                                      }
                                    });


}

module.exports = seedDB;





