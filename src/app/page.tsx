"use client"
import { PostProvider } from "@/contexts/PostContext";
import { AddPost } from "./components/AddPost";
import { Header } from "./components/Header";
import { ListPost } from "./components/ListPost";
import { Footer } from "./components/Footer";

const Page = () => {
  
  return (
    <PostProvider>
    <div className="h-screen w-screen">
        <div className="container bg-gray-200 max-w-xl mx-auto rounded-md pb-4">
            <Header />
            <AddPost  />
            <Footer />
        </div>
    </div>
    </PostProvider>
  );

}

export default Page;