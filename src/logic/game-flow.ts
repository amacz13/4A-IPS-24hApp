import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Question} from "./question";

@Injectable()
export class GameFlow {

  quizzInfo: Array<Question> = [
    new Question(
      "A l’occasion de quel événement majeur Alan Turing a-t-il inventé “The Bomb” ?",
      new Array<string>("La bataille de Woodstock", "La première guerre mondiale", "La guerre froide"),
      "La seconde guerre mondiale",
      "Cette machine a permis de décrypter les communications allemandes pendant la seconde guerre mondiale qui étaient chiffrées avec la fameuse machine Enigma."),

    new Question("Quelle lettre se trouve après le Y sur un clavier AZERTY ?",
      new Array<string>("H", "W", "Z"),
      "U",
      "C’est aussi le U qui se trouve après le Y sur un clavier QWERTY."),

    new Question("Combien de transistors possédait le premier microcontrôleur Intel 4004 ?",
      new Array<string>("2100", "2200", "2400"),
      "2300",
      "L’Intel 4004 était moins puissant que les contrôleurs des mini-ordinateurs de la même époque, mais sa taille permettait d’envisager la construction de micro-ordinateurs."),

    new Question("Parmis les inventions suivantes, laquelle a été inventée avant le World Wide Web ?",
      new Array<string>("Les réseaux sociaux", "L'HTML", "L'iPhone"),
      "La boite mail",
      "Le premier mail a été envoyé en 1971, la version initiale d’HTML date de 1993, le premier réseau social est apparu en 1995 et l’iPhone n’a vu le jour qu’en 2007."),

    new Question("Le Python est un langage...",
      new Array<string>("Relou", "Non ponctué", "Compilé"),
      "Interprété",
      "Les langages interprétés sont analysés et traduits par un programme interprète à chaque exécution du programme, contrairement aux langages compilés qui peuvent être analysés une seule fois puis exécutés un nombre illimité de fois."),

    new Question("Quel était le poids du premier ordinateur ENIAC ?",
      new Array<string>("10 tonnes", "45 kilos", "5630 grammes"),
      "27 tonnes",
      "En plus d’être très lourd, l’ENIAC était massif, occupant une surface d’environ 167m²."),

    new Question("Si HDD veut dire Hard Disk Drive, que signifie SSD ?",
      new Array<string>("Super Speed Disk", "Super Sonic Drive", "Sweet Soft Disk"),
      "Solid State Drive",
      "Généralement, les SSD offrent un accès aux données beaucoup plus rapide que les HDD, mais ces dernier peuvent stocker davantage de données à moindre coût."),

    new Question("Quel iPhone n'a jamais existé ?",
      new Array<string>("l'iPhone", "l'iPhone 3", "l'iPhone X"),
      "l'iPhone 2",
      "L'Iphone 3 est nommé ainsi car il est compatible avec la norme 3G, la compatibilité avec la norme 2G était présente dès le premier Iphone. L'Iphone X représente le dixième anniversaire de l'Iphone."),

    new Question("De quel matériau était faite la première souris ?",
      new Array<string>("Aluminium", "Plastique", "Silicone"),
      "Bois",
      "La souris a été inventée en 1963 par Douglas Engelbart du Stanford Research Institute et présentée au public en 1968.  Elle a été améliorée par Jean-Daniel Nicoud à l'EPFL dès 1979 grâce à l'ajout d'une boule et de capteurs, il fabriqua la souris Depraz qui fut à l'origine de l'entreprise Logitech."),

    new Question("Après quoi sont nommées les différentes versions d’Android ?",
      new Array<string>("Des grands noms de l’Informatique", "Des noms de fleurs", "Des groupes musicaux"),
      "Des noms de gâteaux",
      "Cupcake, donut, éclair, kitkat, nougat, oreo, pie par exemples."),

    new Question("Quel était le nom original de Windows",
      new Array<string>("Gates Software", "Debian", "Macintosh"),
      "Interface Manager",
      "Windows 1.0 lancé en 1985 créé par Bill Gates avait pour nom de code Interface Manager. Debian est un système d'exploitation équipant notamment la ville de Munich. Macintosh est une série de différentes famille d'ordinateur de l'entreprise Apple."),

    new Question("Que signifie le C de CAPTCHA",
      new Array<string>("Control", "Capacity", "Casual"),
      "Completely",
      "CAPTCHA signifie Completely Automated Public Turing test to Tell Computers and Humans Apart (« test public de Turing complètement automatique ayant pour but de différencier les humains des ordinateurs »)."),

    new Question("En quelle année Sir Tim Berners-Lee a-t-il inventé le World Wide Web ?",
      new Array<string>("1998", "1899", "1988"),
      "1989",
      "Le Web n’est qu’une des applications d’Internet, distincte d’autres applications comme le courrier électronique, la messagerie instantanée et le partage de fichiers en pair à pair. Le Web a été inventé au CERN à Genève par Tim Berners-Lee plusieurs années après Internet. C'est également le Web qui a rendu les médias grand public attentifs à Internet."),

    new Question("Quel mot-valise est utilisé en tant que terme officiel pour désigner un smartphone en France ?",
      new Array<string>("Intelliphone", "Télénateur", "Intelliport"),
      "Ordiphone",
      "Contraction de téléphone et ordinateur, le mot met en avant la puissance des machines actuelles."),

    new Question("Au moment de la création de cette application, quelle portion de la population mondiale avait accès à Internet ?",
      new Array<string>("1/4", "5/6", "1/3"),
      "1/2",
      "Le nombre d’internautes dans le monde a dépassé les 4 milliards, et les ¾ d’entre eux utilisent les réseaux sociaux."),

    new Question("En quelle année est apparue la première bannière de publicité sur internet ?",
      new Array<string>("1986", "2000", "2003"),
      "1994",
      "Cette publicité est apparue sur le site Web HotWired.com, devenu depuis Wired.com. Elle a été réalisée pour l’opérateur téléphonique américain AT&T."),

    new Question("Quel objet a été le premier à etre mis en vente et acheté sur internet ?",
      new Array<string>("Une télécommande", "Une boite de chaussette", "Un ordinateur"),
      "Un sac de Marijuana",
      "Entre 1971 et 1972 un trafic de marijuana s'est organisé entre Stanford University et le MIT via arpanet."),

    new Question("Comment s’appelle la partie cachée d’internet ?",
      new Array<string>("Le Hidden Internet", "Le High Castle", "Le Deep Network"),
      "Le Dark Net",
      "Le Dark Net représente toutes les pages internet qui ne sont pas référencées (et donc pas accessibles) par un moteur de recherche classique."),

    new Question("Quelle était la principale cause de bug de l’an 2000 ?",
      new Array<string>("Les insectes", "Les pannes de courant", "L'obsolescence programmée"),
      "Les formats des dates",
      "Dans de nombreux programmes et beaucoup de bases de données, il manquait les deux chiffres 19 correspondant au siècle, l'année 2000 était donc du point de vue informatique la même que l'année 1900."),

    new Question("Quels sont les principaux éléments composant un code HTML ?",
      new Array<string>("Des poteaux", "Des panneaux", "Des classes"),
      "Des classes",
      "Un document HTML est un fichier texte qui contient des balises (ou tag en anglais). Les balises indiquent au navigateur comment afficher le document.")
  ];

