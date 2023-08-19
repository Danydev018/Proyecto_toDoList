const input_tarea = document.getElementById("div__input-tarea");
const btnAgregarTarea  = document.getElementById("btn-tarea");
const lista_tareas = document.getElementById("lista-tareas");
const texto_sinTareas = document.getElementById("vacio");

btnAgregarTarea.addEventListener("click", (e)=>{
    e.preventDefault();
    if(input_tarea.value != ''){

        const li_tarea = document.createElement("li");
        li_tarea.className = 'item-tarea'
        const texto_tarea = document.createElement("p");

        const tarea = input_tarea.value
        texto_tarea.textContent = tarea;

        li_tarea.appendChild(texto_tarea);
        li_tarea.appendChild(addFinishedBtn());
        li_tarea.appendChild(addDeleteBtn());
        lista_tareas.appendChild(li_tarea);

        input_tarea.value = '';
        texto_sinTareas.style.display = 'none';
    }else{
        alert('por favor ingrese una tarea');
    }
    
})

function addDeleteBtn(){
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'deleteBtn';

    deleteBtn.addEventListener('click', (e)=>{
        const item = e.target.parentElement;
        lista_tareas.removeChild(item);
        
        const items = document.querySelectorAll("li");

        if(items.length === 0){
            texto_sinTareas.style.display = 'block';
        }
    });

    return deleteBtn;
}

function addFinishedBtn(){
    const finishedBtn = document.createElement('button');
    finishedBtn.textContent = '✔';
    finishedBtn.className = 'finishedBtn'

    finishedBtn.addEventListener('click', (e)=>{
        const item = e.target.parentElement;
        item.firstChild.classList.toggle("tachado");
    });

    return finishedBtn;
}

