import { FC, MouseEvent, useEffect, useState } from "react";
import NextLink from "next/link";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Link,
  Menu,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Logo } from "components/Logo";
import { Facebook, Instagram, LinkedIn, Pinterest, Search } from "@mui/icons-material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSettings } from "hooks/settings";
import { Settings } from "contexts/settings";
import { useRouter } from "next/router";
import { useGetCategoriesQuery } from "services/api.service";

interface HeaderProps {
  onOpenSidebar?: () => void;
}

const HeaderBar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    // find if scroll position is at top of page
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop) setScrolled(false);
      else setScrolled(true);
    });
  }, []);

  return (
    <Box
      display={{ sm: scrolled ? "none" : "flex", xs: scrolled ? "none" : "block" }}
      maxHeight={{ sm: 50, xs: "100%" }}
      justifyContent="space-around"
      alignItems="center"
      textAlign="center"
      color="neutral.100"
      sx={{ py: 2, backgroundColor: "neutral.800" }}
      position="sticky"
    >
      <Box sx={{ px: 1 }}>
        <Typography component="span" fontSize={14} fontWeight="bold">
          Ph:
          <Typography
            component="a"
            href="tel:7011923045"
            fontWeight="bold"
            fontSize={14}
            color="primary.main"
            sx={{ ml: 1 }}
          >
            +91 7011923045
          </Typography>
        </Typography>
      </Box>
      <Box sx={{ px: 1, mt: { sm: 0, xs: 0.8 } }}>
        <Typography component="span" fontSize={14} fontWeight="bold">
          Email:
          <Typography
            component="a"
            href="mailto:info@petohub.com"
            fontWeight="bold"
            fontSize={14}
            color="primary.main"
            sx={{ ml: 1 }}
          >
            info@petohub.com
          </Typography>
        </Typography>
      </Box>
      <Box sx={{ px: 1 }} display="flex" justifyContent="center" alignItems="center">
        <Typography component="span" fontSize={14} fontWeight="bold">
          Follow Us:
        </Typography>
        <Box sx={{ pt: 1, ml: 1 }}>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <Instagram fontSize="medium" color="primary" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <Facebook fontSize="medium" color="primary" />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
            <Pinterest fontSize="medium" color="primary" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <LinkedIn fontSize="medium" color="primary" />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

const HeaderNav = () => {
  const router = useRouter();
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        gap={{ xs: 0, sm: 6 }}
        alignItems="center"
        justifyContent={{ xs: "space-around", sm: "center" }}
        sx={{
          mt: 1,
          "& a": {
            "&:hover": { color: "primary.main" },
            py: 1,
            borderBottom: 1,
            borderColor: "primary.main",
            borderWidth: 0,
          },
        }}
      >
        <NextLink href="/" passHref>
          <Link
            color="textSecondary"
            sx={{ borderWidth: router.pathname === "/" ? "2px !important" : 0 }}
            underline="none"
            variant="subtitle2"
          >
            Home
          </Link>
        </NextLink>
        <NextLink href="/shop" passHref>
          <Link
            color="textSecondary"
            sx={{ borderWidth: router.pathname === "/shop" ? "2px !important" : 0 }}
            underline="none"
            variant="subtitle2"
          >
            Shop
          </Link>
        </NextLink>
        <NextLink href="/about" passHref>
          <Link
            color="textSecondary"
            sx={{ borderWidth: router.pathname === "/about" ? "2px !important" : 0 }}
            underline="none"
            variant="subtitle2"
          >
            About
          </Link>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Link
            color="textSecondary"
            sx={{ borderWidth: router.pathname === "/contact" ? "2px !important" : 0 }}
            underline="none"
            variant="subtitle2"
          >
            Contact
          </Link>
        </NextLink>
      </Box>
    </Container>
  );
};

export const Header: FC<HeaderProps> = (props) => {
  const { settings, saveSettings } = useSettings();

  const { data } = useGetCategoriesQuery();

  // Categories Select Menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [category, setCategory] = useState<string>("All categories");
  const open = Boolean(anchorEl);

  // Setting anchor to button element
  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  // Handling closing of menu
  const handleClose = (e: any) => {
    setAnchorEl(null);
    // Handling click outside of menu
    if (e.target.tagName === "LI") setCategory(e.target.innerText);
  };

  // Handle toggle theme
  const handleToggleTheme = () => {
    const newSettings: Settings = {
      ...settings,
      theme: settings.theme === "light" ? "dark" : "light",
    };
    saveSettings(newSettings);
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        boxShadow: 5,
        color: "text.secondary",
      }}
    >
      <HeaderBar />
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <NextLink href="/" passHref>
            <Logo />
          </NextLink>
          <Box sx={{ flexGrow: 1 }} />
          <TextField
            fullWidth
            sx={{ px: 4, display: { xs: "none", sm: "block" } }}
            inputMode="search"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Box sx={{ m: 0 }}>
                    <Button
                      id="basic-button"
                      aria-controls="basic-menu"
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      endIcon={<ExpandMoreIcon />}
                    >
                      {category}
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem value="All categories" onClick={handleClose}>
                        All categories
                      </MenuItem>
                      {data?.categories?.map((category) => (
                        <MenuItem key={category.id} value={category.name} onClick={handleClose}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </InputAdornment>
              ),
            }}
            placeholder="Searching for"
          />
          <IconButton disableRipple sx={{ bgcolor: "primary.main", mx: 1 }}>
            <PersonOutlineOutlinedIcon sx={{ fill: "white" }} />
          </IconButton>
          <IconButton disableRipple sx={{ bgcolor: "primary.main", mx: 1, overflow: "visible" }}>
            <Badge badgeContent={0} color="secondary" sx={{ "& .MuiBadge-badge": { top: -5 } }}>
              <ShoppingCartOutlinedIcon sx={{ fill: "white" }} />
            </Badge>
          </IconButton>
          <IconButton
            disableRipple
            sx={{ bgcolor: settings.theme === "light" ? "neutral.900" : "neutral.100", mx: 1 }}
          >
            {settings.theme === "light" ? (
              <DarkModeIcon sx={{ fill: "white" }} onClick={handleToggleTheme} />
            ) : (
              <LightModeIcon sx={{ fill: "black" }} onClick={handleToggleTheme} />
            )}
          </IconButton>
        </Toolbar>
      </Container>
      <HeaderNav />
    </AppBar>
  );
};
