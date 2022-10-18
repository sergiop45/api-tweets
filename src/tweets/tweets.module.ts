import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { DatabaseModule } from './database/database.module';
import { tweetProviders } from './tweet.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TweetsController],
  providers: [...tweetProviders, TweetsService, ],
})
export class TweetsModule {}
