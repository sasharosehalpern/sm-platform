import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common'

@Controller('hashtags')
export class HashtagsController {
    @Get('/')
    getHashtags(): string {
        // TODO: add logic
        return 'top hashtags';
    }

    @Get('/:tag/posts')
    getPostsForHashtag(@Param() param): string {

        return `show all posts with the hashtag ${param.tag}`;
    }
}