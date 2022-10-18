import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tweet } from './entities/tweet.entity';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Injectable()
export class TweetsService {

  constructor(
    @Inject('TWEET_REPOSITORY')
    private tweetRepository: Repository<Tweet>,
  ) {}

  create(createTweetDto: CreateTweetDto) {
    return this.tweetRepository.save(createTweetDto);
  }
  findAll() {
    return this.tweetRepository.find();
  }

  findOne(id: number) {
    return this.tweetRepository.findOneBy({id: id});
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return this.tweetRepository.update(id, updateTweetDto);
  }

  remove(id: number) {
    return this.tweetRepository.delete(id);
  }
}
