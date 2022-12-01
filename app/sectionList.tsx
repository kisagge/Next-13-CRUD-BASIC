"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { deletePost } from "../api/post";
import { DeletePostReq } from "../api/schema";

const SectionList = (props: { list: PostType[] }) => {
  const router = useRouter();
  const { list } = props ?? { list: [] };

  const onClickDeleteButton = (id: number) => {
    const request: DeletePostReq = {
      id,
    };

    deletePost(request).then(() => {
      router.refresh();
    });
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
          <button type="button" onClick={() => onClickDeleteButton(li.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SectionList;
