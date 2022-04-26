import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { FileDropzone } from "components/FileDropzone";
import { useFormik } from "formik";
import { useAuth } from "hooks/auth";
import React from "react";
import * as Yup from "yup";

export default function Profile() {
  const { user, updateProfile } = useAuth();

  const [changeAvatar, setChangeAvatar] = React.useState<boolean>(false);
  const [isUploading, setIsUploading] = React.useState<boolean>(false);
  const [files, setFiles] = React.useState<File[]>([]);

  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
    }),
    onSubmit: async (values, helpers) => {
      const formData = new FormData();
      formData.append("name", values.name);
      helpers.setSubmitting(true);
      await updateProfile(formData);
      helpers.setSubmitting(false);
    },
  });

  const handleDrop = (newFiles: File[]): void => {
    setFiles(newFiles);
  };

  const handleRemove = (file: File): void => {
    setFiles(files.filter((f) => f !== file));
  };

  const handleRemoveAll = (): void => {
    setFiles([]);
  };

  const handleProfileUpload = async () => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append("profileImage", files[0]);
    await updateProfile(formData);
    setIsUploading(false);
  };

  return (
    <Card>
      <CardContent>
        <Box display="flex" gap={3} flexDirection={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Typography variant="h5">Basic Details</Typography>
          </Box>
          <Box flex={1}>
            <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
              <Avatar src={user?.profileImage} sx={{ bgcolor: "transparent" }} />
              <Button size="small" color="primary" onClick={() => setChangeAvatar(!changeAvatar)}>
                {changeAvatar ? "Discard" : "Change"}
              </Button>
            </Box>
            {changeAvatar && (
              <Box sx={{ mb: 3 }}>
                <FileDropzone
                  files={files}
                  maxFiles={1}
                  onDrop={handleDrop}
                  onRemove={handleRemove}
                  onRemoveAll={handleRemoveAll}
                  onUpload={handleProfileUpload}
                  isUploading={isUploading}
                />
              </Box>
            )}
            <form onSubmit={formik.handleSubmit}>
              <Box display="flex" alignItems="start" gap={1}>
                <TextField
                  label="Name"
                  fullWidth
                  size="small"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.name && formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <Button size="small" color="primary" type="submit" disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? <CircularProgress size={16} /> : "Save"}
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
