// // LAB 7

// // inclui o módulo http
// var http = require('http');
// // inclui o módulo express
// var express = require('express' ) ;

// // cria a variável app, pela qual acessaremos
// // os métodos / funções existentes no framework
// // express
// var app = express ( ) ;

// // método use() utilizado para definir em qual
// // pasta estará o conteúdo estático
// app. use(express.static('./public'));

// // cria o servidor
// var server = http.createServer(app);

// // define o número da porta que o servidor ouvirá
// server.listen(80);

// // mensagem exibida no console para debug
// console. log("servidor rodandodo..." ) ;

// // IP: 10.102.6.123

require("colors");
let http = require("http");
let express = require("express");
let app = express();
let bodyParser = require("body-parser");


app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, resp){
    resp.redirect('public/projects.html');
})



app.get('/cadastra', function(req, resp){
    
    let nome = req.query.cadastrar_nome;
    let login = req.query.cadastrar_login;
    let nascimento = req.query.cadastrar_nascimento;
    let senha = req.query.cadastrar_senha;

    console.log(nome, login, nascimento, senha, "GET");
    resp.redirect('view/sucesso.html');

})

app.post('/cadastra', function(req, resp){
    let nome = req.body.cadastrar_nome;
    let login = req.body.cadastrar_login;
    let nascimento = req.body.cadastrar_nascimento;
    let senha = req.body.cadastrar_senha;

    console.log(nome, login, nascimento, senha, "POST");
    
    resp.redirect('view/sucesso.html');
})

app.post('/login', function(req, resp){
    let login = req.body.logar_login;
    let senha = req.body.logar_senha;
    console.log(login, senha);

    
    let resp_bd = false;
    if(resp_bd == true){
        
        resp.render('resposta.ejs', {resposta: "Sucesso!", mensagem: "Usuário cadastrado com sucesso!"})
    }
    else{
        resp.render('resposta.ejs', {resposta: "Falha!", mensagem: "Login ou senha inválidos!"})
    }

})

app.get('/divs', function(req, resp){
    
    let qtde = req.query.qtde;

    resp.render('views/divs.ejs', {quantidade: qtde});
})


let cadastros = [];
let achouCadastro = false;


app.post('/cadastra', function(req, resp){
    let novoCadastro = {
        nome: req.body.cadastrar_nome,
        login: req.body.cadastrar_login,
        senha: req.body.cadastrar_senha
    };

    cadastros.forEach(cadastro =>{
        if(cadastro.login == novoCadastro.login){
            achouCadastro = true;
            resp.render('resposta.ejs', {resposta: "Falha!", mensagem: "Usuário já cadastrado!"})
        }
    })

    if(achouCadastro == false){
        cadastros.push(novoCadastro);

        resp.render('resposta.ejs', {resposta: "Sucesso!", mensagem: "Usuário cadastrado com sucesso!"})
    }
    
})

app.post('/login', function(req, resp){
    let login = req.body.logar_login;
    let senha = req.body.logar_senha;
    console.log(login, senha);
    
    cadastros.forEach(cadastro =>{
        if(cadastro.login == login && cadastro.senha == senha){
            achouCadastro = true;
            resp.render('resposta.ejs', {resposta: "Sucesso!", mensagem: "Usuário loggado com sucesso!"})
        }

    })

    if(achouCadastro == false){
        resp.render('resposta.ejs', {resposta: "Falha!", mensagem: "Login ou senha inválidos!"})
    }
})
