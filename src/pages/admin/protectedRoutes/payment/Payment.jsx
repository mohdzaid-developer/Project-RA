import "./payment.scss";
import { useState } from "react";

//Assets
import payment from "@/assets/payment.png";

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

// Redux
import { useAdminGetAllPaymentsQuery } from "@/redux/slice/admin/api/adminApiSlice";

const Payment = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { data: allPaymentDetails, isLoading: allPaymentIsLoading } =
    useAdminGetAllPaymentsQuery({ pageNum: page, pageSize: rowsPerPage });

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(1);
  };
  return (
    <section className="payment-container">
      <AdminNavbar title="Payments" image={payment} />
      <section className="payments">
        {allPaymentIsLoading ? (
          <div className="loader">
            <CircularProgressBar />
          </div>
        ) : (
          <>
            {!allPaymentDetails?.data?.data?.length > 0 ? (
              <div className="no-data">
                <h1>No data available!</h1>
              </div>
            ) : (
              <TableContainer component={Paper} className="table">
                <Table aria-label="simple table">
                  <TableHead className="table-head">
                    <TableRow>
                      <TableCell align="center">Payment Id</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">Type</TableCell>
                      <TableCell align="center">Program Name</TableCell>
                      <TableCell align="center">Paid Amount</TableCell>
                      <TableCell align="center">Date</TableCell>
                      <TableCell align="center">status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="table-body">
                    {allPaymentDetails?.data?.data?.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell align="center">
                          {row?.payment_id ?? "--"}
                        </TableCell>
                        <TableCell align="center">
                          {row?.email ?? "--"}
                        </TableCell>
                        <TableCell align="center">
                          {row?.transaction_type ?? "--"}
                        </TableCell>
                        <TableCell align="center">
                          {row?.programName ?? "--"}
                        </TableCell>
                        <TableCell align="center">
                          {row?.amount ?? "--"}
                        </TableCell>
                        <TableCell align="center">
                          {row?.createdAt?.split("T")[0] ?? "--"}
                        </TableCell>
                        <TableCell align="center">
                          {row?.status ?? "--"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 20]}
                  component="div"
                  count={allPaymentDetails?.data?.totalResultsCount}
                  rowsPerPage={rowsPerPage}
                  page={page - 1}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  className="table-pagination"
                />
              </TableContainer>
            )}
          </>
        )}
      </section>
    </section>
  );
};

export default Payment;
