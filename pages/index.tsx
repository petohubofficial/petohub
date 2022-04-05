import { Search, ShoppingBag } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import Illustration from "components/Illustration";
import { Layout } from "components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const HomePage = () => {
  const router = useRouter();
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Head>
        <title>Petohub</title>
        <meta name="description" content="Official website of Petohub - Pet lover's community" />
      </Head>
      {/* <Swiper>
        <SwiperSlide>
          <Box sx={{ width: "100vw", height: 400 }}>
            <Image
              src="/assets/images/veterinary-care.jpg"
              layout="fill"
              objectFit="cover"
              alt="slide1"
            />
          </Box>
        </SwiperSlide>
      </Swiper> */}
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          sx={{ py: 2 }}
        >
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box>
              <Typography component="span" variant="h1">
                Welcome to{" "}
              </Typography>
              <Typography component="span" variant="h1" color="primary.main">
                Petohub
              </Typography>
            </Box>
            <Typography display="block" fontSize={18} variant="overline" color="text.secondary">
              Best pet lover&apos;s community
            </Typography>
            <Box>
              <Button startIcon={<ShoppingBag />} onClick={() => router.push("/shop")} size="large">
                Browse shop
              </Button>
              <Button startIcon={<Search />} size="large">
                Search now
              </Button>
            </Box>
          </Box>
          <Illustration />
        </Box>
      </Container>
    </Box>
  );
};

HomePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default HomePage;
