import { CreatePostReq, DeletePostReq, UpdatePostReq } from "./schema";
import { config } from "../config";

// get post list
export const getPostList = async () => {
  const response = await fetch(`${config.apiBaseUrl}/post`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  return (await response.json()) ?? [];
};

// get post detail
export const getPost = async (id: string) => {
  const response = await fetch(`${config.apiBaseUrl}/post/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
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

// update post
export const updatePost = async (request: UpdatePostReq) => {
  const response = await fetch(`${config.apiBaseUrl}/post/${request.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
  return (await response.json()) ?? {};
};

// delete post
export const deletePost = async (request: DeletePostReq) => {
  const response = await fetch(`${config.apiBaseUrl}/post/${request.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
