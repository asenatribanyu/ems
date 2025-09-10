import express from 'express';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});