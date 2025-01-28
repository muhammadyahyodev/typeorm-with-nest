import { DATA_SOURCE } from 'src/common/constants';
import { AppDataSource } from 'src/config/data-source';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      return AppDataSource.initialize();
    },
  },
];
