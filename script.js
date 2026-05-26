async function getfech(url){
    const response = await fetch(url);
    const json_promise = await response.json();
    return json_promise;
}

async function uj_info(){

    let data = await getfech(
        "https://starwars-databank-server.onrender.com/api/v1/vehicles"
    );

    let output = document.getElementById("output");

    output.innerHTML = "";

    data.data.forEach(function(vehicle){

        let div = document.createElement("div");

        div.innerHTML = `
            <h2>${vehicle.name}</h2>
            <p>Modell: ${vehicle.model}</p>
            <p>Gyártó: ${vehicle.manufacturer}</p>
        `;

        output.appendChild(div);
    });
}