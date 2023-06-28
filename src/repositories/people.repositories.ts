import db from "../database/database.connection";

export function getPeople(){
    return db.query(`SELECT * FROM people`)
}