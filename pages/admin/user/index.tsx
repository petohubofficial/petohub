import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupIcon from "@mui/icons-material/Group";
import {
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import AuthGuard from "components/auth/AuthGuard";
import CopyField from "components/CopyField";
import PublicLayout from "components/layouts/PublicLayout";
import { Scrollbar } from "components/Scrollbar";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";
import { useGetAdminUsersQuery, useVerifyUserMutation } from "services/admin.service";
import { GetUsersFilters, Role, User } from "types/user";
import convertDate from "utils/convertDate";
import placeholder, { Placeholder } from "utils/placeholder";

const Users = () => {
  const [filters, setFilters] = React.useState<GetUsersFilters>({
    limit: 10,
    page: 1,
  });
  const { data, isFetching } = useGetAdminUsersQuery(filters);

  const router = useRouter();
  React.useEffect(() => {
    router.replace({ query: { ...filters } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 3 }}>
        <Typography variant="h3">
          <GroupIcon fontSize="large" /> Users Dashboard
        </Typography>
        <Scrollbar>
          <Table sx={{ my: 3 }}>
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
              {isFetching
                ? Array(10)
                    .fill(null)
                    .map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="circular" width={25} height={25} />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="circular" width={25} height={25} />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                      </TableRow>
                    ))
                : data?.data?.results?.map((user, index) => (
                    <UserRow
                      key={user._id.toString()}
                      user={user}
                      index={(filters.page - 1) * filters.limit + index + 1}
                    />
                  ))}
            </TableBody>
          </Table>
        </Scrollbar>
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

const UserRow = (props: { user: User; index: number }) => {
  const { user, index } = props;
  const [verifyOpen, setVerifyOpen] = React.useState<boolean>(false);

  const [verifyUser, { isLoading }] = useVerifyUserMutation();

  return (
    <TableRow>
      <TableCell>{index}</TableCell>
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
          <Tooltip title="Verified">
            <CheckCircleIcon color="success" />
          </Tooltip>
        ) : (
          <>
            <Dialog fullWidth open={verifyOpen} onClose={() => setVerifyOpen(false)}>
              <Box sx={{ p: 3 }}>
                <Typography textAlign="center">
                  Are you sure you want to verify{" "}
                  <Typography component="span" fontWeight={600} color="primary.main">
                    {user.email}
                  </Typography>
                  ?
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 2 }}>
                  <Button
                    size="small"
                    startIcon={<CancelIcon />}
                    color="error"
                    onClick={() => setVerifyOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<CheckCircleIcon />}
                    color="success"
                    disabled={isLoading}
                    onClick={async () => {
                      try {
                        const response = await verifyUser(user._id.toString()).unwrap();
                        if (response.success) toast.success("User verified successfully");
                      } catch (error: any) {
                        toast.error(error?.data?.error || "Something went wrong");
                      } finally {
                        setVerifyOpen(false);
                      }
                    }}
                  >
                    {isLoading ? "Verifying" : "Verify"}
                  </Button>
                </Box>
              </Box>
            </Dialog>
            <Tooltip title="Click to verify">
              <CancelIcon
                color="error"
                sx={{ cursor: "pointer" }}
                onClick={() => setVerifyOpen(true)}
              />
            </Tooltip>
          </>
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
  );
};

Users.getLayout = (page: React.ReactElement) => (
  <AuthGuard roles={[Role.ADMIN, Role.PRODUCT_ADMIN]}>
    <PublicLayout>{page}</PublicLayout>
  </AuthGuard>
);
export default Users;
