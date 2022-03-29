import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Container, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useAuth } from "hooks/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";

const ForgotPassword = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const { forgotPassword } = useAuth();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      setSubmitting(true);
      forgotPassword(values).then((res) => {
        setSubmitting(false);
        if (res.success) toast.success(res.data as string);
      });
    },
  });

  return (
    <Card sx={{ width: 500, boxShadow: 12, my: 1 }}>
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Link href="/" passHref>
            <Button startIcon={<ArrowBack />}>Back to site</Button>
          </Link>
        </Box>
        <Container>
          <Box>
            <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center">
              <Typography variant="h5" textAlign="center">
                Welcome to Petohub
              </Typography>
              <Typography variant="body2" textAlign="center" color="text.secondary">
                Reset your password here
              </Typography>
            </Box>
            <Box component="form" onSubmit={formik.handleSubmit} width="100%">
              <Box sx={{ mt: 3 }}>
                <Typography fontSize={15} fontWeight={600} sx={{ my: 1 }}>
                  Email address
                </Typography>
                <TextField
                  autoFocus
                  fullWidth
                  size="small"
                  placeholder="example@company.com"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Box>
              <Button
                sx={{ mt: 3 }}
                disabled={submitting}
                fullWidth
                variant="contained"
                type="submit"
              >
                Send email
              </Button>
            </Box>
            <Box sx={{ mt: 3 }} width="100%">
              <Typography variant="body2" textAlign="center" color="text.secondary">
                Already have an account?
                <Link href="/login" passHref>
                  <Typography
                    component="a"
                    fontWeight="bold"
                    fontSize={14}
                    color="primary.main"
                    sx={{ ml: 1 }}
                  >
                    Login
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </CardContent>
    </Card>
  );
};

export default ForgotPassword;
