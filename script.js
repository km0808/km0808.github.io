async function getfech(url){
    const response = await fetch(url);
    const json_promise = await response.json();
    return json_promise;
}

async function uj_info(){
    let data = await getfech(
        "https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json"
    );

    let output = document.getElementById("output");

    output.innerHTML = "";

    data.slice(0, 10).forEach(function(character){
        let div = document.createElement("div");
        div.textContent = character.name;
        output.appendChild(div);
    });
}