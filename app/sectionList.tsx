import Link from "next/link";

const SectionList = (props: { list: PostType[] }) => {
  const { list } = props ?? {};
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
        </li>
      ))}
    </ul>
  );
};

export default SectionList;
