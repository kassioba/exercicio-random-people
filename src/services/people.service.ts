import { Person } from "protocols";
import { getPeople } from "../repositories/people.repositories";

export async function getPeopleAndRaffle(){
    const people = (await getPeople()).rows as Person[]
    
    const person = people[Math.round(Math.random() * (people.length - 1))]


    return person
}