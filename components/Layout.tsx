import React from "react";
import { useRouter } from "next/router";
import MainBar from "./custom-ui/MainBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const isLoginPage = router.pathname === "/";

  return (
    <>
      {!isLoginPage && <MainBar />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
