import { ReactNode } from "react";
import Head from "./head";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <html>
      <Head></Head>
      <body>
        <header>Common Header</header>
        {children}
      </body>
    </html>
  );
};

export default Layout;
