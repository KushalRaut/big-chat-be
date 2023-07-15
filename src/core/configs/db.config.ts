export const dbConfig = {
    databaseUser: process.env.PGUSER ?? 'postgres',
    databasePassword: process.env.PGPASSWORD ?? 'admin',
    databaseName: process.env.PGDATABASE ?? 'big-chat',
    databaseHost: process.env.PGHOST ?? 'localhost',
};
