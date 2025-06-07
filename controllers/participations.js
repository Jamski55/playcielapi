import * as participationsModel from "../models/participations.js";

const postParticipation = async (req, res) => {
  const { id_utilisateur: idUtilisateur, id_jeu: idJeu, id_type_gain: idTypeGain, resultat_participation: resultatParticipation } = req.body;

  const participation = await participationsModel.postParticipation(idUtilisateur, idJeu, idTypeGain, resultatParticipation);

  res.json(participation);
};

export { postParticipation };
