// components
import Header from "../../../components/common/header";

// api
import { getPost } from "../../../api/post";

const getData = async (id: string) => {
  const data = {
    post: await getPost(id),
  };
  return data;
};

const PostDetailPage = async ({ params }: NoteDetailPageParamsType) => {
  const { post } = await getData(params.id);
  return (
    <>
      <Header />
      <section>
        id - {post.id} / title - {post.title}
        <div>content - {post.content}</div>
      </section>
      <footer>Test Footer</footer>
    </>
  );
};

export default PostDetailPage;
