import { Request, Response } from "express";
import { getPeopleAndRaffle } from "../services/people.service";
import { Person } from "../protocols";



export async function randomPerson(req: Request, res: Response){
    const person = await getPeopleAndRaffle() as Person

    res.send(person)
}