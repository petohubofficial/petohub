import { ArrowBack, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Container, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useAuth } from "hooks/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { VerifyResponse } from "types/auth";
import * as Yup from "yup";

const ResetPassword = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [response, setResponse] = useState<VerifyResponse>();

  const { resetPassword } = useAuth();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values, helpers) => {
      const token = router.query.token as string;
      setSubmitting(true);
      resetPassword(token, values).then((res) => {
        setSubmitting(false);
        setResponse(res);
        helpers.resetForm();
      });
    },
  });

  useEffect(() => {
    if (!router.query.token) setResponse({ success: false, error: "Invalid token" });
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
              Enter your new password
            </Typography>
            {!response && (
              <Box component="form" onSubmit={formik.handleSubmit} width="100%">
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
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography fontSize={15} fontWeight={600} sx={{ my: 1 }}>
                    Confirm Password
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="********"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    InputProps={{
                      endAdornment: showConfirmPassword ? (
                        <VisibilityOff
                          color="action"
                          sx={{ cursor: "pointer" }}
                          onClick={() => setShowConfirmPassword(false)}
                        />
                      ) : (
                        <Visibility
                          color="action"
                          sx={{ cursor: "pointer" }}
                          onClick={() => setShowConfirmPassword(true)}
                        />
                      ),
                    }}
                  />
                </Box>
                <Button
                  sx={{ mt: 3 }}
                  disabled={submitting}
                  fullWidth
                  variant="contained"
                  type="submit"
                >
                  Reset password
                </Button>
              </Box>
            )}
            <Box sx={{ my: 2 }}>
              {submitting && <Typography variant="h6">Resetting your password...</Typography>}
              {response && !response.success && (
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
              {response && response.success && (
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
              )}
            </Box>
          </Box>
        </Container>
      </CardContent>
    </Card>
  );
};

export default ResetPassword;
