// JavaScript for music player
document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('assets/musica.mp3');
    const playPauseBtn = document.querySelector('.btn-play-pause');
    const playIcon = playPauseBtn.querySelector('.icon-play');
    const pauseIcon = playPauseBtn.querySelector('.icon-pause');
    const progressBar = document.querySelector('.progress-bar');
    const progressContainer = document.querySelector('.progress-container');
    const rewindBtn = document.querySelector('.btn-rewind');
    const forwardBtn = document.querySelector('.btn-forward');

    // Initially show play icon, hide pause
    playIcon.style.display = 'inline-block';
    pauseIcon.style.display = 'none';

    // Toggle play/pause
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'inline-block';
        } else {
            audio.pause();
            playIcon.style.display = 'inline-block';
            pauseIcon.style.display = 'none';
        }
    });

    // Update progress bar as audio plays
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + '%';
    });

    // Handle seeking when clicking on progress bar
    progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });

    // Rewind 10 seconds
    rewindBtn.addEventListener('click', () => {
        audio.currentTime = Math.max(0, audio.currentTime - 10);
    });

    // Forward 10 seconds
    forwardBtn.addEventListener('click', () => {
        audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
    });

    // When audio ends, reset to play icon and progress to 0
    audio.addEventListener('ended', () => {
        playIcon.style.display = 'inline-block';
        pauseIcon.style.display = 'none';
        progressBar.style.width = '0%';
        audio.currentTime = 0;
    });

    // ---------------------- temporizador -------------------------
    function updateTimer() {
        const targetDate = new Date("august 29, 2026 21:30:00").getTime();
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
});





// --------------------------- dresscode-------------------------


const showImageBtn = document.getElementById("showImage");
const lightbox = document.getElementById("lightbox");
const closeButton = document.getElementById("closeButton");

showImageBtn.addEventListener("click", function () {
    lightbox.style.display = "flex";
});

closeButton.addEventListener("click", function () {
    lightbox.style.display = "none";
});

const boton = document.getElementById('mostrarBoton');
const textoDesplegable = document.getElementById('textoDesplegable');

boton.addEventListener('click', () => {
    textoDesplegable.classList.toggle('oculto');
});


// --------------------------------fotos---------------------------------




document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
    });

    // Inicializar Fancybox
    $(".fancybox").fancybox({
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "thumbs",
            "close"
        ],
        loop: true,
        infobar: true,
        arrows: true,
        protect: true,
        animationEffect: "fade",
        transitionEffect: "slide",
        transitionDuration: 500,
        touch: {
            vertical: false,
        },
        autoFocus: false,
    });
});




// --------------------------------gift---------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('mostrarBoton');
    const textoDesplegable = document.getElementById('textoDesplegable');

    boton.addEventListener('click', function () {
        textoDesplegable.classList.toggle('mostrar');
    });
});


function copyText() {
    var aliasText = document.getElementById('alias').innerText; // Obtener el texto del alias
    var tempInput = document.createElement('input');
    tempInput.value = aliasText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Mostrar el mensaje de "¡Copiado!"
    var copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    setTimeout(function () {
        copyMessage.style.display = 'none';
    }, 1500); // Ocultar el mensaje después de 1.5 segundos
}



function copyCbuText() {
    const aliasText = document.getElementById('cbuAlias').textContent;
    const copyMessage = document.getElementById('copyCbuMessage');

    const textarea = document.createElement('textarea');
    textarea.value = aliasText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 2000);
}

// --------------------------- playlist --------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // Definir los números de teléfono
    const phoneNumber1 = '543813524797'; // Número para el primer botón
    const phoneNumber2 = '543816591298'; // Número para el segundo botón

    // Función para enviar mensaje por WhatsApp
    function sendMessage(phoneNumber) {
        const name = document.getElementById('userName').value;
        const message = document.getElementById('whatsappMessage').value;

        if (name.trim() === '' || message.trim() === '') {
            alert('Por favor, completa ambos campos antes de enviar.');
            return;
        }

        const fullMessage = `*Nombre y Apellido:* ${name}\n\n*Tema recomendado:* ${message}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

        // Abre la URL de WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');

        // Mostrar mensaje de confirmación
        alert('Mensaje enviado');

        // Limpiar los campos de entrada
        document.getElementById('userName').value = '';
        document.getElementById('whatsappMessage').value = '';

        // Volver al bloque de formulario
        document.querySelector('.playlist').scrollIntoView({ behavior: 'smooth' });
    }

    // Asignar eventos a los botones
    document.getElementById('botonplay1').addEventListener('click', function () {
        sendMessage(phoneNumber1);
    });

    document.getElementById('botonplay2').addEventListener('click', function () {
        sendMessage(phoneNumber2);
    });
});




// --------------- confirmacion --------------------------------------



document.addEventListener('DOMContentLoaded', function () {
    // Definir los números de teléfono
    const recipientNumber1 = '543815315611'; // Número para el primer botón
    const recipientNumber2 = '543814684023'; // Número para el segundo botón

    // Función para enviar mensaje por WhatsApp
    function sendMessage(phoneNumber) {
        const userName = document.getElementById('userFullName').value.trim();
        const userMessage = document.getElementById('customMessage').value.trim();
        const attendanceStatus = document.querySelector('input[name="attendanceOption"]:checked');

        if (!attendanceStatus) {
            alert('Por favor, selecciona si asistirás o no.');
            return;
        }

        if (userName === '') {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }

        const finalMessage = `*Presencia:* ${attendanceStatus.value}\n*Nombre y Apellido:* ${userName}\n*Mensaje:* ${userMessage ? userMessage : 'N/A'}`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;

        // Abre la URL de WhatsApp en una nueva pestaña
        window.open(whatsappLink, '_blank');

        // Mostrar mensaje de confirmación
        alert('Mensaje enviado');

        // Limpiar los campos de entrada
        document.getElementById('userFullName').value = '';
        document.getElementById('customMessage').value = '';
        document.querySelectorAll('input[name="attendanceOption"]').forEach(radio => radio.checked = false);

        // Volver al bloque de formulario
        document.getElementById('correo').scrollIntoView({ behavior: 'smooth' });
    }

    // Asignar eventos a los botones
    document.getElementById('botoncito1').addEventListener('click', function () {
        sendMessage(recipientNumber1);
    });

    document.getElementById('botoncito2').addEventListener('click', function () {
        sendMessage(recipientNumber2);
    });
});


