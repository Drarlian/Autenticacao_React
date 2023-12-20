import { ReactNode } from "react";

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <>
        <div className="header">HEADER</div>
        <div>{children}</div>
    </>
  );
}

export default Layout;