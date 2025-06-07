import pool from '../config/db.js';

const postParticipation = async (idUtilisateur, idJeu, idTypeGain, resultatParticipation) => {
  const query = "INSERT INTO PARTICIPATION (ID_UTILISATEUR, ID_JEU, ID_TYPE_GAIN, RESULTAT_PARTICIPATION) VALUES (?, ?, ?, ?)";
  const params = [idUtilisateur, idJeu, idTypeGain, resultatParticipation];
  const [rows] = await pool.query(query, params);
  return rows[0];
};

export { postParticipation };
