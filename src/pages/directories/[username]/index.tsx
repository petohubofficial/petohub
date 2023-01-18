import { Bookmark, Google, LocationCity, Mail, Phone, WhatsApp } from "@mui/icons-material";
import { Box, Container, styled, Typography } from "@mui/material";
import PublicLayout from "components/layouts/PublicLayout";
import Ratings from "components/Ratings";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useGetDirectoryQuery } from "services/public.service";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Directory } from "types/directory";

interface BannerProps {
  directory?: Directory;
}

const BannerInfo = ({ directory }: BannerProps) => {
  const diffTime = Math.abs(new Date().getTime() - new Date(directory?.createdAt || 0).getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <Box
      sx={{
        color: "neutral.100",
        position: "absolute",
        top: 15,
        left: 15,
        zIndex: 10,
        textShadow: "1px 1px 3px black",
      }}
    >
      <Typography variant="h4">{directory?.storeName}</Typography>
      <Ratings rating={directory?.averageRating} size="medium" />
      <Typography sx={{ pt: 2 }}>
        <LocationCity /> {directory?.address}, {directory?.city}, {directory?.state},{" "}
        {directory?.pincode}
      </Typography>
      <Typography>
        <Bookmark /> {directory?.category?.join(", ")}
      </Typography>
      <Typography>Added: {diffDays} days ago</Typography>
    </Box>
  );
};

const StyledButton = styled(Box)(({ theme }) => ({
  backgroundColor: "primary.main",
  transition: "all 0.2s linear",
  color: "neutral.100",
  borderRadius: "50%",
  boxShadow: "1px 2px 4px black",
}));

const BannerButtons = ({ directory }: BannerProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 20,
        left: 10,
        zIndex: 10,
        display: "flex",
      }}
    >
      <StyledButton>
        <a
          target="_blank"
          rel="noreferrer"
          href={`http://maps.google.com/maps?z=12&t=m&q=loc:${directory?.location?.lat}+${directory?.location?.lng}`}
        >
          <Google />
        </a>
      </StyledButton>
      <StyledButton>
        <a href={`tel:${directory?.number}`}>
          <Phone />
        </a>
      </StyledButton>
      <StyledButton>
        <a href={`mailto:${directory?.email}`}>
          <Mail />
        </a>
      </StyledButton>
      <StyledButton>
        <a href={`https://api.whatsapp.com/send?phone=${directory?.number}`}>
          <WhatsApp />
        </a>
      </StyledButton>
    </Box>
  );
};

const StyledImg = styled("img")(({ theme }) => ({
  backgroundColor: "black",
  width: "100%",
  display: "block",
  objectFit: "cover",
  height: "100%",
  borderRadius: "20px",
  opacity: 0.75,
  boxShadow: "0px 3px 6px rgba(0,0,0,0.5)",
}));

const StyledSwiper = styled(Swiper)();

export default function DirectoryPage() {
  const router = useRouter();

  const { data, isLoading, isError, error } = useGetDirectoryQuery(
    router.query.username as string,
    {
      skip: !router.query.username,
    }
  );

  return (
    <Container>
      <Head>
        <title>{data?.data?.directory?.storeName} | Petohub</title>
      </Head>
      <StyledSwiper
        loop
        autoplay={{ delay: 5000 }}
        slidesPerView={"auto"}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, dynamicBullets: true }}
        sx={{ py: 4 }}
      >
        {data?.data?.directory?.directoryImages &&
        data?.data?.directory?.directoryImages?.length > 0 ? (
          data?.data?.directory?.directoryImages?.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  borderRadius: "20px",
                  backgroundColor: "black",
                  height: "400px",
                }}
              >
                <BannerInfo directory={data?.data?.directory} />
                <StyledImg
                  src={image}
                  alt={`Directory profile for ${data?.data?.directory?.storeName}`}
                />
                <BannerButtons directory={data?.data?.directory} />
              </Box>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                position: "relative",
                borderRadius: "20px",
                backgroundColor: "black",
                height: "400px",
              }}
            >
              <BannerInfo directory={data?.data?.directory} />
              <StyledImg
                src={"/assets/placeholders/store.png"}
                alt={`Directory profile for ${data?.data?.directory?.storeName}`}
              />
              <BannerButtons directory={data?.data?.directory} />
            </Box>
          </SwiperSlide>
        )}
      </StyledSwiper>
    </Container>
  );
}

DirectoryPage.getLayout = (page: ReactElement) => <PublicLayout>{page}</PublicLayout>;
