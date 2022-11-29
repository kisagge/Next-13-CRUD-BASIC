import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <title>Hello Next 13</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
