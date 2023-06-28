
import { randomPerson } from "../controllers/people.controllers";
import { Router } from "express";

const peopleRouter = Router()

peopleRouter.get('/person', randomPerson)

export default peopleRouter