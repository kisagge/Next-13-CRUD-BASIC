"use client";

import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import { createPost } from "../../../api/post";
import { CreatePostReq } from "../../../api/schema";

export default function CreateInputSection() {
  // router
  const router = useRouter();

  // state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // input handler
  const inputTitleHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const inputContentHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  // button onClick Event
  const onClickCreateButton = async () => {
    if (title.length <= 0) {
      alert("Please enter title.");
      return;
    }

    if (content.length <= 0) {
      alert("Please enter content.");
      return;
    }

    const request: CreatePostReq = {
      title,
      content,
    };

    const data = await createPost(request);
    router.push(`/post/${data.id}`);
  };

  return (
    <>
      <div>
        <label htmlFor="input-title">
          <p>Title</p>
        </label>
        <input
          type="text"
          id="input-title"
          placeholder="title"
          onChange={inputTitleHandler}
          value={title}
        />
      </div>

      <div>
        <label htmlFor="input-content">
          <p>Content</p>
        </label>
        <textarea
          id="input-content"
          placeholder="content"
          onChange={inputContentHandler}
          value={content}
        />
      </div>

      <button type="button" onClick={async () => await onClickCreateButton()}>
        Create
      </button>
    </>
  );
}
