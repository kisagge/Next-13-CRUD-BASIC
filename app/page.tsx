import Link from "next/link";
import Header from "../components/common/header";

const Page = () => {
  return (
    <>
      <Header />
      <section>
        <h1>Main Page</h1>
        <Link href={{ pathname: "/post" }}>Posts</Link>
      </section>
      <footer>Main Footer</footer>
    </>
  );
};

export default Page;
