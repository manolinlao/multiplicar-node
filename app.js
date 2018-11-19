const color = require("colors");
const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar');

let base = 4;

crearArchivo(base)
  .then(archivo=>{
    console.log(`archivo creado ${archivo}`.red);
  })
  .catch(error=>{
    console.log(error);
  })

  listarTabla(base,10);
