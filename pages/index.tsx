import Head from "next/head";
import { Box, Button, Container, Typography } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useSettings } from "hooks/settings";
import type { FC } from "react";

const HomePage: FC = () => {
  const settings = useSettings();
  const handleToggleTheme = () => {
    settings.saveSettings({
      theme: settings.settings.theme === "light" ? "dark" : "light",
      responsiveFontSizes: true,
    });
  };

  return (
    <Container maxWidth="lg">
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Head>
          <title>Petohub</title>
          <meta name="description" content="Official website of Petohub - Pet lover's community" />
        </Head>
        <Typography variant="h1" color="text.primary">
          Welcome to{" "}
          <Typography variant="h1" display="inline" color="primary.main">
            Petohub
          </Typography>
        </Typography>
        <Typography variant="subtitle1">
          The website is under construction and will be ready in March 2022.
        </Typography>
        <Button
          variant="outlined"
          sx={{ mt: 1 }}
          onClick={handleToggleTheme}
          startIcon={<ColorLensIcon />}
        >
          Change theme
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
