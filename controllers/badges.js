let currentBadge = "";

const getBadge = async (req, res) => {
  const badge = currentBadge;
  currentBadge = "";
  res.json(badge);
};

const postBadge = async (req, res) => {
  const { badge } = req.body;

  if (!badge) {
    return res.status(400).json({ error: "Mode manquante" });
  }

  currentBadge = badge;
  res.json(currentBadge);
};

export { getBadge, postBadge };
