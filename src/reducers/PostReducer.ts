import { Post } from "@/types/Post";

type AddPostAction = {
    type: 'add';
    payload: {
        title: string,
        body: string
    }
}

type removePostAction = {
    type: 'remove';
    payload: {
        id: number
    }
}

type postActions = AddPostAction | removePostAction;

export const PostReducer = (post: Post[], action: postActions) => {
    switch(action.type) {
        case 'add':
            return [...post, {
                id: post.length,
                title: action.payload.title,
                body: action.payload.body
            }];
        case 'remove':
            return post.filter(item => item.id !== action.payload.id);
        default:
            return post;
    }
}