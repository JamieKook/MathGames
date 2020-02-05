const express = require("express"); 
const exphbs = require("express-handlebars"); 

PORT = process.env.PORT || 8081; 

const app = express(); 

app.use(express.static("public")); 
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

// require("./routes/api-routes")(app); 
require("./routes/html-routes")(app); 

app.engine("handlebars", exphbs({defaultLayout: "main"})); 
app.set("view engine", "handlebars"); 

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:"+PORT); 
}); 