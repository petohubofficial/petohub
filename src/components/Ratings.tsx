import { Star, StarHalf } from "@mui/icons-material";
import { Box, BoxProps } from "@mui/material";
import { darkTheme } from "theme/dark";
import { lightTheme } from "theme/light";
import convertStars from "utils/convertStars";

interface RatingsProps extends BoxProps {
  rating?: number | undefined;
  size?: "small" | "inherit" | "large" | "medium" | undefined;
  theme?: "light" | "dark";
}

const Ratings = ({ rating, size, theme, ...props }: RatingsProps) => {
  const array = convertStars(rating);
  return (
    <Box {...props}>
      {array.map((val, index) => (
        <Box key={index} style={{ display: "inline" }}>
          {val === "FULL" ? (
            <Star
              sx={{ color: (theme === "dark" ? darkTheme : lightTheme).palette?.text?.primary }}
              fontSize={size}
            />
          ) : val === "HALF" ? (
            <StarHalf
              sx={{ color: (theme === "dark" ? darkTheme : lightTheme).palette?.text?.primary }}
              fontSize={size}
            />
          ) : (
            <Star
              sx={{ color: (theme === "dark" ? darkTheme : lightTheme).palette?.text?.secondary }}
              fontSize={size}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Ratings;
