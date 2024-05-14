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
    } else if (selectedOption === "option20") {
        selectedImage.src = "image/palais_de_justice.png";
    } else if (selectedOption === "envoyer") {
        selectedImage.src = "";
    }
}

function displayImage2() {
    let selectElement = document.getElementById("select-expediteur");
    let imageContainer = document.getElementById("image-container2");
    let selectedImage = document.getElementById("selected-image2");

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
        selectedImage.src = "image/bean_signature.png";
        selectElement.style.display = "none";
    } if (selectedOption === "option2") {
        selectedImage.src = "";
        selectElement.style.display = "none";
    } else if (selectedOption === "expediteur") {
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

function selectAction(action) {
    switch (action) {
        case "demandedispoar":
            demandedispoar();
            break;
        case "demandedispoli":
            demandedispoli();
            break;
        case "demandedispopr":
            demandedispopr();
            break;
        case "demandedispoad":
            demandedispoad();
            break;
        case "demandedispopl":
            demandedispopl();
            break;
        case "demandedisporv":
            demandedisporv();
            break;
        case "sisikaem":
            sisikaem();
            break;
        case "sisikatr":
            sisikatr();
            break;
        case "sisikate":
            sisikate();
            break;
        case "sisikavr":
            sisikavr();
            break;
        case "sisikave":
            sisikave();
            break;
        case "avocatde":
            avocatde();
            break;
        case "medecinde":
            medecinde();
            break;
        case "wantedan":
            wantedan();
            break;
        case "wantedaw":
            wantedaw();
            break;
        case "wantedae":
            wantedae();
            break;
        case "wantedao":
            wantedao();
            break;
        case "tresorfw":
            tresorfw();
            break;
        case "avocatdp":
            avocatdp();
            break;
        case "demandead":
            demandead();
            break;
        case "demandema":
            demandema();
            break;
        case "demandemd":
            demandemd();
            break;
        case "demandeap":
            demandeap();
            break;
        case "comparutionma":
            comparutionma();
            break;
        case "mairieda":
            mairieda();
            break;
        case "demandedi":
            demandedi();
            break;
        case "verificationcj":
            verificationcj();
            break;
        case "medecinve":
            medecinve();
            break;
        case "verificationrt":
            verificationrt();
            break;
        case "rien":
            rien();
            break;
        default:
            break;
    }
}

function rien() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = ``;
}

function demandedispoar() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Monsieur Grey,

    Suite à votre arrestation au Bureau des Shérifs de Valentine datant du 10/04/1900 à 01h40 pour les motifs suivants :

    - Trouble a l'ordre public
    - Violation d'une propriété privé
    - Exhibition d'armes

    Vous êtes tenu de m'informer par télégramme de vos 3 prochaines disponibilités, date et heure espacées d'un jour. Un délai maximal de 48 heures à compter de ce jour vous est accordé pour répondre à ce télégramme. Dans le cas contraire, vous vous exposerez à une entrave à la justice réglementée par l'Article 1 [TITRE IV, Section 3, §2] du Code Pénal.

    Si vous souhaitez qu'un avocat vous vienne en aide dans cette procédure, merci de bien vouloir m'en informer.

    Je vous remercie de votre compréhension
    Cordialement,
    Juge Fédéral | Andrew Bean`;
}

function demandedispoli() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Monsieur Durant,

    Suite à votre litige avec monsieur Luke HATFIELD datant du 18/03/1900, une plainte à votre encontre a été déposée. Vous êtes accusé des motifs suivants :

    - Agression sur un citoyen
    - Exhibition d'une arme

    Une audience pour un litige civil aura donc prochainement lieu. Si vous souhaitez qu'un avocat puisse vous défendre lors de cette audience, vous êtes tenu de m'en informer le plus rapidement possible.

    Vous devez également m'informer par télégramme de vos trois prochaines disponibilités, date et heure espacées d'un jour. Un délai maximal de 48 heures à compter de ce jour vous est accordé pour répondre à ce télégramme. Dans le cas contraire, vous vous exposerez à une entrave à la justice réglementée par l'Article 1 [TITRE IV, Section 3, §2] du Code Pénal.

    Je vous remercie de votre compréhension
    Cordialement,
    Juge Fédéral | Andrew Bean`;
}

