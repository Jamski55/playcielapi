let currentLumiere = null;

const getLumiere = async (req, res) => {
  res.json({ currentLumiere });
};

const postLumiere = async (req, res) => {
  const { lumiere } = req.body;

  if (!lumiere) {
    return res.status(400).json({ error: "État lumiere manquant" });
  }

  currentLumiere = lumiere;

  setTimeout(() => {
    currentLumiere = false;
  }, 10000);

  res.json({ "lumiere": currentLumiere });
};

export { getLumiere, postLumiere };
