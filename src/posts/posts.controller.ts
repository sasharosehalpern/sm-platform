import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Get('/')
    getAllPosts(): string {
        return 'get all posts';
    }

    @Get('/:postid')
    getPostDetails(@Param() param): string {
        return `details of postid = ${param.postid}`
    }
    
    @Post('/')
    createNewPost(): string {
      // TODO
      return `new post was created`;
    }

    @Delete('/:postid')
    deletePost(@Param() param): string {
      // TODO
      return `delete postid = ${param.postid}`;
    }

    @Put('/:postid/like')
    likePost(@Param() param): string {
      return `liked post ${param.postid}`;
    }

    @Delete('/:postid/like')
    unlikePost(@Param() param): string {
      return `unliked post ${param.postid}`;
    }

}
