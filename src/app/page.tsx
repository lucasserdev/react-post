"use client"
import { AddPost } from "./components/AddPost";
import { Header } from "./components/Header";

const Page = () => {
  return (
    <div className="h-screen w-screen">
        <div className="container bg-gray-200 max-w-xl mx-auto rounded-md">
            <Header />
            <AddPost />
        </div>
    </div>
  );

}

export default Page;