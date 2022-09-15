const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data) => {
    return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
            return admin.auth().setCustomUserClaims(user.uid, {
                admin: true,
            });
        })
        .then(() => {
            return {
                message: `Utilisateur avec e-mail ${data.email} a été ajouté avec succès en tant qu'administrateur.`
            }
        })
        .catch((err) => {
            console.log(err);
        });
});


