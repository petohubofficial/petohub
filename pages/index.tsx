import { Box, Container, Typography } from "@mui/material";
import { Layout } from "components/Layout";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import VeterinaryCare from "public/assets/images/veterinary-care.jpg";

const HomePage = () => {
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
        <Swiper>
          <SwiperSlide>
            <Image src={VeterinaryCare} width="800" height="600" alt="slide1" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  );
};

HomePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default HomePage;
