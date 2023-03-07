const express = require("express");//importando o express
const app= express();//iniciando o express e passando ela pro app

app.get("/",function(req,res){//criando rota
   //não pode deixar de enviar resposta
    res.send("Bem vindo ao meu site!!")//responder apenas uma vez,pois após enviada a resposta a conexão é fechada

});
app.get("/blog/:artigo?",function(req,res){
    var artigo=req.params.artigo;
    if (artigo){
     res.send("<h2> artigo: " + artigo + " </h2>");   
    }
    else{
        res.send("<h3>Bem vindo ao meu blog: www.patospatos.com</h3>")
    }
    
})
app.get("/canal/youtube",function(req,res){
    res.send("<h1>bem vindo ao meu canal</h1>")
})
app.get("/ola/:nome",function(req,res){//rota com parâmetro
    //req=> dados enviados pelo usuário
    //res=> resposta que vai ser enviada para o usuário
    // se usar "?" depois do parâmetro ele se torna opcional
    var nome = req.params.nome;// passando o parâmetro pra uma variável para utiliza-lo no site
    res.send ("<h1> Oi "+ nome  +" </h1>");

});


app.listen(4141,function(erro){
    if (erro){
        console.log("Ocorreu um erro!");
    }
    else{
        console.log("Servidor iniciado com sucesso")
    }
})

