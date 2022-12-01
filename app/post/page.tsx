import Link from "next/link";
import { getPostList } from "../../api/post";
import Header from "../../components/common/header";
import SectionList from "../sectionList";

const getData = async () => {
  const data = {
    list: await getPostList(),
  };
  return data ?? {};
};

const PostPage = async () => {
  const { list } = await getData();
  console.log(list);
  return (
    <>
      <Header />
      <section>
        <h1>Post List Page</h1>
        <SectionList list={list} />
      </section>
      <Link href="/post/create">Create Post</Link>
      <footer>Post Footer</footer>
    </>
  );
};

export default PostPage;
