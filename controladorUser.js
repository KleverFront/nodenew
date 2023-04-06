const MorritaModel = require('./Modelos');

const obtenerMorrControlla = (rec, respuesta) => {
    MorritaModel.obtenerMorrita((sintaxisError, data) => {
        if (sintaxisError) {
            respuesta.status(500).json({ mensaje: 'Error dcsadsa' })
        } else {
            respuesta.send(data);
        }

    });
}

const crearMorrControlla = (req, respuesta) => {

    const crearMorrita = new MorritaModel({
        idmorra: req.body.idmorra,
        nombre: req.body.nombre,
        direcion: req.body.direcion,
        telefono: req.body.telefono

    });

    MorritaModel.crearMorrita(crearMorrita, (sintaxisError, data) => {
        if (sintaxisError) {
            console.log('Error al crear mi pana')
            respuesta.status(500).json({ mensaje: 'Error al crear' })
        } else {
            respuesta.send(data);
            console.log("Se a guardado los datos")
        }
    });
}

module.exports = {
    obtenerMorrControlla,
    crearMorrControlla
};