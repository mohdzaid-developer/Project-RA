import "../payment/payment.scss";
import { useState } from "react";

//Assets
import query from "@/assets/query.png";

//Components
import AdminNavbar from "@/components/admin/adminNavbar/AdminNavbar";
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

//Redux
import { useAdminGetAllQueriesQuery } from "@/redux/slice/admin/api/adminApiSlice";

const Queries = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { data: allQueriesList, isLoading: queryListLoading } =
    useAdminGetAllQueriesQuery({ pageNum: page, pageSize: rowsPerPage });

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(1);
  };
  return (
    <section className="payment-container">
      <AdminNavbar title="Queries" image={query} />

      <section className="payments">
        {queryListLoading ? (
          <div className="loader">
            <CircularProgressBar />
          </div>
        ) : (
          <TableContainer component={Paper} className="table">
            <Table aria-label="simple table">
              <TableHead className="table-head">
                <TableRow>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Message</TableCell>
                  <TableCell align="center">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="table-body">
                {allQueriesList?.data?.data?.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell align="center">
                      {index + rowsPerPage * page - rowsPerPage + 1}
                    </TableCell>
                    <TableCell align="center">{row.fullName}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.message}</TableCell>
                    <TableCell align="center">
                      {row?.createdAt?.split("T")[0]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              component="div"
              count={allQueriesList?.data?.totalResultsCount}
              rowsPerPage={rowsPerPage}
              page={page - 1}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              className="table-pagination"
            />
          </TableContainer>
        )}
      </section>
    </section>
  );
};

export default Queries;
