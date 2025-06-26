const formulario = document.getElementById('formulario');
const validar = () => {
    const usuario = document.getElementById('usuario').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    const mensajeAlerta = document.getElementById('mensaje-alerta-container');
    if (usuario === '' || correo === '' || mensaje === '') {
        mensajeAlerta.innerHTML = '<div class="col-auto bg-danger-subtle rounded p-3 mx-auto mt-4 "> <p class="m-0 text-danger">Todos los campos son obligatorios.</p> </div>';
        return;
    } else if (!correoValido) {
        mensajeAlerta.innerHTML = '<div class="col-auto bg-danger-subtle rounded p-3 mx-auto mt-4"> <p class="m-0 text-danger">El correo electrónico no es válido.</p> </div>';
        return;
    } else {
        mensajeAlerta.innerHTML = '<div class="col-auto bg-success-subtle rounded p-3 mx-auto mt-4"> <p class="m-0 text-success">Formulario enviado correctamente.</p> </div>';
    }
    document.getElementById('usuario').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('mensaje').value = '';
};
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validar();
});