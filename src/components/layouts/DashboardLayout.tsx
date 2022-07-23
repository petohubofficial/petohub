import { Assignment, Dashboard, NoteAdd } from "@mui/icons-material";
import { Box, Card, Container, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement, ReactNode } from "react";

interface DashboardLinkProps {
  href: string;
  label: string;
  icon: ReactElement;
}

const DashboardLink = (props: DashboardLinkProps): ReactElement => {
  const { href, label, icon } = props;
  const router = useRouter();
  const isActive = router.pathname === href;

  const theme = useTheme();
  const color = isActive ? theme.palette.primary.main : theme.palette.action.active;
  const borderColor = isActive ? theme.palette.primary.main : "transparent";
  const hover = theme.palette.primary.main;

  return (
    <Link href={href} passHref>
      <Box
        display="flex"
        sx={{
          p: 1,
          borderLeft: "2px solid",
          borderColor,
          cursor: "pointer",
          "&:hover": {
            borderColor: hover,
            "& svg *": { fill: hover },
            "& .MuiTypography-root": { color: hover },
          },
          "& svg *": { fill: color },
        }}
      >
        {icon}
        <Typography component="span" fontWeight={500} color={color}>
          {label}
        </Typography>
      </Box>
    </Link>
  );
};

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} sx={{ my: 2 }} gap={2}>
        <Card sx={{ py: 2, height: "100%" }}>
          <DashboardLink href="/dashboard" label="Dashboard" icon={<Dashboard />} />
          <DashboardLink href="/dashboard/product" label="Products" icon={<Assignment />} />
          <DashboardLink
            href="/dashboard/product/new"
            label="Add a new product"
            icon={<NoteAdd />}
          />
        </Card>
        <Card sx={{ flex: 1 }}>{children}</Card>
      </Box>
    </Container>
  );
};

export default DashboardLayout;
