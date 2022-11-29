"use client";

import { ChangeEvent, useState } from "react";
import { createPost } from "../../api/post";
import { CreatePostReq } from "./schema";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // input handler
  const inputTitleHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const inputContentHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  // button onClick Event
  const onClickCreateButton = async (e: any) => {
    const request: CreatePostReq = {
      title,
      content,
    };

    await createPost(request);
  };

  return (
    <>
      <div>
        {" "}
        <input
          type="text"
          id="input-title"
          placeholder="title"
          onChange={inputTitleHandler}
          value={title}
        />
        <label htmlFor="input-title" />
      </div>

      <div>
        {" "}
        <textarea
          id="input-content"
          placeholder="content"
          onChange={inputContentHandler}
          value={content}
        />
        <label htmlFor="input-content" />
      </div>

      <button type="button" onClick={onClickCreateButton}>
        Create
      </button>
    </>
  );
};

export default CreatePage;
