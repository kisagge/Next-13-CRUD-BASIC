import SectionList from "./sectionList";

const getData = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch(
    `https://my-json-server.typicode.com/kisagge/my-project-1/posts`,
    config
  );
  const data = await response.json();

  return data ?? [];
};

const Page = async () => {
  const list = await getData();
  return (
    <>
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
