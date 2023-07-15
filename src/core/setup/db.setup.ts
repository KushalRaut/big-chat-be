import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { dbConfig } from '../configs/db.config';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: dbConfig.databaseHost,
    port: 5432,
    username: dbConfig.databaseUser,
    password: dbConfig.databasePassword,
    database: dbConfig.databaseName,
    synchronize: true,
    logging: false,
    ssl: true,
});

AppDataSource.initialize()
    .then(() => {
        console.log('DB succeddfully connected.');
    })
    .catch((error) => console.log(error));
