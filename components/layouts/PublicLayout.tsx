import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { FC, ReactNode } from "react";

interface PublicLayoutProps {
  children?: ReactNode;
}

const LayoutRoot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
}));

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  return (
    <LayoutRoot>
      <Header />
      <Box component="main">{children}</Box>
      <Footer />
    </LayoutRoot>
  );
};

export default PublicLayout;
