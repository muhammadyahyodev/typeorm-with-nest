import { Photo } from 'src/photo/photo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Photo, (post) => post.user)
  posts: Photo[];
}
