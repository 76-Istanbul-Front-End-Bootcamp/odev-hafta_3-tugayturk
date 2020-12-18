class Animal2 {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }
  action() {
    document.getElementById(this.actionSoundName).play();
  }

    putImageInTheDocument() {
    var image = document.createElement("img");
    image.src = this.image;
    image.height = 400;


    var imageArea = document.getElementById("image-area");
    console.log(imageArea);
    imageArea.innerHTML = "";
    imageArea.appendChild(image)
  }

  putInTheDocument() {
    console.log("asdasd")
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
    petTR.onclick = this.putImageInTheDocument.bind(this);

    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);

    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);

    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);

    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR)

  }
}

class Cat2 extends Animal2 {
  constructor(name, image) {
    super(name, image)
    this.legs = 4;
    this.actionText = "Meoow"
    this.actionSoundName = "meow"
  }

}
class Monkey2 extends Animal2 {
  constructor(name, image) {
    super(name, image)
    this.legs = 2;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
  }
}

var Mila = new Cat2("Mila", "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
console.log
Mila.putInTheDocument();

var Charlie = new Monkey2("Charlie", "https://cdn.mos.cms.futurecdn.net/wxLD2KnTXBcrDWSBdaLixK-1200-80.jpg");
Charlie.putInTheDocument();

