let currentBadge = "";

const getBadge = async (req, res) => {
  const badge = currentBadge;
  currentBadge = "";
  res.json({ badge });
};

const postBadge = async (req, res) => {
  const { badge } = req.body;

  if (!badge) {
    return res.status(400).json({ error: "UID badge manquant" });
  }

  currentBadge = badge;

  setTimeout(() => {
    currentBadge = "";
  }, 10000);

  res.json({ "badge": currentBadge });
};

export { getBadge, postBadge };
