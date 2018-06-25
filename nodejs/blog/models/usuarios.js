module.exports = function(mongoose){
    var Schema = mongoose.Schema;

    var UsuarioSchema = new Schema({
        nombre    : String,
        apellido  : String,
        correo    : String
    });
    return mongoose.model('usuarios', UsuarioSchema);
}
