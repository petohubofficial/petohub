import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import { useAuth } from "hooks/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { VerifyResponse } from "types/auth";

const EmailVerification = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [response, setResponse] = useState<VerifyResponse>();

  const { verify } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (router.query.token) {
      const token = router.query.token as string;
      setSubmitting(true);
      if (token)
        verify(token).then((res) => {
          setSubmitting(false);
          setResponse(res);
        });
    } else setResponse({ success: false, error: "Invalid token" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.token]);

  return (
    <Card sx={{ width: 500, boxShadow: 12, my: 1 }}>
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Link href="/" passHref>
            <Button startIcon={<ArrowBack />}>Back to site</Button>
          </Link>
        </Box>
        <Container>
          <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center">
            <Typography variant="h5" textAlign="center">
              Welcome to Petohub
            </Typography>
            <Typography variant="body2" textAlign="center" color="text.secondary">
              Verify your email to unlock your account
            </Typography>
            <Box sx={{ my: 2 }}>
              {submitting ? (
                <Typography variant="h6">Verifying your account...</Typography>
              ) : response?.success ? (
                <Box textAlign="center">
                  <Typography variant="h6" color="success.dark">
                    {response?.data}
                  </Typography>
                  <Box sx={{ mt: 1 }} width="100%">
                    <Typography variant="body2" textAlign="center" color="text.secondary">
                      You will need to
                      <Link href="/login" passHref>
                        <Typography
                          component="a"
                          fontWeight="bold"
                          fontSize={14}
                          color="primary.main"
                          sx={{ mx: 0.5 }}
                        >
                          Login
                        </Typography>
                      </Link>
                      again to continue
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box textAlign="center">
                  <Typography variant="h6" color="error.dark">
                    {response?.error || "Something went wrong"}
                  </Typography>
                  <Box sx={{ mt: 1 }} width="100%">
                    <Typography variant="body2" textAlign="center" color="text.secondary">
                      Click
                      <Link href="/" passHref>
                        <Typography
                          component="a"
                          fontWeight="bold"
                          fontSize={14}
                          color="primary.main"
                          sx={{ mx: 0.5 }}
                        >
                          here
                        </Typography>
                      </Link>
                      to go back to the site
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </CardContent>
    </Card>
  );
};

export default EmailVerification;
