require("colors");
var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://unifjmonti:HtKXKkuUL2AiZKRj@tentativa.kbjzkcs.mongodb.net/?retryWrites=true&w=majority&appName=Tentativa`;
const client = new MongoClient(uri);

async function iniciarServidor() {
    try {
        await client.connect();
        console.log("Conectado ao MongoDB!".green);

        const dbo = client.db("exemplo_bd");
        const usuarios = dbo.collection("usuarios");

        var app = express();
        app.use(express.static('./public'));
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.set('view engine', 'ejs');
        app.set('views', './views');

        // Rotas

        app.get("/inicio", function(req, res){
            res.redirect("../Aula_1/projects.html");
        });

        app.post("/inicio", function(req, res){
            res.redirect("../Aula_1/projects.html");
        });

        app.get("/cadastrar", function(req, res){
            let nome = req.query.nome;
            let login = req.query.login;
            let senha = req.query.senha;
            let nasc = req.query.nascimento;

            console.log(nome, login, senha, nasc);
        });

        app.post("/cadastrar", function(req, res){
            let nome = req.body.nome;
            let login = req.body.login;
            let senha = req.body.senha;
            let nasc = req.body.nascimento;
            console.log(nome, login, senha, nasc);

            var data = { db_nome: nome, db_login: login, db_senha: senha, db_nasc: nasc };

            usuarios.insertOne(data, function(err){
                if(err){
                    res.render("resposta",{status: "Erro", nome, login, senha, nasc});
                } else {
                    res.render("resposta",{status: "Sucesso", nome, login, senha, nasc});
                }
            });
        });

        app.get("/for_ejs",function(req, res){
            let valor = req.query.valor;
            res.render("divs", { valor });
        });

        app.post('/login', function(req, res){
            let login = req.body.login;
            let senha = req.body.senha;
            console.log(login, senha);

            var data = { db_login: login, db_senha: senha };

            usuarios.find(data).toArray(function(err, items){
                console.log(items);
                if (err) {
                    res.render("resposta_login", { status: "erro ao logar" });
                } else if (items.length === 0) {
                    res.render("resposta_login", { status: "usuario/senha não encontrado" });
                } else {
                    res.render("resposta_login", { status: "usuario " + login + " logado" });
                }
            });
        });

        app.post('/atualizar_senha', function(req, res){
            let login = req.body.login;
            let senha = req.body.senha;
            let novasenha = req.body.novasenha;

            let data = { db_login: login, db_senha: senha };
            let new_data = { $set: { db_senha: novasenha } };

            usuarios.updateOne(data, new_data, function(err, result){
                console.log(result);

                if (err) {
                    res.render('resposta_login', { status: "Erro ao atualizar usuário!" });
                } else if (result.modifiedCount == 0) {
                    res.render('resposta_login', { status: "Usuário/senha não encontrado!" });
                } else {
                    res.render('resposta_login', { status: "Usuário atualizado com sucesso!" });
                }
            });
        });

        app.post('/remover_usuario', function(req, res){
            let login = req.body.login;
            let senha = req.body.senha;

            let data = { db_login: login, db_senha: senha };

            usuarios.deleteOne(data, function(err, result){
                console.log(result);

                if (err) {
                    res.render('resposta_login', { status: "Erro ao remover usuário!" });
                } else if (result.deletedCount == 0) {
                    res.render('resposta_login', { status: "Usuário/senha não encontrado!" });
                } else {
                    res.render('resposta_login', { status: "Usuário removido com sucesso!" });
                }
            });
        });

        // Inicia o servidor na porta 80
        var server = http.createServer(app);
        server.listen(80, () => {
            console.log("Servidor rodando ...".rainbow);
        });

    } catch (err) {
        console.error("Erro ao conectar ao MongoDB:", err);
    }
}

iniciarServidor();
