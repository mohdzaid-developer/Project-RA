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
  Tabs,
  Tab,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// Redux
import { useAdminGetAllUsersQuery } from "@/redux/slice/admin/api/adminApiSlice";
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

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

  const handleTabs = (event, newValue) => {
    setValue(newValue);
    if (newValue == 0) {
      setIsBooked(true);
    } else {
      setIsBooked(false);
    }
  };

  console.log(allUserList?.data);
  return (
    <section className="users-container">
      <AdminNavbar title="Users" image={user} />

      {allUserIsLoading ? (
        <div className="loader">
          <CircularProgressBar />
        </div>
      ) : (
        <section className="users">
          <ThemeProvider theme={theme}>
            <div className="list-data-headings">
              <Tabs
                value={value}
                onChange={handleTabs}
                className="mui-tabs-container"
              >
                <Tab label="Booked" className="each-tab small-text-700" />
                <Tab label="Sign Up" className="each-tab small-text-700" />
              </Tabs>
            </div>
          </ThemeProvider>
          {!allUserList?.data.length > 0 ? (
            <div className="no-data">
              <h1>No data available!</h1>
            </div>
          ) : (
            <TableContainer component={Paper} className="table">
              <Table aria-label="simple table">
                <TableHead className="table-head">
                  <TableRow>
                    <TableCell align="center">S.No</TableCell>
                    <TableCell align="center">Profile</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">email</TableCell>
                    <TableCell align="center">Phone Number</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="table-body">
                  {allUserList?.data.map((row, index) => (
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
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </section>
      )}
    </section>
  );
};

export default Users;
