import "./myTrips.scss";
import { useState } from "react";

//Components
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

//Mui
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import { useUserGetTripsQuery } from "@/redux/slice/user/api/userApiSlice";

const MyTrips = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { data: tripDetails, isLoading: isTripLoading } = useUserGetTripsQuery({
    pageNum: page,
    pageSize: rowsPerPage,
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(1);
  };
  return (
    <div className="my-trips">
      <div className="hero">
        <h2>My Trips</h2>
      </div>

      <section className="trips">
        {isTripLoading ? (
          <div className="loader">
            <CircularProgressBar />
          </div>
        ) : (
          <TableContainer component={Paper} className="table">
            <Table aria-label="simple table">
              <TableHead className="table-head">
                <TableRow>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">Destination</TableCell>
                  <TableCell align="center">Package</TableCell>
                  <TableCell align="center">Plan</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="table-body">
                {tripDetails?.data?.data?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">
                      {index + rowsPerPage * page - rowsPerPage + 1}
                    </TableCell>
                    <TableCell align="center">{row.destination}</TableCell>
                    <TableCell align="center">{row.package}</TableCell>
                    <TableCell align="center">{row.plan}</TableCell>
                    <TableCell align="center">
                      {row?.booked_date?.split("T")[0]}
                    </TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </section>
    </div>
  );
};

export default MyTrips;
