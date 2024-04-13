Mon projet API consiste a afficher dans un premier temps differentes villes du Japon ou la personne authentifier pourrai y acceder ainsi que de creer de nouvelle ville du Japon, modifier ou supprimer.
Chaque ville possede des activités propre a elle. on peut les consulté, en ajouté, les modifié ou supprimer(Si on est Authentifier encore une fois).

Pour acceder a cette API, il faut créer un compte avec une adresse mail, mot de passe, un nom et un numéro de téléphone.

Vous avez deux choix pour pouvoir vous connecter, par numero de téléphone ou adresse mail.
Une fois connecter vous recevrez un Token qui vas vous permettre d'acceder a la totalité de l'API.

Comment lancer le projet : 

- Cloner le projet GIT
- Ce mettre dans le dossier TP-Final
- Modifier le .env.example en suuprimant ".example" et modifier le contenue a l'interieur :

MONGO_STRING=mongodb+srv://jimenezjordan:Azerty02@apinodejs.ifeic1s.mongodb.net/?retryWrites=true&w=majority&appName=APINodejs
PORT=3000
JWT_SECRET=Azerty02

- Installer toute les package si ce n'es pas fait renseigner sur package.json ainsi que l'extention REST Client !

Comment marche l'Application : 

- vous pouvez allez sur app.http ou POSTMAN, un systeme authentification avec des autorisations sont mis sur cette appli.
Si vous essayer de récupéré les villes vous aurez un message "Unauthorized".
Donc je vous laisse vous créer un compte ou vous connectez si vous en avez un.
ATTENTION !!! Pour creer votre compte il faut impérativement :
Mail : une adresse mail Valide ! sinon vous pourrez pas creer de compte 
Mot de passe : Minimum 6 caractères ! pour la sécurité 
name : minimum 2 caractères !
Téléphone : Obligatoirement 10 Chiffre !

A savoir il ne peut pas avoir deux compte avec la meme adresse mail et meme numero de téléphone.

- Une fois connecter vous aurez accèes a un token
Je vous laisse le renseigner sur POSTMAN en ajoutant avec Bearer Token et renseigné un GET, POST, DELETE ou PUT.
Voici un exemple : http://localhost:3000/villes
ou encore : http://localhost:3000/activites/villes/:villeId


TEST avec Jest :

- Pour lancer le test avec Jest il faudrais juste mettre en commentaire "const __dirname = url.fileURLToPath(new URL(".", import.meta.url));" dans mon app.js .

- lancer npm run test

- le test crée un utilisateur, se connecte avec récupere dans une variable le token pour pouvoir l'utilisé pour récupéré les villes déja crée et faire un console log puis il crée un nouvelle ville nommé Nara. 
Enfin il supprime utilisateur crée ainsi que la ville crée.
Et on ferme la connection.