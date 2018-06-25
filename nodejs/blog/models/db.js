if(!global.hasOwnProperty('db')){
    var mongoose = require('mongoose');
    var dbName = 'curso';

    mongoose.connect('mongodb://localhost/'+dbName,{}, function(err){
        if(err) throw err;
        console.log("***************** Conectado a la base de datos ******************");
    });

    global.db = {
        mongoose : mongoose,
        // Blog
        // Comentarios
        // Likes
        Usuario : require('./usuarios')(mongoose)
    }
}
module.exports = global.db;
