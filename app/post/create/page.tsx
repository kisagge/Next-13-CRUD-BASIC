import Link from "next/link";
import Header from "../../../components/common/header";
import CreateInputSection from "./CreateInputSection";

const CreatePage = () => {
  return (
    <>
      <Header />
      <CreateInputSection />
      <Link href="/">Back</Link>
    </>
  );
};

export default CreatePage;
