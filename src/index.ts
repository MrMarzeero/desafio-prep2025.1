import './config/env'
import express from 'express';
import cors from 'cors'
import router from './routes';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(router)
app.use(cors())
app.listen(port, () => {
    console.log(`Server working on ${port}!`);
})