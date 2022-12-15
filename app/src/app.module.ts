import { Module } from '@nestjs/common';

import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TaskModule],
  controllers: [ TaskController],
  providers: [],
})
export class AppModule {}
