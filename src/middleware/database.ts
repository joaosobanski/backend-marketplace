import logger from '@src/utils/logger';
import mongoose, { connect as mongooseConnect, connection } from 'mongoose';

class Database {

    static async connect(): Promise<void> {
        // mongoose.set('strictQuery', false);
        const val  = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@${process.env.DATABASE_HOST}:27017/${process.env.DATABASE_DB}?authSource=admin`;
        console.log(val)
        await mongooseConnect(`mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@${process.env.DATABASE_HOST}:27017/${process.env.DATABASE_DB}`)
        // await mongooseConnect(``)
        .then(() => {
            logger.info(`Conectado com sucesso em mongo db:`);
          }).catch((err) => {
            logger.error(err);
          });
    };

    static async close(): Promise<void> {
        connection.close()
    };
}

export default Database;
