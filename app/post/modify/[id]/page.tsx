import Link from "next/link";

// components
import Header from "../../../../components/common/header";

// api
import { getPost } from "../../../../api/post";
import ModifyInputSection from "./ModifyInputSection";

const fetchData = async (id: string) => {
  return {
    post: await getPost(id),
  };
};

export default async function ModifyPostPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { post } = await fetchData(id);

  return (
    <>
      <Header />
      <ModifyInputSection post={post} />
      <Link href="/">Back</Link>
    </>
  );
}
