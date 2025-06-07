import pool from '../config/db.js';

const postInscription = async (idTypeUtilisateur, nomUtilisateur, prenomUtilisateur, emailUtilisateur, mdpUtilisateur, uidBadgeUtilisateur) => {
  const query = "INSERT INTO UTILISATEUR ( ID_TYPE_UTILISATEUR, NOM_UTILISATEUR, PRENOM_UTILISATEUR, EMAIL_UTILISATEUR, MDP_UTILISATEUR, UID_BADGE_UTILISATEUR) VALUES (?, ?, ?, ?, ?, ?)";
  const params = [idTypeUtilisateur, nomUtilisateur, prenomUtilisateur, emailUtilisateur, mdpUtilisateur, uidBadgeUtilisateur];
  const [rows] = await pool.query(query, params);
  return rows[0];
};

export { postInscription };
