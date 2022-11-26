import { Connection, getConnectionOptions, createConnection } from "typeorm";

export default async (host = "database"): Promise<Connection> => {

    const getOptions = await getConnectionOptions();

    return await createConnection(
        Object.assign(getOptions, {
            host
        })
    );

}