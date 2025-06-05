let currentJeton = "";

const getJeton = async (req, res) => {
  const jeton = currentJeton;
  currentJeton = "";
  res.json(jeton);
};

const postJeton = async (req, res) => {
  const { jeton } = req.body;

  if (!jeton) {
    return res.status(400).json({ error: "Mode manquante" });
  }

  currentJeton = jeton;
  res.json(currentJeton);
};

export { getJeton, postJeton };
