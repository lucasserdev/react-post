import { Post } from "@/types/Post";
import { title } from "process";

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

type EditPostAction = {
    type: 'edit';
    payload: {
        id: number,
        newTitle: string,
        newBody: string
    }
}

type postActions = AddPostAction | removePostAction | EditPostAction;

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
        case 'edit': 
            return post.map(item => {
                if(item.id === action.payload.id) {
                   return {...item, title: action.payload.newTitle, body: action.payload.newBody }
                }
                return item;
            })
        default:
            return post;
    }
}