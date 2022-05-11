import {
  ArrowBack,
  ArrowLeftOutlined,
  ArrowRightAltOutlined,
  Handshake,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Divider,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useAuth } from "hooks/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { MouseEventHandler, SyntheticEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useGetCategoriesQuery } from "services/public.service";
import { Category, CategoryType } from "types/category";
import { User } from "types/user";
import * as Yup from "yup";
import states from "data/states.json";
import { MemberRegisterRequest } from "types/auth";

const FirstStep = ({ next }: { next: (values: any) => void }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => next(values),
  });

  return (
    <>
      <Box component="form" onSubmit={formik.handleSubmit} width="100%">
        <Box sx={{ mt: 3 }}>
          <Typography fontSize={15} fontWeight={600} sx={{ my: 1 }}>
            Your Personal Name
          </Typography>
          <TextField
            autoFocus
            fullWidth
            size="small"
            placeholder="Your name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={Boolean(formik.touched.name && formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography fontSize={15} fontWeight={600} sx={{ my: 1 }}>
            Your Business Email
          </Typography>
          <TextField
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
          fullWidth
          variant="contained"
          type="submit"
          endIcon={<ArrowRightAltOutlined />}
        >
          Next
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
    </>
  );
};

const SecondStep = ({
  next,
  prev,
  submitting,
}: {
  next: (values: Partial<MemberRegisterRequest>) => void;
  prev: () => void;
  submitting: boolean;
}) => {
  const { data, isLoading } = useGetCategoriesQuery();

  const formik = useFormik({
    initialValues: {
      storeName: "",
      category: [] as string[],
      number: "",
      address: "",
      state: "Delhi",
      pincode: "",
      role: "Client" as "Client",
    },
    validationSchema: Yup.object({
      storeName: Yup.string().required("Required"),
      category: Yup.array().min(1, "Required").required("Required"),
      number: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      pincode: Yup.string().required("Required"),
    }),
    onSubmit: (values) => next(values),
  });

  return (
    <Box component="form" noValidate onSubmit={formik.handleSubmit} width="100%">
      <Box sx={{ mt: 3 }}>
        <Typography fontSize={15} fontWeight={600} sx={{ my: 1 }}>
          Your Business Name
        </Typography>
        <TextField
          autoFocus
          fullWidth
          size="small"
          placeholder="Your business name"
          name="storeName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.storeName}
          error={Boolean(formik.touched.storeName && formik.errors.storeName)}
          helperText={formik.touched.storeName && formik.errors.storeName}
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography fontSize={15} fontWeight={600} sx={{ my: 1 }}>
          Your Business Categorisation
        </Typography>
        {isLoading ? (
          <Box display="flex" gap={2}>
            <CircularProgress size={20} />
            <Typography>Loading categories...</Typography>
          </Box>
        ) : (
          <Autocomplete
            multiple
            id="categories"
            options={
              data?.categories
                ?.filter((category) => category.type === CategoryType.PRODUCT)
                ?.map((category) => category.name) || []
            }
            onChange={(event: SyntheticEvent<Element, Event>, value: string[]) => {
              formik.setFieldValue("category", value);
            }}
            value={formik.values.category}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Categories"
                size="small"
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.category && formik.errors.category)}
                helperText={formik.touched.category && formik.errors.category}
              />
            )}
          />
        )}
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography fontSize={15} fontWeight={600} sx={{ my: 1 }}>
          Your Phone Number
        </Typography>
        <TextField
          fullWidth
          size="small"
          placeholder="9876543210"
          name="number"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
          error={Boolean(formik.touched.number && formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography fontSize={15} fontWeight={600} sx={{ my: 1 }}>
          Your Address
        </Typography>
        <TextField
          fullWidth
          size="small"
          placeholder="Flat no. - Block - Locality"
          name="address"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          error={Boolean(formik.touched.address && formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
      </Box>
      <Box sx={{ mt: 2 }} display="flex" gap={2} flexDirection={{ xs: "column", sm: "row" }}>
        <Box width="100%">
          <Typography fontSize={15} fontWeight={600} sx={{ my: 1 }}>
            State
          </Typography>
          <TextField
            fullWidth
            select
            size="small"
            name="state"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.state}
            error={Boolean(formik.touched.state && formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box width="100%">
          <Typography fontSize={15} fontWeight={600} sx={{ my: 1 }}>
            Pincode
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="1100XX"
            name="pincode"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pincode}
            error={Boolean(formik.touched.pincode && formik.errors.pincode)}
            helperText={formik.touched.pincode && formik.errors.pincode}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 2 }} display="flex" gap={2} flexDirection={{ xs: "column", sm: "row" }}>
        <Button fullWidth onClick={prev} startIcon={<ArrowLeftOutlined />}>
          Previous
        </Button>
        <Button fullWidth variant="contained" type="submit" disabled={submitting}>
          {submitting ? "Signing up..." : "Sign up"}
        </Button>
      </Box>
    </Box>
  );
};

const MemberSignup = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const [step, setStep] = useState<1 | 2>(1);
  const [data, setData] = useState<Partial<MemberRegisterRequest>>({});

  const { register } = useAuth();
  const router = useRouter();

  const handleNext = (values: Partial<MemberRegisterRequest>) => {
    setStep(2);
    setData((prev) => ({ ...prev, ...values }));
  };

  const handleSubmit = (values: Partial<MemberRegisterRequest>) => {
    const clientRegisterRequest = { ...data, ...values };
    setSubmitting(true);
    register(clientRegisterRequest as MemberRegisterRequest).then((res) => {
      setSubmitting(false);
      if (res.success) {
        toast.success(res.data as string);
        router.push("/");
      }
    });
  };

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
                Become a member by signing up below.
              </Typography>
            </Box>
            {step === 1 ? (
              <FirstStep next={handleNext} />
            ) : (
              <SecondStep next={handleSubmit} prev={() => setStep(1)} submitting={submitting} />
            )}
          </Box>
        </Container>
      </CardContent>
    </Card>
  );
};

export default MemberSignup;
