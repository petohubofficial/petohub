import { FavoriteBorder } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDirectory } from "hooks/directory";
import Link from "next/link";
import { FC } from "react";
import { useGetDirectoriesQuery } from "services/public.service";

const Directories: FC = () => {
  const { appliedFilters } = useDirectory();
  const { data: directoriesResponse, isLoading } = useGetDirectoriesQuery(appliedFilters);

  return (
    <Box>
      {isLoading ? (
        <Box width="100%" display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <Grid container>
          {directoriesResponse?.data?.results?.map((directory) => (
            <Grid item key={directory._id.toString()} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ m: 1 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={directory.directoryImages[0]}
                  alt={directory.storeName}
                />
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      component={Link}
                      href={`/directories/${directory.username}`}
                      variant="body1"
                      fontWeight={600}
                    >
                      {directory.storeName}
                    </Typography>
                    <Tooltip title="Add to favorites" arrow>
                      <FavoriteBorder color="primary" sx={{ cursor: "pointer" }} />
                    </Tooltip>
                  </Box>
                  <Typography>
                    Address:{" "}
                    <Typography component="span" color="primary.main" fontWeight={600}>
                      {directory.address}
                    </Typography>
                  </Typography>
                  <Typography>
                    Category:{" "}
                    <Typography component="span" color="primary.main" fontWeight={600}>
                      {directory.category.join(", ")}
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Directories;
