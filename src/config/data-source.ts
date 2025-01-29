import { Photo } from 'src/photo/photo.entity';
import { User } from 'src/user/user.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.PORT) || 5432,
  username: process.env.PG_USERNAME || 'postgres',
  password: process.env.PG_PASSWORD || 'my2002',
  database: process.env.DB_NAME || 'typeorm',
  entities: [User, Photo],
  synchronize: true,
  migrationsRun: true,
  migrations: [__dirname + '/../migrations/*.{.ts, .js}'],
  logging: true,
});
