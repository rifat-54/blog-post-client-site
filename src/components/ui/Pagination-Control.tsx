"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "./button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationControlsProps {
  limit: number;
  page: number;
  skip: number;
  total: number;
  totalPage: number;
}

export default function PaginationControls({
  meta,
}: {
  meta: PaginationControlsProps;
}) {
  const { limit, page:currentPage, skip, total, totalPage } = meta;

  const router=useRouter()
  const searchParams = useSearchParams();

    // console.log("searchParams > ",searchParams.toString());
  
  // params.append("page","4")
  
  const navigateToPage=(page:number)=>{
    const params=new URLSearchParams(searchParams.toString())


    params.set("page",page.toString())
    router.push(`?${params.toString()}`)
    console.log("params > ",params.toString())

  }

const start=(currentPage-1)*limit+1;
const end=Math.min(currentPage*limit,total);


  console.log({ limit, currentPage, skip, total, totalPage });
  return (
    <div className="flex items-center justify-between px-2 py-4 border-t mt-4">
      <div className="text-sm text-muted-foreground">
        Showing {start} to {end} of {total} results
      </div>

      <div className="flex items-center space-x-2">
        <Button disabled={currentPage==1} onClick={()=>navigateToPage(1)}>
          <ChevronsLeft className="h-4 w-4" />
        </Button>

        <Button disabled={currentPage==1} onClick={()=>navigateToPage(currentPage - 1)}>
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">Page {currentPage} of {totalPage}</span>
        </div>

        <Button onClick={()=>navigateToPage(currentPage+1)}
          disabled={currentPage==totalPage}>
          <ChevronRight className="h-4 w-4" />
        </Button>

        <Button disabled={currentPage==totalPage} onClick={()=>navigateToPage(totalPage)}
        >
          <ChevronsRight className="h-4 w-4"  />
        </Button>
      </div>
    </div>
  );
}
