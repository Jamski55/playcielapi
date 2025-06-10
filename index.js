import cors from "cors";
import express from "express";
import badgesRouter from "./routes/badges.js";
import inscriptionsRouter from "./routes/inscriptions.js";
import jetonsRouter from "./routes/jetons.js";
import leviersRouter from "./routes/leviers.js";
import lumieresRouter from "./routes/lumieres.js";
import participationsRouter from "./routes/participations.js";
import utilisateursRouter from "./routes/utilisateurs.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('PlayCiel API');
});

app.use('/api/badges', badgesRouter);
app.use('/api/inscriptions', inscriptionsRouter);
app.use('/api/jetons', jetonsRouter);
app.use('/api/leviers', leviersRouter);
app.use('/api/lumieres', lumieresRouter);
app.use('/api/participations', participationsRouter);
app.use('/api/utilisateurs', utilisateursRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
