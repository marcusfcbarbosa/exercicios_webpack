const webpack = require('webpack')

//expor um objeto que representa toda a configuração
module.exports ={
    entry: './ex/index.js',//Ponto de entrada
    output:{

        path:__dirname + '/public',//Onde sera gerada a saida do arquivo javascript ( __dirname = diretorio atual )
        filename:'./bundle.js'//posso colocar o nome que quiser
    },
    devServer: {
        port:8080,//a porta onde ele será executado
        contentBase:'./public'//pasta base onde contem todos os arquivos que ele vai carregar
    }
}