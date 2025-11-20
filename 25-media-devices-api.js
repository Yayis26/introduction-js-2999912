const buttonPermissions = document.querySelector('.button-permissions');
// Cada que se llama un evento se devuelve un callback y un callback es una función
buttonPermissions.addEventListener('click', async () => {
    try {
        //Solicitar permisos para el video 
        await navigator.mediaDevices.getUserMedia({ video: true, audio: true })

        const permission = await Notification.requestPermission();

        //Mostrar el estado del permiso 
        console.log('Estado del permiso', permission); // Este puede ser granted, denied, default 

        if (permission === 'granted') {
            new Notification('Permisos concedidos', {
                body: 'Camara y micrófono activada',
                icon: 'assets/Abby_Patosa.png'
            })
        } else {
            console, log('Permiso de notificación denegado')
        }
    }
    catch (error) {
        console.log(error);
    }
});

