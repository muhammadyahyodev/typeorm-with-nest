import { DataSource } from 'typeorm';
import { Photo } from './photo.entity';
import { DATA_SOURCE, PHOTO_REPOSITORY } from 'src/common/constants';

export const photoProviders = [
  {
    provide: PHOTO_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),
    inject: [DATA_SOURCE],
  },
];
