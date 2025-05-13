
require("colors");
let http = require("http");
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://dbUser:uMEFDkOU80TeQs8q@cluster0.jiatwwx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true });

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, resp){
    resp.redirect('public/projects.html');
})



app.get('/cadastrar', function(req, resp){

    let nome = req.query.cadastrar_nome;
    let login = req.query.cadastrar_login;
    let nascimento = req.query.cadastrar_nascimento;
    let senha = req.query.cadastrar_senha;

    console.log(nome, login, nascimento, senha, "GET");
    resp.redirect('view/successo.html');

})

app.post('/cadastrar', function(req, resp){
    let nome = req.body.cadastrar_nome;
    let login = req.body.cadastrar_login;
    let nascimento = req.body.cadastrar_nascimento;
    let senha = req.body.cadastrar_senha;

    console.log(nome, login, nascimento, senha, "POST");

    resp.redirect('view/successo.html');
})

app.post('/logar', function(req, resp){
    let login = req.body.logar_login;
    let senha = req.body.logar_senha;
    console.log(login, senha);


    let resp_bd = false;
    if(resp_bd == true){
        
        resp.render('view/resposta.ejs', {resposta: "Sucesso!", mensagem: "Usuário cadastrado com sucesso!"})
    }
    else{
        resp.render('view/resposta.ejs', {resposta: "Falha!", mensagem: "Login ou senha inválidos!"})
    }

})

app.get('/divs', function(req, resp){
    //cary pega o que ta na url
    let qtde = req.query.qtde;

    resp.render('view/divs.ejs', {quantidade: qtde});
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
            resp.render('view/resposta.ejs', {resposta: "Falha!", mensagem: "Usuário já cadastrado!"})
        }
    })

    if(achouCadastro == false){
        cadastros.push(novoCadastro);

        resp.render('view/resposta.ejs', {resposta: "Sucesso!", mensagem: "Usuário cadastrado com sucesso!"})
    }
    
})

app.post('/login', function(req, resp){
    let login = req.body.logar_login;
    let senha = req.body.logar_senha;
    console.log(login, senha);
    
    cadastros.forEach(cadastro =>{
        if(cadastro.login == login && cadastro.senha == senha){
            achouCadastro = true;
            resp.render('view/resposta.ejs', {resposta: "Sucesso!", mensagem: "Usuário loggado com sucesso!"})
        }

    })

    if(achouCadastro == false){
        resp.render('view/resposta.ejs', {resposta: "Falha!", mensagem: "Login ou senha inválidos!"})
    }
})

app.get('/cadastrar_livro', function(req, resp){
    let nome = req.query.cadastra_nome;
    let autor = req.query.cadastra_autor;
    let isbn = req.query.cadastra_isbn;
    let editora = req.query.cadastra_editora;
    let data = req.query.cadastra_data;

    console.log(nome, autor, isbn, editora, data);


    client.db("Joao").collection("livros").insertOne(
    { 
        db_nome: nome,
        db_autor: autor,
        db_isbn: isbn,
        db_editora: editora,
        db_data: data
        }, function (err) {
        if (err) {
            resp.render('view/resposta.ejs', {resposta: "Falha!", mensagem: "Erro ao cadastrar livro!"});
        }
        else {
            resp.render('view/resposta.ejs', {resposta: "Sucesso!", mensagem: "Livro cadastrado com sucesso!"});     
        };
    });
})

app.get('/buscar_livro_nome', function(req, resp){
    let nome = req.query.buscar_nome;


    client.db("Joao").collection("livros").find(
        {db_nome: nome}).toArray(function(err, items) {
            console.log(items);
            if (items.length == 0) {
                resp.render('view/resposta.ejs', {resposta: "Falha!", mensagem: "Livro não encontrado!"});
            }
            else if (err) {
                resp.render('view/resposta.ejs', {resposta: "Falha!", mensagem: "Erro ao buscar livro!"});
            }
            else {
                resp.render('view/resposta.ejs', {resposta: "Sucesso!", mensagem: items.length + " livro(s) encontrado(s)!"});       
            };
        });
})

app.get('/buscar_livro_isbn', function(req, resp){
    let isbn = req.query.buscar_isbn;


    client.db("Joao").collection("livros").find(
        {db_isbn: isbn}).toArray(function(err, items) {
            console.log(items);
            if (items.length == 0) {
                resp.render('view/resposta.ejs', {resposta: "Falha!", mensagem: "Livro não encontrado!"});
            }
            else if (err) {
                resp.render('view/resposta.ejs', {resposta: "Falha!", mensagem: "Erro ao buscar livro!"});
            }
            else {
                resp.render('view/resposta.ejs', {resposta: "Sucesso!", mensagem: items.length + " livro(s) encontrado(s)!"});     
            };
        });
})

app.get('/atualizar_editora_livro', function(req, resp){
    let isbn = req.query.buscar_isbn;
    let editora = req.query.atualizar_editora;


    client.db("Joao").collection("livros").updateOne(
        { 
            db_isbn: isbn
        },
        { 
            $set: {db_editora: editora} 
        }, function (err, result) {
            console.log(result);
            if (result.modifiedCount == 0) {
                resp.render('view/resposta.ejs', {resposta: "Falha!", mensagem: "Livro não encontrado!"})
            }else if (err) {
                resp.render('view/resposta.ejs', {resposta: "Falha!", mensagem: "Erro ao atualizar livro!"})
            }else {
                resp.render('view/resposta.ejs', {resposta: "Sucesso!", mensagem: "Livro atualizado com sucesso!"})       
            };
    });
})

app.get('/deletar_livro', function(req, resp){
    let isbn = req.query.buscar_isbn;

    client.db("Joao").collection("livros").deleteOne(
        { 
            db_isbn: isbn
        } , function (err, result) {
            console.log(result);
            if (result.deletedCount == 0) {
                resp.render('view/resposta.ejs', {resposta: "Falha!", mensagem: "Livro não encontrado!"})
            }else if (err) {
                resp.render('view/resposta.ejs', {resposta: "Falha!", mensagem: "Erro ao deletar livro!"})
            }else {
                resp.render('view/resposta.ejs', {resposta: "Sucesso!", mensagem: "Livro deletado com sucesso!"})       
            };
        });

})

app.get('/cadastrar_post', function(req, resp){
    let titulo = req.query.cadastra_titulo;
    let resumo = req.query.cadastra_resumo;
    let conteudo = req.query.cadastra_conteudo;

    client.db("Joao").collection("posts_blog").insertOne(
        { 
            db_titulo: titulo,
            db_resumo: resumo,
            db_conteudo: conteudo
            }, function (err) {
            if (err) {
                resp.render('view/resposta_blog.ejs', {resposta: "Falha!", mensagem: "Erro ao cadastrar post!"})
            }
            else {
                resp.render('view/resposta_blog.ejs', {resposta: "Sucesso!", mensagem: "Post cadastrado com sucesso!"})       
            };
        });
})


app.get('/blog', function (req, resp){
    client.db("Joao").collection("posts_blog").find({}).toArray(function(err, posts) {
        if (err) {
            resp.render('view/resposta.ejs', { resposta: "Falha!", mensagem: "Erro ao buscar posts!" });
        }
        else {
            resp.render('view/blog.ejs', {
                posts
            });
        }
        
    });
});



let server = http.createServer(app);

server.listen(80);

console.log("servidor rodando...");

