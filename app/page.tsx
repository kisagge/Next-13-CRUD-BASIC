import { getPostList } from "../api/post";
import Header from "../components/common/header";
import SectionList from "./sectionList";

const getData = async () => {
  const data = {
    list: await getPostList(),
  };
  return data ?? {};
};

const Page = async () => {
  const { list } = await getData();
  return (
    <>
      <Header />
      <section>
        <h1>Main Page</h1>
        <section>
          <SectionList list={list} />
        </section>
      </section>
      <footer>Footer</footer>
    </>
  );
};

export default Page;
