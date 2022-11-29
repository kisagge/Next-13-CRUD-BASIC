const getData = async (id: string) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch(
    `https://my-json-server.typicode.com/kisagge/my-project-1/posts/${id}`,
    config
  );

  const data = await response.json();

  return data;
};

const TestDetailPage = async ({ params }: NoteDetailPageParamsType) => {
  const data = await getData(params.id);
  return (
    <>
      <section>
        id - {data.id} / title - {data.title}
        <div>content - {data.content}</div>
      </section>
      <footer>Test Footer</footer>
    </>
  );
};

export default TestDetailPage;
