const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  'Maxencecourt1', // le mot de passe
database :  'circus_db', // le nom de la base de données
});
module.exports = connection;

