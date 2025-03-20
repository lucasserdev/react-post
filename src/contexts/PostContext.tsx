import { PostReducer } from "@/reducers/PostReducer";
import { Post } from "@/types/Post";
import { createContext, ReactNode, useEffect, useReducer } from "react";

const STORAGE_KEY = 'postsContextContent';

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;
    removePost: (id: number) => void;
}

export const PostContext = createContext<PostContextType | null>(null);

type Props = {
    children: ReactNode;
}
export const PostProvider = ( {children}: Props) => {
    const [posts, dispatch] = useReducer(
        PostReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
    }, [posts])

    const addPost = (title: string, body: string) => {
        dispatch({
            type: 'add',
            payload: {
                title: title,
                body: body
            }
        })
    }

    const removePost = (id: number) => {
        dispatch({
            type: 'remove',
            payload: {
                id: id
            }
        })
    }

    return(
        <PostContext.Provider value={ {posts, addPost, removePost} }>
            {children}
        </PostContext.Provider>
    );
}