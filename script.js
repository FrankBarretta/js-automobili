let automobili = [
    {
        marca: "Toyota",
        modello: "Corolla",
        alimentazione: "Ibrida",
    },

    {
        marca: "Fiat",
        modello: "500",
        alimentazione: "Elettrica",
    },

    {
        marca: "Ford",
        modello: "Fiesta",
        alimentazione: "Benzina",
    },

    {
        marca: "Tesla",
        modello: "Model 3",
        alimentazione: "Elettrica",
    },

    {
        marca: "BMW",
        modello: "Serie 3",
        alimentazione: "Diesel",
    },

    {
        marca: "Audi",
        modello: "A4",
        alimentazione: "Diesel",
    },

    {
        marca: "Renault",
        modello: "Clio",
        alimentazione: "GPL",
    },

    {
        marca: "Hyundai",
        modello: "Kona",
        alimentazione: "Elettrica",
    },

    {
        marca: "Mercedes",
        modello: "Classe C",
        alimentazione: "Ibrida",
    },

    {
        marca: "Peugeot",
        modello: "208",
        alimentazione: "Benzina",
    }
];



let autoAlimentazioneBenzina = [];

let autoAlimentazioneDiesel = [];

let autoAlimentazioneDiversa = [];

let tbody = document.querySelector("tbody");

for (let i = 0; i < automobili.length; i++) {

    if (automobili[i].alimentazione == "Benzina") {
        autoAlimentazioneBenzina.push(automobili[i].marca + " " + automobili[i].modello)
    } else if (automobili[i].alimentazione == "Diesel") {
        autoAlimentazioneDiesel.push(automobili[i].marca + " " + automobili[i].modello)
    } else {
        autoAlimentazioneDiversa.push(automobili[i].marca + " " + automobili[i].modello)
    }



    tbody.innerHTML += `
    
    <tr>
        <th scope="row">${i + 1}</th>
        <td>${automobili[i].marca}</td>
        <td>${automobili[i].modello}</td>
        <td>${automobili[i].alimentazione}</td>
    </tr>
    
    `;


}

console.log(autoAlimentazioneBenzina, autoAlimentazioneDiesel, autoAlimentazioneDiversa)



function createAuto() {


    let inserisciMarca = document.querySelector("#inserisciMarca").value;

    let inserisciModello = document.querySelector("#inserisciModello").value;

    let inserisciAlimentazione = document.querySelector("#inserisciAlimentazione").value;

    let n = document.querySelector("th").value;


    tbody.innerHTML += `
    
    <tr>
        <th scope="row">${n}</th>
        <td>${inserisciMarca}</td>
        <td>${inserisciModello}</td>
        <td>${inserisciAlimentazione}</td>
    </tr>

    `;

}
