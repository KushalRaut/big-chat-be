import * as dotenv from 'dotenv';
dotenv.config();
import appConfig from './core/configs/app.config';
import app from './core/configs/express';
import chalk from 'chalk';
import { AppDataSource } from './core/setup/db.setup';

(async function () {
    try {
        AppDataSource.initialize().then(() => {
            console.log('DB succeddfully connected.');
            app.listen(appConfig.port, () => {
                console.log(chalk.yellow(`Server running on port ${appConfig.port}`));
            });
        });
    } catch (err) {
        console.log(err);
    }
})();
