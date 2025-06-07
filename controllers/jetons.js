let currentJeton = false;

const getJeton = async (req, res) => {
  const jeton = currentJeton;
  currentJeton = false;
  res.json(jeton);
};

const postJeton = async (req, res) => {
  const { jeton } = req.body;

  if (!jeton) {
    return res.status(400).json({ error: "État jeton manquant" });
  }

  currentJeton = jeton;
  res.json(currentJeton);
};

export { getJeton, postJeton };
