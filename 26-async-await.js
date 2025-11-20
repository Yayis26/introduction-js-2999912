function downloadClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes...');
        //Estas líneas se ejecutan después de pasado un tienpo determinado en la programación 
        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 2000);
    })
}
async function app() {
    try {
        const clients = await (downloadClientes())
        console.log(clients);


    } catch (error) {
        console.log(error);
    }
}
app();

function dowloadLastedOrders() {
    return new Promise(resolve => {
        console.log('Descargando órdenes...');

        setTimeout(() => {
            resolve('Las órdenes fueron descargadas')
        }, 5000);
    })
}

async function app2() {
    try {
        const orders = await (dowloadLastedOrders())
        console.log(orders);

    } catch (error) {
        console.log(error);
    }
}
app2();
//----------------------------------------------------
//Otro método 
function downloadClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes...');
        //Estas líneas se ejecutan después de pasado un tienpo determinado en la programación 
        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 2000);
    })
}
async function app() {
    try {
        const result = await Promise.all([downloadClientes(), dowloadLastedOrders])
        console.log(result);


    } catch (error) {
        console.log(error);
    }
}
app();