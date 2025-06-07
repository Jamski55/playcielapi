let currentJeton = false;

const getJeton = async (req, res) => {
  const jeton = currentJeton;
  currentJeton = false;
  res.json({ jeton });
};

const postJeton = async (req, res) => {
  const { jeton } = req.body;

  if (!jeton) {
    return res.status(400).json({ error: "État jeton manquant" });
  }

  currentJeton = jeton;

  setTimeout(() => {
    currentJeton = "";
  }, 10000);

  res.json({ "jeton": currentJeton });
};

export { getJeton, postJeton };
