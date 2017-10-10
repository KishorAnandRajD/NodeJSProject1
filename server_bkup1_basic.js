const express=require('express');

var app=express();

// First arg is root dir (http://localhost:3000/)
// Second arg is method to be returned/response
app.get('/',(req,res)=>{
  //res.send('<h1>Hello Express!!</h1>'); // HTTP request to be displayed to the requestor

  // Pass object and can be viewed in the URL as JSON view http://localhost:3000/
  res.send({
    name:'Kishor',
    likes:[
      'biking',
      'music'
    ]
  });
});

// Another route (http://localhost:3000/about ) apart from root dir
app.get('/about',(req,res)=>{
  res.send('About page requested')
});


// Bad response with error. Send JSON with errorMessage
app.get('/bad',(req,res)=>{
  // Send a object as response
  res.send({
    errorMessage:'Unable to handle request'
  });
});



// Port. Use the URL localhost:3000
app.listen(3000);
