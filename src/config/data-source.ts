import { Photo } from '../photo/photo.entity';
import { User } from '../user/user.entity';
import { DataSource } from 'typeorm';
import { resolve } from 'path';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [User, Photo],
  synchronize: false,
  migrationsRun: true,
  migrations: [resolve(__dirname, '../migrations/*.{ts,js}')],
  logging: true,
});