function demandedispopr() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Monsieur Clark,

    Suite à votre remise d'une personne recherchée aux autorités, en l'occurrence Monsieur Harald Frigg.

    La prime pour cet avis de recherche s'élève à 600$.

    Les fonds nécessaires ont été débloqués et sont disponibles.

    Pourriez-vous vous rendre au Bureau des Juges de BlackWater le 03/02/1900 à 21h30 afin que la prime soit restituée à qui de droit.

    Si vous ne pouvez pas être présent, merci de me donner vos prochaines disponibilités le plus rapidement possible.

    Je vous remercie de votre compréhension
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function demandedispoad() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Monsieur Fries,

    Pourriez-vous me communiquer vos disponibilités de cette semaine afin que nous puissions nous rencontrer pour effectuer une audience préliminaire par rapport à votre demande de divorce.

    Dans l'attente d'une réponse de votre part.

    Je vous remercie de votre compréhension
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function demandedispopl() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Monsieur Durant,

    Suite à une plainte déposée à votre encontre le 28/03/1900 au Bureauu des shérifs de Blackwater. Vous êtes accusé des motifs suivants :

    - Agression sur un citoyen
    - Exhibition d'une arme

    Une audience aura donc prochainement lieu. Si vous souhaitez qu'un avocat puisse vous défendre lors de cette audience, vous êtes tenu de m'en informer le plus rapidement possible.

    Vous devez également m'informer par télégramme de vos trois prochaines disponibilités, date et heure espacées d'un jour. Un délai maximal de 48 heures à compter de ce jour vous est accordé pour répondre à ce télégramme. Dans le cas contraire, vous vous exposerez à une entrave à la justice réglementée par l'Article 1 [TITRE IV, Section 3, §2] du Code Pénal.

    Je vous remercie de votre compréhension
    Cordialement,
    Juge Fédéral | Andrew Bean`;
}

function demandedisporv() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Monsieur Fries,

    Pourriez-vous vous rendre au Bureau des Juges de BlackWater le 03/02/1900 à 21h30 afin que nous puissions nous rencontrer par rapport à votre demande.

    Si vous ne pouvez pas être présent, merci de me donner vos prochaines disponibilités le plus rapidement possible.

    Dans l'attente d'une réponse de votre part.

    Je vous remercie de votre compréhension
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function sisikaem() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonsoir,

    Nous vous informons que Monsieur Salata Domingo doit purger une peine d'emprisonnement de 1 journée au sein de votre Centre Pénitencier de Sisika.

    Pourriez-vous venir le chercher au Bureau des shérifs de Valentine ?

    Monsieur Domingo a été reconnu coupable des chefs d'accusation suivants :

    - Entrave à la justice

    Numéro de télégramme du condamné : 1351

    Vous trouverez la pièce d'identité du condamné jointe à ce télégramme.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function sisikatr() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonsoir,

    Nous vous informons que Monsieur Jack Moore doit effectuer 1 heure de travaux d'intérêt général au sein de votre Centre Pénitencier de Sisika. Un délai d'une semaine lui a été accordé, jusqu'au 17/03/1900. Je vous laisse vous organiser avec le condamné pour convenir d'un créneau afin qu'il puisse effectuer ses travaux d'intérêt général.

    Monsieur Moore a été reconnu coupable des chefs d'accusation suivants :

    - Entrave à la justice

    Numéro de télégramme du condamné : 108

    Vous trouverez la pièce d'identité du condamné jointe à ce télégramme.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function sisikate() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonsoir,

    Nous vous informons que Monsieur Salata Domingo doit purger une peine d'emprisonnement de 1 journée. De plus, il devra effectuer 1 heure de travaux d'intérêt général au sein de votre Centre Pénitencier de Sisika sous un délai d'une semaine, jusqu'au 17/03/1900.

    Pourriez-vous venir le chercher au Bureau des shérifs de Valentine ?

    Monsieur Domingo a été reconnu coupable des chefs d'accusation suivants :

    - Entrave à la justice

    Numéro de télégramme du condamné : 1351

    Vous trouverez la pièce d'identité du condamné jointe à ce télégramme.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function sisikavr() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonjour,

    Suite à la fin de la période autorisée pour effectuer leurs travaux d'intérêt général au sein de votre centre pénitencier de Sisika, veuillez me confirmer si les personnes suivantes ont effectué leurs travaux dans le délai imparti :

    - Billy Timber
    - Jack Moore
    - Salata Domingo

    Dans l'attente de votre retour.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function sisikave() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonjour,

    Suite à la fin de la période autorisée pour effectuer leurs temps d'emprisonnement au sein de votre centre pénitencier de Sisika, veuillez me confirmer si les personnes suivantes ont effectué leurs temps d'emprisonnement dans le délai imparti :

    - Rabios Castellanos

    Dans l'attente de votre retour.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function avocatde() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonsoir,

    En ma qualité de Juge Fédéral, je vous adresse ce télégramme concernant un dossier pénal actuellement devant ma cour. L'accusé dans cette affaire, Monsieur Emiliano Blanco, a exprimé le désir d'être représenté par un avocat lors de son procès.

    Je vous serais reconnaissant de bien vouloir confirmer votre disponibilité à assurer ou non la défense de cet accusé lors de l'audience qui se tiendra le 23/03/1900 à 21h00 au Tribunal de BlackWater. Les infractions reprochées à l'accusé sont les suivantes :

    - Provocation et outrage envers un homme de loi (x1 mots)
    - Refus d'obtempérer avec un homme de loi
    - Délit de fuite
    - Possession de stupéfiants (x44 cannabis)
    - Agression sur un homme de loi
    - Séquestration

    Si vous êtes intéressé par cette affaire, vous pouvez contacter directement l'accusé via son numéro de télégramme : 169

    De plus, si des documents spécifiques sont nécessaires pour préparer la défense, je vous encourage à faire une demande auprès du Bureau des Juges le plus rapidement possible afin de faciliter le processus.

    Je vous remercie par avance pour votre attention à cette affaire.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function medecinde() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Mesdames, Messieurs,

    Ce télégramme afin de vous informer que Monsieur Charlie Lellouche a été sanctionné à la suite d'une audience à une obligation d'effectuer un suivi médical avec un Psychiatre au minimum 1 fois toutes les semaines. Cette obligation sera suspendue seulement à la suite d'un avis favorable par l'un des Psychiatres.

    Je vous laisse donc convoquer Monsieur Charlie Lellouche à votre guise tout en respectant le délai minimum. Je vous laisse également me prévenir par télégramme pour tout manquement de Charlie Lellouche à une convocation de votre part.

    Télégramme de Charlie Lellouche : 2937

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function wantedan() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Monsieur Emillio Vargas,

    Après expiration du délai de 72 heures accordé pour le paiement de votre amende de 6$ auprès du Bureau des shérifs de Valentine, datée du 03/03/1900, je vous informe qu'un avis de recherche a été émis à votre encontre pour le motif suivant :

    - Entrave à la justice

    Je vous recommande vivement de vous présenter au Bureau des shérifs de Valentine dès que possible afin de régulariser votre situation.

    Cordialement,
    Juge Fédéral | Andrew Bean`;
}

