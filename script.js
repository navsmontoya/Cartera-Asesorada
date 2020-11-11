/// Globales ---------------------------------------------------------------

const lista = './Assets/carteraAsesoradaData.txt';
let db = [];
let x = 0;

/// DOM's ------------------------------------------------------------------
const brandCont = document.getElementById('brandContainer');
const main = document.getElementById('main');
const header = document.getElementById('header');
const searchBar = document.getElementById('searchBar');
const bus = document.getElementsByClassName('bus');
const hero = document.getElementById('hero');

/// Event Listeners --------------------------------------------------------
// document.getElementById("crear").addEventListener("click", crear);
// document.getElementById("get").addEventListener("click", addFive);

// document.getElementById('searchBar').addEventListener("keyup", baja);
searchBar.addEventListener("keyup", (e) => {
    const busquedaString = e.target.value;
    const listaFiltrada = db.filter((marca) => {
        return (
        marca.Brand.includes(busquedaString)
        );
    });
    console.log(listaFiltrada);
    // busq(listaFiltrada);
    // listaFiltrada.foreach(cuco => {
    //     header.innerHTML +=
    //     `<div class="brand-container">
    //         <div>
    //             <p class="brand-name">${cuco.Brand}</p>
    //             <p class="brand-rubro">${cuco.Rubro}</p>
    //         </div>
    //     </div>`
    // })
    //If ternario >
    busquedaString.length > 0 ? crear(listaFiltrada) : crear(getDatabaseRecordsAt)
    
    //If tradicional >
    // if(busquedaString.length > 0){
    //     crear(listaFiltrada)
    // }else{
    //     crear(getDatabaseRecordsAt(0))
    // }
    


    });

/// Fetch Principal --------------------------------------------------------
    fetch(lista)
    .then((res) => res.json())
    .then((data) => {

        let div = document.createElement('div');
        div.classList.add('brand-container');

        data.forEach(brand => {
            db.push(brand);
        });
        // crear(getDatabaseRecordsAt(0));
    })

/// Functions --------------------------------------------------------------
function change(){
    document.getElementById("hero").className = "herodos";
    document.getElementById("thanos").className = "buses";
}

function cuantos(){
    console.log(numero.length);
}

function add(){
    x += 5;
}

function init(){
    let div = document.createElement('div');
    div.classList.add('brand-container');

    db.slice(x, x + 5).forEach(brand => {

        main.innerHTML +=
        `<div class="brand-container">
            <div>
                <p class="brand-name">${brand.Brand}</p>
                <p class="brand-rubro">${brand.Rubro}</p>
            </div>
        </div>`
    });
}


function crear(listaFiltrada){
    main.innerHTML = ""
    let div = document.createElement('div');
    div.classList.add('brand-container');
    listaFiltrada.forEach(item => {

        main.innerHTML +=
        `<div class="brand-container">
            <div>
                <p class="brand-name">${item.Brand}</p>
                <p class="brand-rubro">${item.Rubro}</p>
            </div>
        </div>`
    })

}

function addFive(){

    add();

    let div = document.createElement('div');
    div.classList.add('brand-container');

    getDatabaseRecordsAt(x).forEach(brand => {
        main.innerHTML +=
        `<div class="brand-container">
            <div>
                <p class="brand-name">${brand.Brand}</p>
                <p class="brand-rubro">${brand.Rubro}</p>
            </div>
        </div>`
    });
}

function getDatabaseRecordsAt(index){ 
    if(index >= db.length + 5) return "Error"      

    const results = []

    for(var i=index; i < index+5; i++){    
        var cartera = db[i];
        results.push(cartera)
    } 

    console.log(results)
    return results
}

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};