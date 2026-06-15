import HistoryTable from "@/components/modules/user/history/HistoryTable";
import { blogService } from "@/services/blog.service";
import React from "react";

export default async function HistoryPage() {
  const { data } = await blogService.getBlogPosts();
  const blogs = data.data;
  console.log(blogs);

  return (
    <div>
        <h1 className="text-4xl p-3">Blog History Page</h1>
      <HistoryTable blogs={blogs}/>
    </div>
  );
}
