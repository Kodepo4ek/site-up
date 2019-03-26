console.log('start');
  //Подключение Mongodb
    const MongoClient = require("mongodb").MongoClient; // npm i mongodb

    const url = "mongodb://localhost:27017/";
    const mongoClient = new MongoClient(url, { useNewUrlParser: true });

    let http = require('http');
    let fs = require('fs');
//Считывания формы
var express = require('express');

var bodyParser= require('body-parser'); // npm i body-parser (библиотека для считывание html информации,считывание формы)
// https://www.npmjs.com/package/body-parser

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'ejs');
// Настраиваем статическую файловую папку для маршрута по умолчанию.
app.use(express.static(__dirname + '/public')); // коренная папка с файлами (html, css, js) 

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/about', function(req, res){
    res.sendFile(__dirname + "/about.ejs");
});

   // var check = document.name['category'];

    app.post('/about', urlencodedParser, function(req, res){
        if (!req.body) return res.sendStatus(400);
        //var check = document.getElementsByName("category").value;
        //const body = (req.body);
        var userName =  (req.body.name);
        var userPhone = (req.body.phone);
        var userMail = (req.body.email);
        var data = Date();
        var user = {name: userName, phone: userPhone, mail: userMail, время: data}; // создания переменной в которой инфа
        console.log(user); //вывод на экран инфу
        
         mongoClient.connect(function(err, client, body){
             
             const db = client.db("WebOKA");// деректория базы данных
             const collection = db.collection("Zakaz"); // передача в коллекцию
                    
                       collection.insertOne(user, function(err, result){
          
                            if(err){ 
                                return console.log(err);
                            }
                                console.log(result.ops);
                    }) 
             
                        });
        res.render('about'); // рендеринг у вас получилось
              client.close();
                       
        });
    
    

               

app.listen(3000); 

              


// Форма "цены"


              




