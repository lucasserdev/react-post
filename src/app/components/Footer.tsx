import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const Footer = () => {
    const postCtx = useContext(PostContext);
    return (
        <footer className="text-black ml-4">
            Total de postagens: {postCtx?.posts.length}
        </footer>
    );
}