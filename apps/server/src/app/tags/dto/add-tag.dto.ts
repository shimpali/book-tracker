import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';

export class AddTagDto {
  @IsMongoId()
  @ApiProperty()
  book: string;

  @IsString()
  @ApiProperty()
  title: string;
}
