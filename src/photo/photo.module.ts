import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PhotoService } from './photo.service';
import { photoProviders } from './entities/photo.providers';
import { PhotoController } from './photo.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...photoProviders, PhotoService],
  controllers: [PhotoController],
})
export class PhotoModule {}
