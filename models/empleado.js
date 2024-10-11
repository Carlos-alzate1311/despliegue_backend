const mongoose = require('mongoose');
const empleadoModel = new mongoose.Schema(
   {
    name:{
        type: String
    },
    position:{
        type: String
    },
    office:{
        type: String
    },
    salary:{
        type: Number
    }
   } ,
   {
    timestamps:true,
    versionKey:false,
   }
)

const ModelEmpleado = mongoose.model("empleados", empleadoModel);
module.exports = ModelEmpleado;