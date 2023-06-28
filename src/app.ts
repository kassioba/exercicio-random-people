import express, { Request, Response } from "express";
import peopleRouter from './routes/people.routes';

const app = express()

app.use(express.json())
app.use(peopleRouter)

app.get('/health', (req: Request, res: Response) => res.send('Tudo certinhooo'))

const port = 5000

app.listen(port, () => console.log(`Server rodando na porta ${port}`))