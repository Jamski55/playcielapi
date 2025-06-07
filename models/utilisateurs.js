import pool from '../config/db.js';

const getUtilisateurByUidBadge = async (uidBadge) => {
  const query = "SELECT * FROM UTILISATEUR WHERE UID_BADGE_UTILISATEUR = ?";
  const params = [uidBadge];
  const [rows] = await pool.query(query, params);
  return rows[0];
};

export { getUtilisateurByUidBadge };
