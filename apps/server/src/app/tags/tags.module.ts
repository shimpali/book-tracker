import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagRepository } from './data/tag.repository';
import { TagModelName, TagSchema } from './data/tag.schema';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TagModelName, schema: TagSchema }]),
  ],
  controllers: [TagsController],
  providers: [TagsService, TagRepository],
})
export class TagsModule {}
