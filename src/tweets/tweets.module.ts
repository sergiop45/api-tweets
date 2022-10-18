import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { DatabaseModule } from './database/database.module';
import { tweetProviders } from './entities/tweet.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TweetsController],
  providers: [TweetsService, ...tweetProviders],
})
export class TweetsModule {}
