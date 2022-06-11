const inquirer = require('inquirer');
require('colors');
const preguntas = [
    {
        type:'list',
        name:'opcion',
        message:'Escoge una opcion: ',
        choices:[
            {
                value:'1',
                name:'1. Crea tarea'
            },
            {
                value:'2',
                name:'2. Lista tareas'
            },
            {
                value:'3',
                name:'3. Listar tareas completadas'
            },
            {
                value:'4',
                name:'4. Listar tareas pendientes'
            },
            {
                value:'5',
                name:'5. Completar tarea(s)'
            },
            {
                value:'6',
                name:'6. Borrar tarea(s)'
            },
            {
                value:'0',
                name:'0. Salir\n'
            }
        ]
    }
]

const consultas = [{
        type:'input',
        name:'texto',
        message:'Deseas continuar o salir:',

}]

const inquirerMenu = async()=>{
    //console.clear();
    console.log('--------------------------'.blue);
    console.log('  Seleccione una opcion:'.blue);
    console.log('--------------------------\n'.blue);

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async() => {
    console.log('\n')
    await inquirer.prompt(consultas);
}

module.exports={
    inquirerMenu,
    pausa,

}
