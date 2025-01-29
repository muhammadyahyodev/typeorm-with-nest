import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { PHOTO_REPOSITORY } from 'src/common/constants';
import { CreatePhotoDto } from './dto';

@Injectable()
export class PhotoService {
  constructor(
    @Inject(PHOTO_REPOSITORY)
    private photoRepository: Repository<Photo>,
  ) {}

  async addPhoto(createPhotoDto: CreatePhotoDto): Promise<Photo> {
    const photo = this.photoRepository.create(createPhotoDto);

    return this.photoRepository.save(photo);
  }

  async update(id: number, updateUserDto: { name: string }): Promise<Photo> {
    const existingUser = await this.photoRepository.findOne({ where: { id } });
    const userData = this.photoRepository.merge(existingUser, updateUserDto);
    return await this.photoRepository.save(userData);
  }

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async deletePhoto(name: string): Promise<any> {
    return this.photoRepository.delete({ name });
  }
}
