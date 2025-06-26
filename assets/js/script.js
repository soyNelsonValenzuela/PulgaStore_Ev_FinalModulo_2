const mostrarfecha = () => {
    const ahora = new Date();
    const diaSemana = ahora.toLocaleString('es-CL', { weekday: 'long' });
    const dia = ahora.getDate();
    const mes = ahora.toLocaleString('es-CL', { month: 'long' });
    const anio = ahora.getFullYear();
    const hora = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    document.getElementById('date-container').innerHTML = `
        <p class="m-0">${diaSemana}, ${dia} de ${mes} de ${anio}</p>
        <p class="m-0">${hora}:${minutos}:${segundos}</p>
    `;
};
mostrarfecha();
setInterval(() => {
    mostrarfecha();
}, 1000);