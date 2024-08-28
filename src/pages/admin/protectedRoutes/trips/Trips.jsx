import { useState } from "react";
import "./trips.scss";

//Assets
import trip from "@/assets/trip.png";

//Router
import { useNavigate } from "react-router-dom";

//Components
import AdminNavbar from "@/components/admin/adminNavbar/AdminNavbar";

//Mui
import {
  Pagination,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

// redux
import { useAdminGetAllBookingQuery } from "@/redux/slice/admin/api/adminApiSlice";
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

//static data
const plans = ["standard", "delux", "premium"];
const packages = ["friends", "family", "couples"];

const Trips = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);
  const [destination, setDestination] = useState("bali");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedPackage, setSelectedPackages] = useState("");

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { data: allBookingList, isLoading: allBookingIsLoading } =
    useAdminGetAllBookingQuery({
      destination,
      selectedPlan,
      selectedPackage,
      pageNum: page,
      pageSize: rowsPerPage,
    });

  const handleTabs = (event, newValue) => {
    setValue(newValue);
    if (newValue == 0) {
      setDestination("bali");
    } else {
      setDestination("phuket");
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(1);
  };
  return (
    <section className="trips-container">
      <AdminNavbar title="Trips" image={trip} />

      {allBookingIsLoading ? (
        <div className="loader">
          <CircularProgressBar />
        </div>
      ) : (
        <section className="trips">
          <ThemeProvider theme={theme}>
            <div className="list-data-headings">
              <Tabs
                value={value}
                onChange={handleTabs}
                className="mui-tabs-container"
              >
                <Tab label="Bali" className="each-tab small-text-700" />
                <Tab label="Phuket" className="each-tab small-text-700" />
              </Tabs>

              <div className="filter-popUp">
                <select onChange={(e) => setSelectedPackages(e.target.value)}>
                  <option selected disabled>
                    Select Package
                  </option>
                  {packages.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
                <select onChange={(e) => setSelectedPlan(e.target.value)}>
                  <option selected disabled>
                    Select Plan
                  </option>
                  {plans.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
          </ThemeProvider>

          {!allBookingList?.data?.data?.length > 0 ? (
            <div className="no-data">
              <h1>No data available!</h1>
            </div>
          ) : (
            <TableContainer component={Paper} className="table">
              <Table aria-label="simple table">
                <TableHead className="table-head">
                  <TableRow>
                    <TableCell align="center">Sl.No</TableCell>
                    <TableCell align="center">Destination</TableCell>
                    <TableCell align="center">Plan</TableCell>
                    <TableCell align="center">Package</TableCell>
                    <TableCell align="center">Total Amount</TableCell>
                    <TableCell align="center">Paid Amount</TableCell>
                    <TableCell align="center">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="table-body">
                  {allBookingList?.data?.data?.map((row, index) => (
                    <TableRow
                      key={row.id}
                      onClick={() => navigate(`/admin/trip/${row._id}`)}
                    >
                      <TableCell align="center">
                        {index + rowsPerPage * page - rowsPerPage + 1}
                      </TableCell>
                      <TableCell align="center">{row?.destination}</TableCell>
                      <TableCell align="center">{row?.plan}</TableCell>
                      <TableCell align="center">{row?.package}</TableCell>
                      <TableCell align="center">{row?.total_amount}</TableCell>
                      <TableCell align="center">{row?.paid_amount}</TableCell>
                      <TableCell align="center">{row?.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={allBookingList?.data?.totalResultsCount}
                rowsPerPage={rowsPerPage}
                page={page - 1}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                className="table-pagination"
              />
            </TableContainer>
          )}
        </section>
      )}
    </section>
  );
};

export default Trips;
