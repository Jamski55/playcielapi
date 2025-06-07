import * as inscriptionsModel from "../models/inscriptions.js";

const postInscription = async (req, res) => {
  const {
    nom_utilisateur: nomUtilisateur,
    prenom_utilisateur: prenomUtilisateur,
    email_utilisateur: emailUtilisateur,
    mdp_utilisateur: mdpUtilisateur,
    uid_badge_utilisateur: uidBadgeUtilisateur
  } = req.body;

  const inscription = await inscriptionsModel.postInscription(1, nomUtilisateur, prenomUtilisateur, emailUtilisateur, mdpUtilisateur, uidBadgeUtilisateur);

  res.json(inscription);
};

export { postInscription };
