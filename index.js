import express from 'express';
import { Router } from 'express';

const port = parseInt(process.env.PORT) || 8080;
const app = express();
const router = Router();

app.get("/hello", async (req, res) => {
  const word = req.query.word || "world";
  res.send(`Hello, you entered ${word}!`);
});

app.use(router);

app.listen(port, () => {
  console.log(`ctc-buildservice-sample: listening on port ${port}`);
});