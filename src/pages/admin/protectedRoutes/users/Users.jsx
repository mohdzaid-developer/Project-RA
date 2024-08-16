import { useState } from "react";
import "./users.scss";

//Assets
import user from "@/assets/user.png";

//Components
import AdminNavbar from "@/components/admin/adminNavbar/AdminNavbar";

//Mui
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Pagination,
  Typography,
  Tabs,
  Tab,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// Redux
import { useAdminGetAllUsersQuery } from "@/redux/slice/admin/api/adminApiSlice";

// MUI Restyling
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9F43",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "Montserrat",
        },
      },
    },
  },
});

const Users = () => {
  const [value, setValue] = useState(0);
  const [isBooked, setIsBooked] = useState(true);
  const { data: allUserList, isLoading: allUserIsLoading } =
    useAdminGetAllUsersQuery({ isBooked });
  console.log(allUserList);
  const handleTabs = (event, newValue) => {
    setValue(newValue);
    if (newValue == 0) {
      setIsBooked(true);
    } else {
      setIsBooked(false);
    }
  };
  return (
    <section className="users-container">
      <AdminNavbar title="Trips" image={user} />

      <section className="payments">
        <ThemeProvider theme={theme}>
          <div className="list-data-headings">
            <Tabs
              value={value}
              onChange={handleTabs}
              className="mui-tabs-container"
            >
              <Tab label="Booked" className="each-tab small-text-700" />
              <Tab label="signUp" className="each-tab small-text-700" />
            </Tabs>
          </div>
        </ThemeProvider>

        <TableContainer component={Paper} className="table">
          <Table aria-label="simple table">
            <TableHead className="table-head">
              <TableRow>
                <TableCell align="center">Sl.No</TableCell>
                <TableCell align="center">Profile</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">email</TableCell>
                <TableCell align="center">Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-body">
              {allUserIsLoading ? (
                <h3>Loading...</h3>
              ) : allUserList?.data?.length > 0 ? (
                allUserList?.data?.map((row, index) => (
                  <TableRow
                    key={row.id}
                    onClick={() => navigate(`/admin/trip/${row.order_id}`)}
                  >
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">
                      <img
                        src={row?.profilePic}
                        alt="profile"
                        className="profile-pic"
                      />
                    </TableCell>
                    <TableCell align="center">{row?.fullName}</TableCell>
                    <TableCell align="center">{row?.email}</TableCell>
                    <TableCell align="center">{row?.phone}</TableCell>
                  </TableRow>
                ))
              ) : (
                <h3>No Data Found</h3>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          count={5}
          size="small"
          color="standard"
          className="pagination"
        />
      </section>
    </section>
  );
};

export default Users;
