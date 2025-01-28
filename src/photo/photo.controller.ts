import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { CreatePhotoDto } from './dto';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll() {
    return this.photoService.findAll();
  }

  @Post()
  addOne(@Body() createPhotoDto: CreatePhotoDto) {
    return this.photoService.addPhoto(createPhotoDto);
  }

  @Delete()
  deleteOne(@Body('name') name: string) {
    return this.photoService.deletePhoto(name);
  }
}
