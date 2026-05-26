async function getch(url){
    const response = await fetch(url);
    const json_promise = await response.json();
    return json_promise;
}

function veletlen_szam(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function uj_info(){
    console.log("megnyomódtam");
    

    let data = await getch("https://starwars-databank-server.onrender.com/api/v1/vehicles");
    console.log(data);
    console.log("adat megérkezett és már ki is írtam");
    

    let jarmuvek = data.data;
    

    let randomelem = veletlen_szam(0, jarmuvek.length - 1);
    

    faj.innerHTML = jarmuvek[randomelem].name;
    leir.innerHTML = jarmuvek[randomelem].description;
    kep.src = jarmuvek[randomelem].image;
}


const gomb = document.getElementById("gomb");
const faj = document.getElementById("faj");
const kep = document.getElementById("kep");
const leir = document.getElementById("leir");

gomb.addEventListener("click", uj_info);
