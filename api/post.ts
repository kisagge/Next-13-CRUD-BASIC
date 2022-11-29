import { config } from "../config";

// get post list
export const getPostList = async () => {
  const response = await fetch(`${config.apiBaseUrl}/posts`, {
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
