import "dotenv/config";
import express from 'express';
import { router } from "./routers/index.router";

const app = express();

app.set('view engine', 'ejs');
app.set('views', "src/views");

app.use(express.static('assets'));

app.use(router);

const PORT = process.env.PORT || 3012;

app.listen(PORT, () => {
  console.log(`Server launched on http://localhost:${PORT}`);
});