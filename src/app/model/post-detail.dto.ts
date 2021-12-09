import { CommentDto } from './comment.dto';
import { PostDto } from './post.dto';
import { UserDto } from './user.dto';

export interface PostDetailDto {

    post: PostDto;
    author: UserDto;
    comments: CommentDto [];

}
