import {
  Bookmark,
  CheckCircle,
  Email,
  Google,
  LocationCity,
  Mail,
  Phone,
  Pin,
  WhatsApp,
} from "@mui/icons-material";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import PublicLayout from "components/layouts/PublicLayout";
import Ratings from "components/Ratings";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
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
        <LocationCity /> {directory?.address}, {directory?.state}, {directory?.pincode}
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

const InfoItem = ({ label, Icon, href = "" }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Icon />
      <Typography
        {...(href
          ? {
              component: Link,
              href,
            }
          : {})}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default function DirectoryPage() {
  const router = useRouter();

  const { data, isLoading, isError, error } = useGetDirectoryQuery(
    router.query.username as string,
    {
      skip: !router.query.username,
    }
  );

  return (
    <PublicLayout>
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
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, my: 2 }}>
          <Box flex={1}>
            <Typography variant="h4">Gallery</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", py: 2, gap: 2 }}>
              {data?.data?.directory?.gallery?.map((image, index) => (
                <Box width="30%" key={index}>
                  <a href={image}>
                    <img
                      src={image}
                      alt={`Gallery for ${data?.data?.directory?.storeName} #${index}`}
                      width="100%"
                    />
                  </a>
                </Box>
              ))}
            </Box>
          </Box>
          <Box flex={1}>
            <Typography variant="h4">Store Information</Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              {data?.data?.directory?.storeName}
            </Typography>
            <Stack gap={1} sx={{ my: 1 }}>
              <InfoItem
                Icon={Pin}
                label={`${data?.data?.directory?.address}, ${data?.data?.directory?.state}, ${data?.data?.directory?.pincode}`}
              />
              <InfoItem
                Icon={Email}
                label="Send inquiry by email"
                href={`mailto:${data?.data?.directory?.email}`}
              />
              <InfoItem
                Icon={Phone}
                label={data?.data?.directory?.number}
                href={`tel:${data?.data?.directory?.number}`}
              />
            </Stack>
            <Box sx={{ my: 2 }}>
              <Typography>Ratings: {data?.data?.directory?.averageRating} stars</Typography>
              <Ratings rating={data?.data?.directory?.averageRating} size="small" />
              <a href="#dir-reviews">View all reviews</a>
            </Box>
            <Typography sx={{ mb: 1 }}>Listed in the following categories:</Typography>
            {data?.data?.directory?.category?.map((category, index) => (
              <InfoItem key={index} Icon={Bookmark} label={category} />
            ))}
            {data?.data?.directory?.features?.length && (
              <Box sx={{ my: 2 }}>
                <Typography sx={{ mb: 1 }}>Features</Typography>
                {data?.data?.directory?.features?.map((feature, index) => (
                  <InfoItem key={index} Icon={CheckCircle} label={feature} />
                ))}
              </Box>
            )}
          </Box>
        </Box>
        {/* <Row className="pt-4">
          <Col md="6" sm="12">
            <div>
              <h3>Product Details</h3>
              <p>
                <strong>{directory.storeName}</strong> offers you the following products:
              </p>
              {directory.products?.length === 0 && <p>No products available at this moment.</p>}
              <ul>
                {directory.products?.map((product, index) => (
                  <li key={index}>{product}</li>
                ))}
              </ul>
            </div>
            <div className="pt-3">
              <h3>Service Details</h3>
              <p>
                <strong>{directory.storeName}</strong> offers you the following services:
              </p>
              {directory.services?.length === 0 && <p>No services available at this moment.</p>}
              <ul>
                {directory.services?.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md="6" sm="12">
            <div className="dir-inquiry-form p-3">
              <div>
                <h3>Send an inquiry to {directory.storeName}</h3>
              </div>
              <Formik
                initialValues={inquiryInitialValues}
                validationSchema={inquiryValidationSchema}
                onSubmit={(values) => {
                  const data = { ...values, directory: directory._id };
                  dispatch(addInquiry(data));
                }}
              >
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <fieldset disabled={success}>
                      <TextField name="name" label="Name*" placeholder="Enter your name here" />
                      <TextField name="number" label="Phone Number*" placeholder="9876543210" />
                      <TextField name="email" label="Email" placeholder="email@example.com" />
                      <TextField
                        name="message"
                        label="Your message*"
                        placeholder="Enter your detailed message here"
                        as="textarea"
                        rows={5}
                      />
                    </fieldset>
                    <Button
                      type="submit"
                      size="lg"
                      variant={success ? "success" : "primary"}
                      disabled={inquiryLoading || success}
                    >
                      {inquiryLoading ? "Sending" : success ? "Sent" : "Send"}
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
        {products.length > 0 && (
          <section className="dir-products py-4">
            <h3>Products showcase</h3>
            <Swiper
              slidesPerView={1}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination]}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="dir-products-swiper"
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <Product product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}
        {services.length > 0 && (
          <section className="dir-services py-4">
            <h3>Services showcase</h3>
            <Swiper
              slidesPerView={1}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination]}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="dir-services-swiper"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <Service service={service} key={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}
        <section id="dir-reviews" className="dir-reviews pt-3">
          <Tabs defaultActiveKey="read" className="mb-3">
            <Tab
              eventKey="write"
              title={
                <>
                  <FaPencilAlt className="mx-2" />
                  Write Review
                </>
              }
            >
              {isAuthenticated ? (
                existingReview ? (
                  <div>
                    <p>Your review on {directory.storeName}</p>
                    <Review review={existingReview} />
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => dispatch(removeReview(match.params.username))}
                    >
                      Delete Review
                    </Button>
                  </div>
                ) : (
                  <Formik
                    initialValues={reviewInitialValues}
                    validationSchema={reviewValidationSchema}
                    onSubmit={(values) =>
                      dispatch(reviewDirectory(values, match.params.username))
                    }
                  >
                    {({ handleSubmit }) => (
                      <Form>
                        <TextField
                          name="subject"
                          label="Subject"
                          placeholder="Enter review subject here"
                        />
                        <TextField
                          name="comment"
                          label="Comment"
                          as="textarea"
                          rows={3}
                          placeholder="Enter review comment here"
                        />
                        <SelectField name="rating" label="Rating" options={[1, 2, 3, 4, 5]} />

                        <div className="text-center">
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSubmit}
                            className="w-100"
                          >
                            Post review
                          </Button>
                          <Form.Text>
                            Your review will be posted publicly as {user.name}
                          </Form.Text>
                        </div>
                      </Form>
                    )}
                  </Formik>
                )
              ) : (
                <div className="px-1">
                  <p className="text-danger mb-0">
                    <FaExclamationTriangle /> You need to be logged in to write a review!
                  </p>
                  <Link to="/register">Sign up here</Link>
                  <br />
                  <Link to="/login">Already have an account? Login here</Link>
                </div>
              )}
            </Tab>
            <Tab
              eventKey="read"
              title={
                <>
                  <FaBookOpen className="mx-2" />
                  Read Reviews
                </>
              }
            >
              <>
                <ReviewGraph
                  ratings={directory.rating}
                  average={directory.averageRating}
                  total={directory.reviews?.length}
                />
                {directory.reviews?.map((review, index) => (
                  <Review key={index} review={review} />
                ))}
              </>
            </Tab>
          </Tabs>
        </section>
        <section className="dir-faq pt-4">
          <h3>Frequently asked questions</h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What are the timings of this store?</Accordion.Header>
              <Accordion.Body>
                {directory.timings?.map((timing, index) => {
                  let message = "";
                  if (timing.from === "00:00" && timing.to === "00:00")
                    message = "All Day (24 hours)";
                  else if (timing.from === "" && timing.to === "") message = "Closed";
                  else {
                    const from = tConvert(timing.from);
                    const to = tConvert(timing.to);
                    message = `${from} to ${to}`;
                  }
                  return (
                    <p key={index}>
                      {days[index]}: {message}
                    </p>
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
            {directory.faq?.map((qa, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{qa.question}</Accordion.Header>
                <Accordion.Body>{qa.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </section>
        <section className="dir-business-info py-3">
          <h1>Business Information</h1>
          <div>
            {parse(directory.description || "<p>No information available at the moment</p>")}
          </div>
        </section> */}
      </Container>
    </PublicLayout>
  );
}
