export const AddPost = () => {
    return (
        <div className="bg-white border-2 border-gray-300 rounded-md m-4 text-black flex flex-col p-4 pb-8 gap-2 relative">
            <h2 className="font-bold">Nova postagem</h2>
            
            <input placeholder="Título da postagem" className="bg-gray-100 p-2 rounded-md" type="text" />
            
            <textarea placeholder="Conteúdo da postagem" className="bg-gray-100 p-2 rounded-md h-24 resize-none">

            </textarea>

            <button className="bg-green-400 w-1/4 h-10 absolute right-5 -bottom-5 font-bold text-white rounded-md">Publicar</button>
        </div>
    );

}