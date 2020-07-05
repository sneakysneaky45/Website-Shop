function SetName() {
    document.write(name);
}

function SetPrice() {
    document.write(price);
}

function SetAverage() {
    document.write(average);
}

function setPic() {
    document.getElementById('pic').src = "https://static.zerochan.net/The.Winged.Dragon.of.Ra.full.2004775.jpg";        //hier datenbankzugriff einbinden
}

function SetStockNumber() {}            //rausfinden wie man options in einer auswahlliste mit js setzt

//alle aus DB holen
var name = "Name vom Produkt";
var price = "Preis";
var average = "Durchschnittsbewertung";