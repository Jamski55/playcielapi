import cors from "cors";
import express from "express";
import badgesRouter from "./routes/badges.js";
import jetonsRouter from "./routes/jetons.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('PlayCiel API');
});

app.use('/badges', badgesRouter);
app.use('/jetons', jetonsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
