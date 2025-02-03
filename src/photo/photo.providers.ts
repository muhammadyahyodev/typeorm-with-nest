import { DataSource } from 'typeorm';
import { DATA_SOURCE, PHOTO_REPOSITORY } from '../common/constants';
import { Photo } from './photo.entity';

export const photoProviders = [
  {
    provide: PHOTO_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),
    inject: [DATA_SOURCE],
  },
];
