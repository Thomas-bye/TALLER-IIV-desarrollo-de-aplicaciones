


function mostrar(id){
    document.querySelectorAll('.tema').forEach(x=>{
        x.style.display='none';
        x.classList.remove('activo');
    });

    let elemento = document.getElementById(id);
    elemento.style.display='block';
    elemento.classList.add('activo');
}