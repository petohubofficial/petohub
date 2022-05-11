import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";

interface CopyFieldProps {
  text: string;
  truncate?: number | boolean;
  propagate?: boolean;
  fontWeight?: any;
  [key: string]: any;
}

const CopyField: React.FC<CopyFieldProps> = (props) => {
  let { text, truncate = 12, propagate, fontWeight, ...other } = props;
  if (text === "") return <></>;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width={!truncate ? "100%" : 170}
      {...other}
    >
      <Typography display="inline" fontSize="inherit" fontWeight={fontWeight} sx={{ mr: 1 }}>
        {truncate !== false && text.length > truncate
          ? text.substring(0, truncate as number) + "..."
          : text}
      </Typography>
      <Button
        sx={{ cursor: "pointer", m: 0, p: 1, minWidth: 0 }}
        color="primary"
        variant="outlined"
        onClick={(e: React.MouseEvent) => {
          if (!propagate) e.stopPropagation();
          navigator.clipboard.writeText(text);
          toast.success(`Copied ${text}`);
        }}
      >
        <ContentCopyIcon fontSize="small" />
      </Button>
    </Box>
  );
};

export default CopyField;
