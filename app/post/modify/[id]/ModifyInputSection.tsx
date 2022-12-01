"use client";

import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import { updatePost } from "../../../../api/post";
import { UpdatePostReq } from "../../../../api/schema";

export default function ModifyInputSection({ post }: { post: any }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const router = useRouter();

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

    const request: UpdatePostReq = {
      id: Number(post.id),
      title,
      content,
    };

    const data = await updatePost(request);
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
        Modify
      </button>
    </>
  );
}
