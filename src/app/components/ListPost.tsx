import { PostContext } from "@/contexts/PostContext";
import { Post } from "@/types/Post";
import { useContext, useState } from "react";

type Props = {
    sendPostEdit: (item: Post) => void;
}

export const ListPost = ( {sendPostEdit}: Props) => {
    const postCtx = useContext(PostContext);
    
    const removePost = (id: number) => {
        postCtx?.removePost(id);
    }

    const getPostEdit = (item: Post) => {
        sendPostEdit(item);
    }

    return (
        <div className="text-black">
            <h2 className="border-b border-gray-300 p-2 mb-2">Postagens Recentes</h2>
            {postCtx?.posts.map(item => (
                <div key={item.id} className="flex justify-between px-2 py-4 m-4 border-2 rounded-md bg-white border-gray-300 gap-2 items-center">
                <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-400 mt-2">{item.body}</p>
                </div>

                <div className="flex gap-2 h-10">
                    <button onClick={() => getPostEdit(item)} className="text-sm py-1 px-2 text-white rounded-md bg-blue-400 hover:bg-blue-500 cursor-pointer">Editar</button>
                    <button onClick={() => removePost(item.id)} className="text-sm py-1 px-2 text-white rounded-md bg-red-400 hover:bg-red-500 cursor-pointer">Excluir</button>
                </div>
                
            </div>
            ))}
        </div>
    );
}