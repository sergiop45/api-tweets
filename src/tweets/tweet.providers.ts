import { DataSource } from 'typeorm';
import { Tweet } from './entities/tweet.entity';

export const tweetProviders = [
  {
    provide: 'TWEET_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Tweet),
    inject: ['DATA_SOURCE'],
  },
];