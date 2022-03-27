import { FC, ReactNode, useState } from "react";
import { styled } from "@mui/material/styles";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar";

interface LayoutProps {
  children?: ReactNode;
}

const LayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  paddingTop: 64,
}));

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <LayoutRoot>
      <Header onOpenSidebar={(): void => setIsSidebarOpen(true)} />
      <Sidebar onClose={(): void => setIsSidebarOpen(false)} open={isSidebarOpen} />
      {children}
      <Footer />
    </LayoutRoot>
  );
};