function wantedaw() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonjour,

    Je vous informe l'émission d'un avis de recherche à l'encontre de Monsieur Rocco Deverino / Steve Midletown / Henry Gasper pour :

    - Entrave à la justice

    Vous trouverez les avis de recherche joints à ce télégramme.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function wantedae() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonjour,

    Je vous informe l'émission d'un avis de recherche à l'encontre de Monsieur Armin Calloway pour:

    - Entrave à la justice

    Vous trouverez l'avis de recherche joint à ce télégramme.

    Cependant, concernant votre demande adressée au Bureau des Juges pour l'élaboration d'un avis de recherche a l'encontre de Monsieur Mark O'Benga, le délai d'une semaine entre l'émission de l'amende et la demande d'avis de recherche est dépassé.

    Il ne nous est donc plus permis d'établir d'avis de recherche pour cette personne.

    Dans ce cas, la personne est encore redevable de son amende, mais il faudra le retrouver sans avis de recherche.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function wantedao() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonjour,

    Concernant votre demande adressée au Bureau des Juges pour l'élaboration d'un avis de recherche a l'encontre de Monsieur Mark O'Benga, le délai d'une semaine entre l'émission de l'amende et la demande d'avis de recherche est dépassé.

    Il ne nous est donc plus permis d'établir d'avis de recherche pour cette personne.

    Dans ce cas, la personne est encore redevable de son amende, mais il faudra le retrouver sans avis de recherche.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function tresorfw() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonjour,

    Suite à la remise d'une personne recherchée aux autorités, l'individu ayant livré le fugitif demande à recevoir la prime prévue sur l'avis de recherche.

    Il s'agit de l'avis de recherche émis le 19/12/1899 à l'encontre de Monsieur Armin Calloway. Cette personne était activement recherchée par les autorités de New Hanover pour l'infraction suivante :

    - Entrave à la justice

    La prime pour cet avis de recherche s'élève à 150$. La personne recherchée a été remise aux autorités de New Hanover le 19/12/1899 par la personne suivante :

    - Elizabeth DE CHEVIGNE

    Pourriez-vous débloquer les fonds nécessaires afin que la prime soit restituée à qui de droit ?

    Vous trouverez joint à ce télégramme une copie de l'avis de recherche.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function avocatdp() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Maître Vallès,

    Pour donner suite à votre précédente demande. Veuillez trouver ci-joint une ordonnance judiciaire vous autorisant à récupérer le procès-verbal de Monsieur Willy Northman auprès des Shérifs de West Elizabeth.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function demandead() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonsoir,

    Suite à votre précédent télégramme exprimant votre demande d'adoption, avant que nous puissions nous rencontrer pour discuter de ce sujet, je vous prie de constituer au préalable un dossier d'adoption comprenant tous les éléments nécessaires. Cela inclut l'état civil des adoptants/de l'adoptant (carte d'identité, profession, acte de mariage en cas de mariage, acte de divorce en cas de séparation, contrat de travail pour les salariés). Il est également nécessaire d'obtenir avant l'entretien un certificat psychologique et médical des adoptés/de l'adopté et des adoptants/de l'adoptant.

    Je vous invite à rassembler votre dossier et à me l'envoyer. Nous pourrons ensuite organiser un entretien pour discuter de cette demande d'adoption. À la suite de l'entretien, si tout se déroule bien, vous pourrez obtenir votre certificat d'adoption.

    Je vous remercie de votre compréhension
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function demandema() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonsoir,

    Je vous recontacte avant notre rencontre pour finaliser votre acte de mariage. Avant de procéder, veuillez constituer un dossier de mariage à la mairie. Ensuite, assurez-vous que la publication des bans soit réalisée au moins 3 jours avant la célébration du mariage par la mairie. Une fois ces démarches accomplies, vous recevrez un certificat de célébration de mariage délivré par le maire, nécessaire pour obtenir votre acte de mariage auprès d'un juge.

    Si vous avez déjà obtenu votre certificat de célébration de mariage, veuillez me communiquer vos prochaines disponibilités dès que possible.

    Je vous remercie de votre compréhension
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function demandemd() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonsoir,

    Je vous contacte concernant la préparation de votre acte de mariage. Avant de procéder à la cérémonie, il est essentiel de constituer un dossier de mariage à la mairie. Ensuite, les bans doivent être publiés au moins 3 jours avant la célébration du mariage, conformément à la procédure municipale. Enfin, à la fin de ces formalités, un certificat de célébration du mariage vous sera remis par le maire, nécessaire pour obtenir votre acte de mariage auprès d'un juge.

    J'ai effectué des recherches concernant la publication des bans pour votre mariage, mais je n'ai trouvé aucune annonce dans les registres des différentes mairies de l'État. Je vous invite donc à vérifier si toutes les étapes de cette procédure ont été suivies en me fournissant l'annonce officielle de la mairie, également appelée "les bans". Si cela n'a pas été fait, c'est-à-dire si aucun dossier de mariage n'a été créé et/ou si aucune annonce de votre mariage n'a été communiquée par la mairie de votre lieu de résidence, je vous demande d'entreprendre ces démarches au moins 3 jours avant notre rencontre. Sans cela, nous ne pourrons pas procéder à l'acte de mariage.

    Je vous remercie de votre compréhension
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function demandeap() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Monsieur Fries,

    Pourriez-vous vous rendre au Bureau des Juges de BlackWater le 03/02/1900 à 21h30 afin que nous puissions nous rencontrer par rapport à votre demande de certificat exceptionnel de récolte de pavot.

    Si vous ne pouvez pas être présent, merci de me donner vos prochaines disponibilités le plus rapidement possible.

    Dans l'attente d'une réponse de votre part.

    Je vous remercie de votre compréhension
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function comparutionma() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Monsieur Fries,

    Suite à l'arrestation de Monsieur Blanco Guillermo au Commissariat de Saint-Denis le 31/03/1900 à 01h10 pour les motifs suivants :

    - Vente de stupéfiants (x1 cannabis)
    - Possession de stupéfiants (x25 cannabis)
    - Refus d'obtempérer avec un homme de loi

    Son jugement est prévu ce vendredi 19/04/1900 à 21h30 au Tribunal de Blackwater.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function mairieda() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Madame la Maire,

    Je vous adresse ce télégramme en ma qualité de Juge Fédéral pour vous signaler une erreur dans un document émis par votre mairie. Il semble qu'une confusion ait été commise dans l'appellation utilisée, où le terme "décret local" a été employé au lieu de "arrêté local".

    Je vous rappelle que, selon la législation en vigueur, un décret est une ordonnance émise au niveau national par le gouvernement, tandis qu'un arrêté est une décision émise au niveau local par les autorités municipales, telles que vous-même en tant que Maire.

    Il est donc impératif que vous rectifiiez cette erreur en retirant l'affiche comportant le terme "décret local" et en la remplaçant par "arrêté local" dès que possible. Ne pas le faire pourrait vous exposer à des poursuites, car cette confusion pourrait entraîner des conséquences juridiques et administratives.

    Je vous prie donc de prendre les mesures nécessaires dans les plus brefs délais afin de corriger cette erreur. Si vous avez besoin de plus d'informations ou d'assistance à cet égard, n'hésitez pas à me contacter.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function demandedi() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonsoir,

    Pour faire suite à votre demande de divorce, je nécessiterais tout d'abord un dossier comprenant l’état civil des époux (nom, prénom, profession, lieu de résidence, etc.) ainsi que le motif du divorce (adultère, séparation, violence conjugale, abandon, etc.).

    Je vous laisse par la suite m'envoyer votre dossier, et nous pourrons convenir d'une date pour un rendez-vous.

    Je vous remercie de votre compréhension
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function verificationcj() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonsoir,

    Conformément à votre demande adressée au Département de Justice pour la vérification des antécédents judiciaires des personnes suivantes :

    - Mr Ottis Pygma
    - Mr Gaston Blaize

    Je tiens à vous informer que aucune de ces deux personnes ne dispose de casiers judiciaires.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function medecinve() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonjour,

    Suite à la fin de la période autorisée pour effectuer leur première séance de suivi avec un psychiatre au sein de l'Ordre des Médecins, pourriez-vous me confirmer si les personnes suivantes ont commencé leur suivi médical obligatoire :

    - Rabios Castellanos

    Dans l'attente de votre retour.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
}

function verificationrt() {
    let textDiv = document.getElementById("text");
    textDiv.innerText = `Bonjour,

    Suite à la fin de la période autorisée pour effectuer leurs travaux d'intérêt général au sein du Bureau de New Hanover, veuillez me confirmer si les personnes suivantes ont effectué leurs travaux dans le délai imparti :

    - Billy Timber
    - Jack Moore
    - Salata Domingo

    Dans l'attente de votre retour.

    Avec mes respects
    Cordialement
    Juge Fédéral | Andrew Bean`;
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
    let width = 1200;
    let height = 821;

    let playerName = "telegramme";

    html2canvas(element, {
        width: width + 400,
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
