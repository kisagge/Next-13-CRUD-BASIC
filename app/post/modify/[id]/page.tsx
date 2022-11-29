"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

// components
import Header from "../../../../components/common/header";

// api
import { getPost } from "../../../../api/post";

const getData = async (id: string) => {
  const data = {
    post: await getPost(id),
  };
  return data;
};

const ModifyPostPage = async ({ params }: ModifyPostPageParamsType) => {
  // const { post } = await getData(params.id);

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <Header />
      <div>
        <label htmlFor="input-title">
          <p>Title</p>
        </label>
        <input type="text" id="input-title" placeholder="title" />
      </div>
      <div>
        <label htmlFor="input-content">
          <p>Content</p>
        </label>
        <textarea id="input-content" placeholder="content" />
      </div>

      <button type="button">Modify</button>
      <Link href="/">Back</Link>
    </>
  );
};

export default ModifyPostPage;
