import { env } from "@/env";

const API_URL = env.API_URL;
// ,{next:{revalidate:10}}

interface GetBlogParams {
  isFeatured?: boolean;
  search?: string;
}

interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

export const blogService = {
  getBlogPosts: async function (
    params?: GetBlogParams,
    options?: ServiceOptions,
  ) {
    try {
      const url = new URL(`${API_URL}/posts`);
      // url.searchParams.append("Key","Value")

      if (params) {
        //  console.log(Object.entries(params))
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }

      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }

      console.log(url.toString());

      const res = await fetch(url.toString(), config);
      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
  getBlogById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/posts/${id}`);
      const data =await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "something went wrong " } };
    }
  },
};
