"use server"
import { db } from "../../db/index";
import { usersTable } from '../../db/schema';

export async function insertOneUser(name:string,iscorrect:boolean) 
{await db.insert(usersTable).values({name:name, iscorrect: iscorrect})
}