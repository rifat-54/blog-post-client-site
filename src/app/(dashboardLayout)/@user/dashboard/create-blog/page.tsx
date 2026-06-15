import CreateBlogFormClient from "@/components/modules/user/create-blog/CreateBlogFormClient";
import CreateBlogFormServer from "@/components/modules/user/create-blog/CreateBlogFormServer";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";
import React from "react";

export default async function CreateBlog() {
  const { data } = await blogService.getBlogPosts();
  return (
    <div>
      {/* <CreateBlogFormServer></CreateBlogFormServer> */}
      <CreateBlogFormClient></CreateBlogFormClient>
      {data.data.map((item: BlogPost) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
