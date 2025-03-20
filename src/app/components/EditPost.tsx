import { PostContext } from "@/contexts/PostContext";
import { Post } from "@/types/Post";
import { useContext, useState } from "react";

type Props = {
    post: Post;
}
export const EditPost = ( {post}:  Props) => {
    const postCtx = useContext(PostContext);
    const idPost = post.id;
    const [newTitle, setNewTitle] = useState(post.title);
    const [newBody, setNewBody] = useState(post.body);

    const handleEditBtn = (id: number, newTitle: string, newBody: string) => {
        if(id && newTitle && newBody) {
            postCtx?.editPost(id, newTitle, newBody);
        }
    }
    return (
        <div className="bg-orange-100 border-2 border-orange-200 rounded-md m-4 text-black flex flex-col p-4 pb-8 gap-2">
                <h2 className="font-bold">Modo de edição</h2>
                
                <input 
                    placeholder="Título da postagem" 
                    className="bg-gray-100 p-2 rounded-md 
                    outline-gray-400" 
                    type="text" 
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                />
                
                <textarea 
                    value={newBody}
                    onChange={e => setNewBody(e.target.value)}
                    placeholder="Conteúdo da postagem" 
                    className="bg-gray-100 p-2 rounded-md h-24 resize-none outline-gray-400">
                    

                </textarea>

                <div className="flex gap-2">
                    <button onClick={() => handleEditBtn(idPost, newTitle, newBody)} className="bg-green-400 hover:bg-green-500 w-1/4 h-10 font-bold text-white rounded-md cursor-pointer">Atualizar</button>
                    <button className="bg-gray-400 hover:bg-gray-500 w-1/4 h-10 font-bold text-white rounded-md cursor-pointer">Cancelar</button>
                </div>

                
        </div>
    );
}