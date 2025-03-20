import { PostContext } from "@/contexts/PostContext";
import { stat } from "fs";
import { useContext, useEffect, useState } from "react";
import { ListPost } from "./ListPost";
import { Post } from "@/types/Post";
import { EditPost } from "./EditPost";

export const AddPost = () => {
    const postCtx = useContext(PostContext);

    const [editOn, setEditOn] = useState(false);
    const [postToEdit, setPostToEdit] = useState<Post | null>(null);

    const [inputTitle, setInputTitle] = useState('');
    const [inputBody, setInputBody] = useState('');
    const addPost = (title: string, body: string) => {
        if(title && body) {
            postCtx?.addPost(title, body);
        }
        setInputTitle('');
        setInputBody('');
    }

    const getPostEdit = (post: Post) => {
        if(post) {
            setEditOn(true);
            setPostToEdit(post);
        }
    }

    return (
        <>
            {editOn && postToEdit &&
                <EditPost post={postToEdit} />
            }

            {!editOn &&
                <div className="bg-white border-2 border-gray-300 rounded-md m-4 text-black flex flex-col p-4 pb-8 gap-2 relative">
                    <h2 className="font-bold">Nova postagem</h2>
                    
                    <input 
                        placeholder="Título da postagem" 
                        className="bg-gray-100 p-2 rounded-md 
                        outline-gray-400" 
                        type="text" 
                        value={inputTitle} 
                        onChange={e => setInputTitle(e.target.value)} />
                    
                    <textarea value={inputBody} onChange={e => setInputBody(e.target.value)} placeholder="Conteúdo da postagem" className="bg-gray-100 p-2 rounded-md h-24 resize-none outline-gray-400">

                    </textarea>

                    <button onClick={() => addPost(inputTitle, inputBody)} className="bg-green-400 hover:bg-green-500 w-1/4 h-10 absolute right-5 -bottom-5 font-bold text-white rounded-md cursor-pointer">Publicar</button>

                
                </div>
            }
            

            <ListPost sendPostEdit={getPostEdit} />
        </>
    );

}