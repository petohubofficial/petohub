import { ArrowBack, Handshake, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useAuth } from "hooks/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as Yup from "yup";

const Login = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { login } = useAuth();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setSubmitting(true);
      login(values).then((res) => {
        setSubmitting(false);
        if (res.success) router.push("/");
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
                Login with email and password
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
              <Box sx={{ mt: 3 }}>
                <Typography fontSize={15} fontWeight={600} sx={{ my: 1 }}>
                  Password
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="********"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                    endAdornment: showPassword ? (
                      <VisibilityOff
                        color="action"
                        sx={{ cursor: "pointer" }}
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <Visibility
                        color="action"
                        sx={{ cursor: "pointer" }}
                        onClick={() => setShowPassword(true)}
                      />
                    ),
                  }}
                />
                <Typography variant="body2" textAlign="right" color="text.secondary" sx={{ pt: 1 }}>
                  <Link href="/forgotpassword" passHref>
                    <Typography
                      component="a"
                      fontWeight="bold"
                      fontSize={14}
                      color="primary.main"
                      sx={{ ml: 1 }}
                    >
                      Forgot password?
                    </Typography>
                  </Link>
                </Typography>
              </Box>
              <Button
                sx={{ mt: 3 }}
                disabled={submitting}
                fullWidth
                variant="contained"
                type="submit"
              >
                Login
              </Button>
            </Box>
            <Box sx={{ mt: 3 }} width="100%">
              <Typography variant="body2" textAlign="center" color="text.secondary">
                Don&apos;t have an account?
                <Link href="/signup" passHref>
                  <Typography
                    component="a"
                    fontWeight="bold"
                    fontSize={14}
                    color="primary.main"
                    sx={{ ml: 1 }}
                  >
                    Sign Up
                  </Typography>
                </Link>
              </Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center">
              <Typography variant="h5" textAlign="center">
                Want to sell at Petohub?
              </Typography>
              <Typography variant="body2" textAlign="center" color="text.secondary">
                Become a member by clicking here
              </Typography>
              <Button startIcon={<Handshake />} onClick={() => router.push("/member")}>
                Register as member
              </Button>
            </Box>
          </Box>
        </Container>
      </CardContent>
    </Card>
  );
};

export default Login;
