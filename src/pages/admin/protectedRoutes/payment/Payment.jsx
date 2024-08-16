import "./payment.scss";

//Routing
import { useNavigate } from "react-router-dom";

//Assets
import payment from "@/assets/payment.png";

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
} from "@mui/material";

// Data
import { useAdminGetAllPaymentsQuery } from "@/redux/slice/admin/api/adminApiSlice";
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

const Payment = () => {
  const navigate = useNavigate();
  const { data: allPaymentDetails, isLoading: allPaymentIsLoading } =
    useAdminGetAllPaymentsQuery();

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
            {!allPaymentDetails?.data.length > 0 ? (
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
                    {allPaymentDetails?.data?.map((row, index) => (
                      <TableRow
                        key={index}
                        onClick={() => navigate(`/admin/trip/${row.order_id}`)}
                      >
                        <TableCell align="center">
                          {row?.paymentId ?? "--"}
                        </TableCell>
                        <TableCell align="center">
                          {row?.email ?? "--"}
                        </TableCell>
                        <TableCell align="center">
                          {row?.transactionType ?? "--"}
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
              </TableContainer>
            )}
          </>
        )}
      </section>
    </section>
  );
};

export default Payment;
