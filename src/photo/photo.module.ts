import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { photoProviders } from './photo.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...photoProviders, PhotoService],
  controllers: [PhotoController],
})
export class PhotoModule {}
