"use client";

import { NextPage } from "next";
import Router, { useRouter } from "next/router";

interface Props {
  id: number;
  pathname: string;
}

const TestDetailPage: NextPage<Props> = ({ id, pathname }) => {
  console.log(pathname);
  return (
    <>
      <section>Test Detail Page id - {id}</section>
      <footer>Test Footer</footer>
    </>
  );
};

TestDetailPage.getInitialProps = async ({ query, pathname }) => {
  console.log(pathname);
  const id: number = Number(query.id);
  return { id: id, pathname };
};

export default TestDetailPage;
