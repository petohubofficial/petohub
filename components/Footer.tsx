import { Facebook, Instagram, LinkedIn, Pinterest } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Logo } from "components/Logo";
import type { FC } from "react";

const sections = [
  {
    title: "Reach out",
    links: [
      {
        title: "Mukhram Garden, Tilak Nagar",
        href: "/contact",
        target: null,
        icon: null,
      },
      {
        title: "petohubofficial@gmail.com",
        href: "mailto:petohubofficial@gmail.com",
        target: null,
        icon: null,
      },
      {
        title: "+91 7011923045",
        href: "tel:7011923045",
        target: null,
        icon: null,
      },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        title: "About Us",
        href: "#",
        target: null,
        icon: null,
      },
      {
        title: "Services",
        href: "#",
        target: null,
        icon: null,
      },
      {
        title: "Shop",
        href: "#",
        target: null,
        icon: null,
      },
      {
        title: "Contact",
        href: "#",
        target: null,
        icon: null,
      },
    ],
  },
  {
    title: "Information",
    links: [
      {
        title: "Privacy Policy",
        href: "#",
        target: null,
        icon: null,
      },
      {
        title: "Terms of Use",
        href: "#",
        target: null,
        icon: null,
      },
      {
        title: "Disclaimer",
        href: "#",
        target: null,
        icon: null,
      },

      {
        title: "FAQ",
        href: "#",
        target: null,
        icon: null,
      },
    ],
  },
  {
    title: "Catch us on social media",
    links: [
      {
        title: "Facebook",
        href: "https://www.facebook.com/",
        icon: <Facebook sx={{ mr: 1 }} />,
        target: "_blank",
      },
      {
        title: "Instagram",
        href: "https://www.instagram.com/",
        icon: <Instagram sx={{ mr: 1 }} />,
        target: "_blank",
      },
      {
        title: "Pinterest",
        href: "https://www.pinterest.com/",
        icon: <Pinterest sx={{ mr: 1 }} />,
        target: "_blank",
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: <LinkedIn sx={{ mr: 1 }} />,
        target: "_blank",
      },
    ],
  },
];

export const Footer: FC = (props) => (
  <Box
    sx={{
      backgroundColor: "background.default",
      borderTopColor: "divider",
      borderTopStyle: "solid",
      borderTopWidth: 1,
      pb: 2,
      pt: {
        md: 3,
        xs: 2,
      },
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {sections.map((section, index) => (
          <Grid item key={index} md={3} sm={6} xs={12}>
            <Typography color="textSecondary" variant="overline">
              {section.title}
            </Typography>
            <List disablePadding>
              {section.links.map(({ title, href, target, icon }) => (
                <ListItem disableGutters key={title} sx={{ pb: 0, pt: 1 }}>
                  <ListItemAvatar
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      minWidth: 0,
                      mr: 0.5,
                    }}
                  ></ListItemAvatar>
                  {icon ?? icon}
                  <ListItemText
                    primary={
                      <Link
                        href={href}
                        target={target || ""}
                        color="textPrimary"
                        variant="subtitle2"
                      >
                        {title}
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
      <Divider
        sx={{
          borderColor: (theme) => alpha(theme.palette.primary.contrastText, 0.12),
          my: 2,
        }}
      />
      <Box display="flex" alignItems="center" gap={2} justifyContent="center">
        <Logo />
        <Typography color="textSecondary" variant="caption">
          © {new Date().getFullYear()} Petohub.
        </Typography>
        <Typography color="textSecondary" variant="caption">
          All Rights Reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
);
