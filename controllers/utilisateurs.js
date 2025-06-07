import * as utilisateursModel from "../models/utilisateurs.js";

const getUtilisateurByBadgeUid = async (req, res) => {
  const badgeUid = req.query.badge_uid;

  const utilisateur = await utilisateursModel.getUtilisateurByUidBadge(badgeUid);

  if (!utilisateur) {
    return res.status(404).json({ success: false, error: "Utilisateur non trouvé" });
  }

  res.json({
    success: true,
    id_utilisateur: utilisateur.ID_UTILISATEUR,
    nom_utilisateur: utilisateur.NOM_UTILISATEUR,
    prenom_utilisateur: utilisateur.PRENOM_UTILISATEUR,
    email_utilisateur: utilisateur.EMAIL_UTILISATEUR
  });
};

export { getUtilisateurByBadgeUid };
