import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { AddUserDto } from './dto/add-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  add(@Body() addUserDto: AddUserDto) {
    return this.userService.addUser(addUserDto);
  }

  @Delete()
  delete(@Param() deleteUserDto: DeleteUserDto) {
    return this.delete(deleteUserDto);
  }
}
