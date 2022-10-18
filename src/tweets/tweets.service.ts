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
    return this.tweetRepository.create(createTweetDto);
  }

  findAll() {
    return this.tweetRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
