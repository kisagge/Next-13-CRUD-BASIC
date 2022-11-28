import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <title>test Next.js 13</title>
      </head>
      <body>
        <header>header</header>
        <section>{children}</section>
        <footer>footer</footer>
      </body>
    </html>
  );
};

export default layout;
