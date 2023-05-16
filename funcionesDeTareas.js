const fs = require('fs');


let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return tareas = JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (tarea) {
        return fs.writeFileSync(this.archivo, JSON.stringify(tarea, null, 3));
    },
    guardarTareas: function (tarea) {
        tareas.push(tarea)
        this.escribirJSON(tareas) 
    },
    filtrarPorEstado: function(estado) {
        let i=0;
        console.log("\nTareas en progreso\n----------------")
        tareas.forEach((tarea,index) => {
          if (tarea.estado.includes(estado)) {
            i++;
            console.log((i) + '. ' + tarea.titulo + ' - ' + tarea.estado);
          }

        });
      

    }
}
module.exports = archivoTareas;