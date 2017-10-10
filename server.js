const express=require('express');
const hbs=require('hbs');  //http://handlebarsjs.com/

var app=express();

// hbs  (Key,Value)
app.set('view engine','hbs');

app.use(express.static(__dirname+'/public')); // ___dirname stores the path to project directory (node web server) . Tell  the program to use this dir as the server.For eg. http://localhost:3000/help.html... will look for help.html file in the /public/ directory

// First arg is root dir (http://localhost:3000/)
// Second arg is method to be returned/response
app.get('/',(req,res)=>{
  //res.send('<h1>Hello Express!!</h1>'); // HTTP request to be displayed to the requestor

  // Pass object and can be viewed in the URL as JSON view http://localhost:3000/
  // res.send({
  //   name:'Kishor',
  //   likes:[
  //     'biking',
  //     'music'
  //   ]
  // });

  //Respond with help.hbs
  res.render('home.hbs',{
    pageTitle:'Home Page',
    welcomeMessage:'Welcome to my homepage website',
    currentYear:new Date().getFullYear()
  });
});

// Another route (http://localhost:3000/about ) apart from root dir
// app.get('/about',(req,res)=>{
//   res.send('About page requested')
// });
// Render static page hbs with view engine
app.get('/about',(req,res)=>{
  //res.render('about.hbs');// Only about page
  // Additional data to be rendered
  res.render('about.hbs',{
    pageTitle:'About Page',
    currentYear:new Date().getFullYear()
  });
});


// Bad response with error. Send JSON with errorMessage
app.get('/bad',(req,res)=>{
  // Send a object as response
  res.send({
    errorMessage:'Unable to handle request'
  });
});



// Port. Use the URL localhost:3000
//app.listen(3000);
// callback with a log message that server is up and running
app.listen(3000,()=>{
  console.log('Server is up and running on port 3000')
});
