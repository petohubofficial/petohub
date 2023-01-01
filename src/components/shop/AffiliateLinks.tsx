import { Box, Paper, PaperProps, Typography } from "@mui/material";
import Image from "next/image";

interface AffiliateLinksProps extends PaperProps {
  icon: string;
  price: number;
}

const AffiliateLinks = ({ icon, price, ...other }: AffiliateLinksProps) => {
  return (
    <Paper elevation={10} {...other}>
      <Box
        sx={{ px: 2, pt: 1 }}
        display="flex"
        width="100%"
        justifyContent="space-around"
        alignItems="center"
      >
        <Image height="40" width="100" src={icon} alt="affiliate icon" />
        <Typography fontWeight="600" fontSize={20} sx={{ mb: 1 }}>
          {price === -1 ? "N/A" : `₹${price}`}
        </Typography>
      </Box>
    </Paper>
  );
};
export default AffiliateLinks;
