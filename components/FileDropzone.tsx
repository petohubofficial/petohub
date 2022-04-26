import { Cancel, FileCopy } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import type { FC } from "react";
import type { DropzoneOptions } from "react-dropzone";
import { useDropzone } from "react-dropzone";
import bytesToSize from "utils/bytesToSize";

interface FileDropzoneProps extends DropzoneOptions {
  files?: any[];
  isUploading?: boolean;
  onRemove?: (file: any) => void;
  onRemoveAll?: () => void;
  onUpload?: () => void;
}

export const FileDropzone: FC<FileDropzoneProps> = (props) => {
  const {
    accept,
    disabled,
    files = [],
    getFilesFromEvent,
    isUploading,
    maxFiles,
    maxSize,
    minSize,
    noClick,
    noDrag,
    noDragEventsBubbling,
    noKeyboard,
    onDrop,
    onDropAccepted,
    onDropRejected,
    onFileDialogCancel,
    onRemove,
    onRemoveAll,
    onUpload,
    preventDropOnDocument,
    ...other
  } = props;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    maxFiles,
    maxSize,
    minSize,
    onDrop,
  });

  return (
    <div {...other}>
      <Box
        sx={{
          alignItems: "center",
          border: 1,
          borderRadius: 1,
          borderStyle: "dashed",
          borderColor: "divider",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          outline: "none",
          p: 3,
          ...(isDragActive && {
            backgroundColor: "action.active",
            opacity: 0.5,
          }),
          "&:hover": {
            backgroundColor: "action.hover",
            cursor: "pointer",
            opacity: 0.5,
          },
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Box>
          <Typography variant="body1">
            {`Drop file${maxFiles && maxFiles === 1 ? "" : "s"}`}
            {" or "}
            <Link underline="always">browse</Link> through your machine
          </Typography>
        </Box>
      </Box>
      {files.length > 0 && (
        <Box sx={{ mt: 1 }}>
          <List>
            {files.map((file) => (
              <ListItem
                key={file.path}
                sx={{
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1,
                  "& + &": {
                    mt: 1,
                  },
                }}
              >
                <ListItemIcon>
                  <FileCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={file.name}
                  primaryTypographyProps={{
                    color: "textPrimary",
                    variant: "subtitle2",
                  }}
                  secondary={bytesToSize(file.size)}
                />
                <Tooltip title="Remove">
                  <IconButton edge="end" onClick={() => onRemove && onRemove(file)}>
                    <Cancel fontSize="small" />
                  </IconButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 2,
            }}
          >
            <Button onClick={onRemoveAll} size="small" type="button">
              Remove All
            </Button>
            <Button
              onClick={onUpload}
              size="small"
              sx={{ ml: 2 }}
              type="button"
              variant="contained"
              disabled={isUploading}
            >
              {isUploading ? <CircularProgress size={16} /> : "Upload"}
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
};
