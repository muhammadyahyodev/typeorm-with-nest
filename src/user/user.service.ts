import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { USER_REPOSITORY } from 'src/common/constants';
import { AddUserDto } from './dto/add-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}

  async addUser(addUser: AddUserDto): Promise<User> {

    console.log(addUser)


    const photo = this.userRepository.create(addUser);

    return this.userRepository.save(photo);
  }

  async deleteUser(deleteUser: DeleteUserDto): Promise<Boolean> {
    const { id } = deleteUser;
    return Boolean(this.userRepository.delete({ id: +id }));
  }
}
