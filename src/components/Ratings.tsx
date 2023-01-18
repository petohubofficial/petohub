import { Star, StarHalf } from "@mui/icons-material";
import { Box, BoxProps } from "@mui/material";
import convertStars from "utils/convertStars";

interface RatingsProps extends BoxProps {
  rating?: number | undefined;
  size?: "small" | "inherit" | "large" | "medium" | undefined;
}

const Ratings = ({ rating, size, ...props }: RatingsProps) => {
  const array = convertStars(rating);
  return (
    <Box {...props}>
      {array.map((val, index) => (
        <Box key={index} style={{ display: "inline" }}>
          {val === "FULL" ? (
            <Star sx={{ color: "text.primary" }} fontSize={size} />
          ) : val === "HALF" ? (
            <StarHalf sx={{ color: "text.primary" }} fontSize={size} />
          ) : (
            <Star sx={{ color: "text.secondary" }} fontSize={size} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Ratings;
