import * as inscriptionsModel from "../models/inscriptions.js";

const postInscription = async (req, res) => {
  const {
    nom_utilisateur: nomUtilisateur,
    prenom_utilisateur: prenomUtilisateur,
    email_utilisateur: emailUtilisateur,
    mdp_utilisateur: mdpUtilisateur,
    uid_badge_utilisateur: uidBadgeUtilisateur
  } = req.body;

  try {
    const inscription = await inscriptionsModel.postInscription(1, nomUtilisateur, prenomUtilisateur, emailUtilisateur, mdpUtilisateur, uidBadgeUtilisateur);

    console.log(inscription);
    

    if (!inscription) {
      return res.status(400).json({ success: false, error: "Inscription échouée" });
    }

    res.json({ success: true, id_utilisateur: inscription.ID_UTILISATEUR});

  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    res.status(500).json({ success: false, error: "Erreur serveur" });
  }
};

export { postInscription };
