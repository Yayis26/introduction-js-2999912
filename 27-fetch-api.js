//Fetc API 
// Es una finción de JS que permite realizar peticiones HTTP, incluyendo GET, POST, PUT, DELETE, etc, es ima API moderna. 
function getEmployees() {
    //Aquí se copiaría la URL, por ejemplo https://www.ricoprogramar.com 

    const file = 'employees.json';
    fetch(file)
        //Aquí se obtienen los datos 
        .then(result => {
            return result.json();
        })
        //Se muestran los datos 
        .then(data => {
            console.log(data);

            //Desestructuración de objetos 

            const { employees } = data;
            console.log(employees);
            //Se itera por el arreglo 
            employees.forEach(employee => {
                console.log(employee.id);
                console.log(employee.username);
                console.log(employee.job);
                document.querySelector('.content').textContent = employee.username;
            });
        })

}

getEmployees();