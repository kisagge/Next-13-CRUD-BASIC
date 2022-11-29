import Link from "next/link";

const SectionList = (props: { list: NoteType[] }) => {
  const { list } = props ?? {};
  return (
    <ul>
      <li key="main">
        <Link href={{ pathname: "/test" }}>Test Main</Link>
      </li>
      {list.map((li) => (
        <li key={`list-${li.id}`}>
          <Link
            href={{
              pathname: `/test/${li.id}`,
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