  quizzEnsim: Array<Question> = [
    new Question("Parmi les options suivantes laquelle n'est pas proposée à l'ENSIM ?",
      new Array<string>("Interactions Personne-Système", "Vibration Acoustique", "Architecture des Systèmes Temps Réels Embarqués"),
      "Intelligence Profonde Sectorisée",
      "L'Intelligence Profonde Sectorisée ne fait pas partie des 4 spécialités de l’ENSIM : \n" +
      "Vibrations, Acoustique (VA)\n" +
      "Capteurs et Instrumentation (C&I)\n" +
      "Architecture des Systèmes Temps Réel et Embarqués (ASTRE)\n" +
      "Interaction Personnes Systèmes (IPS)\n"),

    new Question("Qui est le directeur de l'ENSIM ?",
      new Array<string>("Axel Maczkowiak", "Pascal Leroux", "Didier Tassin"),
      "Jean François Tassin",
      "Jean François Tassin dirige l'ENSIM depuis 2017. Pascal Leroux l'a dirigé de 2007 à 2017."),

    new Question("Quelle solution n'est pas une voie d'accès directe à l'ENSIM en cycle ingénieur ?",
      new Array<string>("DUT", "Khâgne-BL", "BTS"),
      "Concours Geipi",
      "Le concours Geipi ne permet pas d’accéder directement au cycle ingénieur (BAC+2). Il permet d'accéder au cycle préparatoire (après le bac)."),

    new Question("Parmis les éléments suivants lequel a été récompensé ?",
      new Array<string>("La salle blanche de l'ENSIM", "La thermique du batiment de l'ENSIM", "Les salles de TP de l'ENSIM"),
      "Le batiment de l’ENSIM",
      "La bâtiment créé par Christian Hauvette, a été lauréat du Grand Prix national d’architecture et inauguré en décembre 1997."),

    new Question("Quelle association n'existe pas à l'ENSIM ?",
      new Array<string>("Ensim'elec", "Le VASI", "La K'Verne"),
      "Vibr’ENSIM",
      "Ensim'elec, le VASI, et La K'Verne sont des associations, ou club toujours en activité à l'ENSIM. La Vibr'ENSIM n'a jamais existée."),

    new Question("Parmis les diplomes suivants lequel peut on obtenir à l'ENSIM ?",
      new Array<string>("Un diplôme de développeur web", "Un diplôme de jardinier", "Un diplôme de commercial"),
      "Un diplôme d’ingénieur généraliste",
      "L’École nationale supérieure d’ingénieurs du Mans (ENSIM) est l'une des 205 écoles d'ingénieurs françaises accréditées au 1er septembre 2018 à délivrer un diplôme d'ingénieur."),

    new Question("Quel nom porte le reseau des anciens de l'ENSIM ?",
      new Array<string>("CUBE", "PYRAMIDE"
        , "CYLINDRE"),
      "SPHERE",
      "Sphère est une association regroupant des anciens étudiants de l’école. Cette association organise notamment la journée des Anciens."),

    new Question("A quel évenement l'ENSIM n'est-elle pas associée ?",
      new Array<string>("La Journée Agilemans", "La coupe de france de robotique", "Les 24h du code"),
      "Le grand prix de france moto",
      "L'ENSIM co-organise depuis leurs créations la journée Agilemans et les 24h du code. Elle participe également chaque année à la coupe de france de robotique."),

    new Question("Que signifie l'accronyme ENSIM ?",
      new Array<string>("Ecole Nationale Supérieur d'Informatique du Mans", "Établissement Nautique Surveillé Informatiquement du Mans", "Ecole Nationale Supérieure de l'Infrastructure Militaire"),
      "Ecole Nationale Supérieur d'Ingénieur du Mans",
      "L’ENSIM peut aussi représenter : l’Ecole Nationale Supérieure de l'Infrastructure Militaire du ministère de la défense est basée à Anger (49), est liée à l'ENSAM."),

    new Question("En quelle année a été fondée l’ENSIM ?",
      new Array<string>("1985", "1997", "1993"),
      "1995",
      "L’ENSIM a été fondée en 1995. En 1997 correspond à la prise de possession du bâtiment actuelle. Auparavant les cours se faisaient à l'IUT en section mesures physiques."),

    new Question("Quel est le slogan de l’ENSIM ?",
      new Array<string>("Des infos… et des Vacs aussi !", "Être en phase avec votre développement", "Entrez dans un monde de plaisir"),
      "Inventer le confort de demain",
      "“Des infos… et des Vacs aussi !” est le slogan de l’Ensimien, le journal de l’école, “Entrez dans un monde de plaisir” est un ancien slogan de Jensim, la junior étudiante, tandis que “Être en phase avec votre développement” est tout simplement un slogan inventé."),

    new Question("Quelle mission n'est pas celle d'un ingénieur en acoustique ?",
      new Array<string>("Réaliser des mesure au sonomètre", "Réaliser des études vibratoire", "Utiliser ses connaissances en mécaniques des fluides"),
      "S'occuper de la sonorisation de concerts",
      "Le métier d'ingénieur son ne correspond pas à un diplôme d'ingénieur mais à différents niveau de responsabilité ayant des formations de bac +2 à bac +5."),

    new Question("À quelle période de l'année ont lieu les portes ouvertes de l’ENSIM ?",
      new Array<string>("Mars-Avril", "Mai-Juin", "Septembre-Octobre"),
      "Janvier-Février",
      "La date des portes ouvertes de l'ENSIM correspond à celle des portes ouvertes de Le Mans Université qui est généralement durant la période Janvier-Février."),

    new Question("Quel est le taux d'embauche des diplomés de l'ENSIM 1 an après l’obtention du diplôme ?",
      new Array<string>("95%", "90%", "85%"),
      "100%",
      "Près de 80 % des ingénieurs diplômés trouvent un emploi 6 mois après leur sortie de l’école et 100% d’entre eux occupe un emploi 1 an après."),

    new Question("Quelle construction trouve-t-on à l’arrière de l’ENSIM ?",
      new Array<string>("Un bunker", "Une statue du fondateur de l’école", "Un champ de panneaux solaires"),
      "Une éolienne",
      "Cette éolienne dispose de nombreux capteurs dont les données peuvent être utilisées lors de projet étudiants.")
  ];

  questionsDone: Array<number>;

  constructor() {
  }

  start() {
    this.questionsDone = new Array<number>();

    var randomIndex = Math.floor(Math.random() * this.quizzEnsim.length);

    this.questionsDone.push(randomIndex);

    return this.quizzInfo[randomIndex];
  }

  next() {

    var randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * this.quizzEnsim.length);
    } while(this.questionsDone.indexOf(randomIndex) != -1);

    this.questionsDone.push(randomIndex);

    if (this.questionsDone.length >= 11) {
      return 0;
    } else {
      return this.quizzInfo[randomIndex];
    }
  }
}
