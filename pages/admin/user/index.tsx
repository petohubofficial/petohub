import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupIcon from "@mui/icons-material/Group";
import {
  Avatar,
  Box,
  Container,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { AuthGuard } from "components/auth/AuthGuard";
import CopyField from "components/CopyField";
import PublicLayout from "components/layouts/PublicLayout";
import { Scrollbar } from "components/Scrollbar";
import { ReactElement, useState } from "react";
import { useGetAdminUsersQuery } from "services/admin.service";
import { GetUsersFilters, Role } from "types/user";
import convertDate from "utils/convertDate";
import placeholder, { Placeholder } from "utils/placeholder";

const Users = () => {
  const [filters, setFilters] = useState<GetUsersFilters>({
    limit: 10,
    page: 1,
  });
  const { data, isFetching } = useGetAdminUsersQuery(filters);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 2 }}>
        <Typography variant="h3">
          <GroupIcon fontSize="large" /> Users Dashboard
        </Typography>
        {isFetching ? (
          <Box sx={{ my: 2 }}>
            <Skeleton variant="rectangular" width="100%" height={42} animation={false} />
            <Skeleton variant="rectangular" width="100%" height={300} sx={{ my: 1 }} />
          </Box>
        ) : (
          <Scrollbar>
            <Table sx={{ my: 2 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ minWidth: 70 }}>S. No</TableCell>
                  <TableCell>User ID</TableCell>
                  <TableCell>Avatar</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>Verified</TableCell>
                  <TableCell sx={{ minWidth: 160 }}>Verified At</TableCell>
                  <TableCell sx={{ minWidth: 160 }}>Created At</TableCell>
                  <TableCell sx={{ minWidth: 160 }}>Updated At</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data?.results?.map((user, index) => (
                  <TableRow key={user._id.toString()}>
                    <TableCell>{(filters.page - 1) * filters.limit + index + 1}</TableCell>
                    <TableCell>
                      <CopyField text={user._id.toString()} />
                    </TableCell>
                    <TableCell>
                      <Avatar
                        src={user.profileImage || placeholder(Placeholder.USER)}
                        alt={`${user.name} profile`}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography>{user.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <CopyField text={user.email} truncate={false} />
                    </TableCell>
                    <TableCell>
                      <Typography>{user.role}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{user.number}</Typography>
                    </TableCell>
                    <TableCell>
                      {user.isVerified ? (
                        <CheckCircleIcon color="success" />
                      ) : (
                        <CancelIcon color="error" />
                      )}
                    </TableCell>
                    <TableCell>
                      <Typography>{convertDate(user.verifiedAt)}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{convertDate(user.createdAt)}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{convertDate(user.updatedAt)}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Scrollbar>
        )}
        {data?.data && data.data.total > 10 && (
          <TablePagination
            component="div"
            count={data?.data?.total}
            page={filters.page - 1}
            rowsPerPage={filters.limit}
            rowsPerPageOptions={[10, 20, 30]}
            onPageChange={(event: React.MouseEvent<HTMLButtonElement> | null, page: number): void =>
              setFilters({ ...filters, page: page + 1 })
            }
            onRowsPerPageChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              setFilters({ ...filters, limit: parseInt(event.target.value, 10) });
            }}
          />
        )}
      </Box>
    </Container>
  );
};

Users.getLayout = (page: ReactElement) => (
  <AuthGuard roles={[Role.ADMIN, Role.PRODUCT_ADMIN]}>
    <PublicLayout>{page}</PublicLayout>
  </AuthGuard>
);
export default Users;
