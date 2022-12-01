"use client";

import Link from "next/link";
import { deletePost } from "../api/post";
import { DeletePostReq } from "../api/schema";

const SectionList = (props: { list: PostType[] }) => {
  const { list } = props ?? { list: [] };

  const onClickDeleteButton = async (id: number) => {
    const request: DeletePostReq = {
      id,
    };

    const data = await deletePost(request);
  };

  return (
    <ul>
      <li>
        <Link href={{ pathname: "/post" }}>Post Main</Link>
      </li>
      {list.map((li) => (
        <li key={`post-list-${li.id}`}>
          <Link
            href={{
              pathname: `/post/${li.id}`,
            }}
          >
            {li.title}
          </Link>
          <button
            type="button"
            onClick={async () => await onClickDeleteButton(li.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SectionList;
