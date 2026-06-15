import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BlogPost } from "@/types";
import React from "react";

export default function HistoryTable({ blogs }: { blogs: BlogPost[] }) {
  return (
    <Table className="border rounded-md">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead >Title</TableHead>
          <TableHead>Feature</TableHead>
          <TableHead>Views</TableHead>
          <TableHead >Tags</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      
        {blogs?.map((item: BlogPost) => (
          <TableRow key={item.id}>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.isFeatured}</TableCell>
            <TableCell>{item.views}</TableCell>
            <TableCell>{item.tags}</TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
