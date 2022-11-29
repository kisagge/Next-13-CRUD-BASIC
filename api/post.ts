import { CreatePostReq } from "../app/create/schema";
import { config } from "../config";

// get post list
export const getPostList = async () => {
  const response = await fetch(`${config.apiBaseUrl}/post`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  return (await response.json()) ?? [];
};

// get post detail
export const getPost = async (id: string) => {
  const response = await fetch(`${config.apiBaseUrl}/post/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  return (await response.json()) ?? {};
};

// create post
export const createPost = async (request: CreatePostReq) => {
  const response = await fetch(`${config.apiBaseUrl}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
  return (await response.json()) ?? {};
};
