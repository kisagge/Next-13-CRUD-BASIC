import SectionList from "./sectionList";

const Page = (): JSX.Element => {
  return (
    <>
      <section>
        <h1>Main Page</h1>
        <section>
          <SectionList />
        </section>
      </section>
      <footer>Footer</footer>
    </>
  );
};

export default Page;
