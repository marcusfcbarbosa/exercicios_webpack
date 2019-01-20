const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
    //A principio ele somente está carregando arquivos de extensão .js, dessa forma devemos implementar um outro plugin para que ele possa ler outros arquivos como por exemplo
    //extensoes .css
    plugins:[
        new ExtractTextPlugin('app.css')
    ],
    module:{//usando esses loaders para efetuar uma tradução, pois sem ele o (import from) do ecma script não funciona
        loaders:[{
            test: /.js?$/,//pegando qualquer arquivo .js
            loader:'babel-loader',
            exclude: /node_modules/, //definindo que ele não precisa ler o conteudo que esta no diretorio node_modules, somente os outros da aplicação
            query:{//o que ele vai interpretar 
                presets:['es2015','react'],
                plugins: ["transform-object-rest-spread"] //esse plugin é usado para obter o operador Spread ( ... ) usado para clonar objetos
            }
        },{
            test: /\.css?$/,//poder carregar arquivos com extensão .css
            loader:ExtractTextPlugin.extract("style-loader","css-loader")
        }
    ]
    }
}