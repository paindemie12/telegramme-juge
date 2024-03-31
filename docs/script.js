let redButtonValue = 0;
let lcButtonValue = 0;

function displayImage() {
    let selectElement = document.getElementById("select-menu");
    let imageContainer = document.getElementById("image-container");
    let selectedImage = document.getElementById("selected-image1");

    // Récupérer la valeur de l'option sélectionnée
    let selectedOption = selectElement.value;

    // Afficher ou masquer l'élément image-container en fonction de l'option sélectionnée
    if (selectedOption !== "") {
        imageContainer.style.display = "block";
    } else {
        imageContainer.style.display = "none";
    }

    // Changer l'URL de l'image en fonction de l'option sélectionnée
    // Réinitialiser la taille de l'image pour toutes les options
    selectedImage.style.width = "";
    selectedImage.style.height = "";
    selectedImage.style.left = "";
    selectedImage.style.top = "";

    if (selectedOption === "option1") {
        selectedImage.src = "image/lemoyne.png";
    } else if (selectedOption === "option2") {
        selectedImage.src = "image/lemoyne.png";
    } else if (selectedOption === "option3") {
        selectedImage.src = "image/lemoyne.png";
    } else if (selectedOption === "option4") {
        selectedImage.src = "image/new_hanover.png";
    } else if (selectedOption === "option5") {
        selectedImage.src = "image/new_hanover.png";
    } else if (selectedOption === "option6") {
        selectedImage.src = "image/new_hanover.png";
    } else if (selectedOption === "option7") {
        selectedImage.src = "image/new_hanover.png";
    } else if (selectedOption === "option8") {
        selectedImage.src = "image/new_hanover.png";
    } else if (selectedOption === "option9") {
        selectedImage.src = "image/west_elisabeth.png";
    } else if (selectedOption === "option10") {
        selectedImage.src = "image/west_elisabeth.png";
    } else if (selectedOption === "option11") {
        selectedImage.src = "image/west_elisabeth.png";
    } else if (selectedOption === "option12") {
        selectedImage.src = "image/west_elisabeth.png";
    } else if (selectedOption === "option13") {
        selectedImage.src = "image/new_austin.png";
    } else if (selectedOption === "option14") {
        selectedImage.src = "image/new_austin.png";
    } else if (selectedOption === "option15") {
        selectedImage.src = "image/new_austin.png";
    } else if (selectedOption === "option16") {
        selectedImage.src = "image/new_austin.png";
    } else if (selectedOption === "option17") {
        selectedImage.src = "image/new_austin.png";
    } else if (selectedOption === "option18") {
        selectedImage.src = "image/guarma.png";
    } else if (selectedOption === "option19") {
        selectedImage.src = "image/sisika.png";
    } else if (selectedOption === "envoyer") {
        selectedImage.src = "";
    }
}

function toggleBold() {
    document.execCommand("bold", false, null);
}

function toggleUnderline() {
    document.execCommand("underline", false, null);
}

function toggleItalic() {
    document.execCommand("italic", false, null);
}

function increaseFontSize() {
    let textDiv = document.getElementById("text");
    let currentSize = parseInt(window.getComputedStyle(textDiv).fontSize);
    textDiv.style.fontSize = currentSize + 2 + "px";
}

function demandedispoar() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Monsieur Northman,

    Suite à votre arrestation au Bureau des Shérifs de BlackWater datant du 19/03/1900 à 21h30 pour les motifs suivants :

    Provocation et outrage envers un homme de loi (x2 mots)
    Refus d'obtempérer avec un homme de loi
    Enlèvement sur un citoyen
    Mise en danger de la vie d'autrui

    Vous êtes tenu de m'informer par télégramme de vos 3 prochaines disponibilités, date et heure espacées d'un jour. Un délai maximal de 48 heures à compter de ce jour vous est accordé pour répondre à ce télégramme. Dans le cas contraire, vous vous exposerez à une entrave à la justice réglementée par l'Article 1 [TITRE IV, Section 3, §2] du Code Pénal.

    Je vous remercie de votre compréhension
    Cordialement,
    Juge Fédéral | Andrew Bean`;
}

function juge() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Mes respects,

  Nous avons actuellement INDIVIDU dans nos geôles pour le(s) infraction(s) suivante(s) :

  INFRACTIONS

  Êtes-vous disponible pour venir procéder au jugement ?

  Cordialement,`;
}

function decreaseFontSize() {
    let textDiv = document.getElementById("text");
    let currentSize = parseInt(window.getComputedStyle(textDiv).fontSize);
    textDiv.style.fontSize = currentSize - 2 + "px";
}

function toggleBold() {
    let textDiv = document.getElementById("text");
    document.execCommand("bold", false, null);
    let boldButton = document.getElementById("boldButton");
    boldButton.classList.toggle("active");
}

function toggleUnderline() {
    let textDiv = document.getElementById("text");
    document.execCommand("underline", false, null);
    let underlineButton = document.getElementById("underlineButton");
    underlineButton.classList.toggle("active");
}

function toggleItalic() {
    let textDiv = document.getElementById("text");
    document.execCommand("italic", false, null);
    let italicButton = document.getElementById("italicButton");
    italicButton.classList.toggle("active");
}

function redButton() {
    let textBackground = document.querySelector("#redBg");

    switch (redButtonValue) {
        case 0:
            textBackground.style.backgroundImage =
                "url('image/filigranesecret.png')";
            redButtonValue += 1;
            break;
        case 1:
            textBackground.style.backgroundImage =
                "url('image/filigraneurgent.png')";
            redButtonValue += 1;
            break;
        case 2:
            textBackground.style.backgroundImage = "none";
            redButtonValue = 0;
            break;
        default:
            break;
    }
}

function lcButton() {
    let textBackground = document.querySelector("#lcBg");

    switch (lcButtonValue) {
        case 0:
            textBackground.style.backgroundImage = "url('image/juge.png')";
            lcButtonValue += 1;
            break;
        case 1:
            textBackground.style.backgroundImage = "none";
            lcButtonValue = 0;
            break;
        default:
            break;
    }
}

function html2canva() {
    let element = document.getElementById("zone-telechargement");

    let width = element.scrollWidth;
    let height = element.scrollHeight;

    let playerName;
    if (!document.getElementById("expediteur").value) {
        playerName = "";
    } else {
        playerName = document.getElementById("expediteur").value + "";
    }
    element.style.background = "none";
    
    html2canvas(element, {
        width: width - 400,
        height: height,
    }).then(function (canvas) {
        let image = canvas.toDataURL("image/png");

        // Crée un lien pour télécharger l'image PNG
        let downloadLink = document.createElement("a");
        downloadLink.href = image;
        downloadLink.download =
            playerName + "_" + new Date().getTime() + ".png";
        downloadLink.click();
    });
}
