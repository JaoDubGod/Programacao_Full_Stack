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

// LAB 8
var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

app.get('/', function (requisicao, resposta) {
    resposta.redirect('public/projects.html')
})

app.get('/inicio', function (requisicao, resposta) {
    var nome = requisicao.query.info;
    console.log(nome);
})

app.post('/inicio', function (requisicao, resposta) {
    var data = requisicao.body.data;
    console.log(data);
})

app.get('/cadastra', function (requisicao, resposta) {
    var nome = requisicao.query.nome;
    var sobrenome = requisicao.query.sobrenome;
    var nascimento = requisicao.query.nascimento;
    var civil = requisicao.query.civil;

    console.log("Cadastro GET:", nome, sobrenome, nascimento, civil);

    resposta.render('resposta_cadastro', { nome, sobrenome, nascimento, civil })
})

app.post('/cadastra', function (requisicao, resposta) {
    var nome = requisicao.body.nome;
    var sobrenome = requisicao.body.sobrenome;
    var nascimento = requisicao.body.nascimento;
    var civil = requisicao.body.civil;

    console.log("Cadastro POST:", nome, sobrenome, nascimento, civil);
    resposta.render('responsta_cadastro', { nome, sobrenome, nascimento, civil })
})

app.post('login', function (requisicao, resposta) {
    var login = requisicao.body.login;
    var login = requisicao.body.senha;

    console.log("Tentativa de login:", login, senha);

    var resp = false;

    if (resp === true) {
        resposta.render('resposta_login', {})
    }
})