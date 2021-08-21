import { createConnection } from "typeorm";

export const connectionDB = async() => {
    return await createConnection()
}
