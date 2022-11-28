import Link from "next/link";

const SectionList = (): JSX.Element => {
  return (
    <ul>
      <li key="main">
        <Link href={{ pathname: "/test" }}>Test Main</Link>
      </li>
      <li key="1">
        <Link
          href={{
            pathname: "/test/1",
          }}
        >
          Element 1
        </Link>
      </li>
      <li key="2">
        <Link
          href={{
            pathname: "/test/2",
          }}
        >
          Element 2
        </Link>
      </li>
      <li key="3">
        <Link
          href={{
            pathname: "/test/3",
          }}
        >
          Element 3
        </Link>
      </li>
    </ul>
  );
};

export default SectionList;
