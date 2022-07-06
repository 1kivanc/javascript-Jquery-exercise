const Clock = document.querySelector(".clock");


const tick = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


    const html = 
    `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
    
    `;

    Clock.innerHTML= html;




};

setInterval(tick, 1000);