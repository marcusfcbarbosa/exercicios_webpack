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
    },
    module:{//usando esses loaders para efetuar uma tradução, pois sem ele o (import from) do ecma script não funciona
        loaders:[{
            test: /.js?$/,//pegando qualquer arquivo .js
            loader:'babel-loader',
            exclude: /node_modules/, //definindo que ele não precisa ler o conteudo que esta no diretorio node_modules, somente os outros da aplicação
            query:{//o que ele vai interpretar 
                presets:['es2015']
            }
        }]
    }
}