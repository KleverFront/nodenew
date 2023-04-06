const ServerhumitasAndTamales = require('express');
const app = ServerhumitasAndTamales();
const bodyParser = require('body-parser');
const conexxion = require('./CoMysql');
const rutasMorritas = require('./rutas');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use('mysql.js',conect);
app.use('/', rutasMorritas);




var puerto = process.env.PORT || 1110;

app.listen(puerto, ()=>{
    console.log("Servidor Inicializada en el puerto: ", puerto);
});

