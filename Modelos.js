const conexxxion = require('./CoMysql');

const MorritaModel = function (morrita) {
    this.idmorra = morrita.idmorra;
    this.nombre = morrita.nombre;
    this.direcion = morrita.direcion;
    this.telefono = morrita.telefono;
};

MorritaModel.obtenerMorrita = resul => {
    conexxxion.query('Select * from morra', (sintaxisError, respuesta) => {

        if (sintaxisError) {
            resul(null, sintaxisError);
        } else {
            resul(null, respuesta);
        }

    });
}

MorritaModel.crearMorrita = (crear, result) => {
    conexxxion.query('insert into morra set ?', crear, (sintaxisError, respuesta) => {

        if (sintaxisError) {
            console.log('Error al intentar insertar ',sintaxisError);
            result(null, sintaxisError);
            return;
        } else {
            console.log
            result(null, respuesta);
        }

    });
}

module.exports = MorritaModel;