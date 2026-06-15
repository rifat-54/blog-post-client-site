import HistoryTable from "@/components/modules/user/history/HistoryTable";
import PaginationControls from "@/components/ui/Pagination-Control";
import { blogService } from "@/services/blog.service";
import React from "react";

export default async function HistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;

  console.log(page);

  const { data } = await blogService.getBlogPosts({ page });

  // console.log(data);

  const blogs = data.data || [];
  const pagination = data.pagination || {
    limit: 10,
    page: 1,
    skip: 0,
    total: 34,
    totalPage: 4,
  };

  console.log(pagination);
  console.log(blogs);

  return (
    <div>
      <h1 className="text-4xl p-3">Blog History Page</h1>
      <HistoryTable blogs={blogs} />
      <PaginationControls meta={pagination}></PaginationControls>
    </div>
  );
}
