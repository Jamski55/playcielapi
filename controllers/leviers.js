let currentLevier = false;

const getLevier = async (req, res) => {
  const levier = currentLevier;
  currentLevier = false;
  res.json({ levier });
};

const postLevier = async (req, res) => {
  const { levier } = req.body;

  if (!levier) {
    return res.status(400).json({ error: "État levier manquant" });
  }

  currentLevier = levier;

  setTimeout(() => {
    currentLevier = false;
  }, 10000);

  res.json({ "levier": currentLevier });
};

export { getLevier, postLevier };
