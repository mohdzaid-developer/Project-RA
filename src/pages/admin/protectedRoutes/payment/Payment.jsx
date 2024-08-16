import "./payment.scss";

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
  Pagination,
} from "@mui/material";

// Data
import { data } from "./data";
import { useAdminGetAllPaymentsQuery } from "@/redux/slice/admin/api/adminApiSlice";

const Payment = () => {
  const { data: allPaymentDetails, isLoading: allPaymentIsLoading } =
    useAdminGetAllPaymentsQuery();

  const columns = [
    { id: "paymentId", label: "Payment Id", align: "center" },
    { id: "studentName", label: "Student Name", align: "center" },
    { id: "transactionType", label: "Payment Type", align: "center" },
    { id: "programName", label: "Payment For", align: "center" },
    { id: "amount", label: "Amount", align: "center" },
    { id: "createdAt", label: "Date & Time", align: "center" },
  ];

  return (
    <section className="payment-container">
      <AdminNavbar title="Payments" image={payment} />
      <section className="payments">
        <TableContainer component={Paper} className="table">
          <Table aria-label="simple table">
            <TableHead className="table-head">
              <TableRow>
                <TableCell align="center">paymentId</TableCell>
                {/* <TableCell align="center">clientName</TableCell> */}
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">programName</TableCell>
                <TableCell align="center">Paid Amount</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-body">
              {allPaymentIsLoading ? (
                <h3>Loading...</h3>
              ) : allPaymentDetails?.data?.length > 0 ? (
                allPaymentDetails?.data?.map((row, index) => (
                  <TableRow
                    key={row.id}
                    onClick={() => navigate(`/admin/trip/${row.order_id}`)}
                  >
                    <TableCell align="center">
                      {row?.paymentId ?? "--"}
                    </TableCell>
                    {/* <TableCell align="center">{row?.client_name??"--"}</TableCell> */}
                    <TableCell align="center">{row?.email ?? "--"}</TableCell>
                    <TableCell align="center">
                      {row?.transactionType ?? "--"}
                    </TableCell>
                    <TableCell align="center">
                      {row?.programName ?? "--"}
                    </TableCell>
                    <TableCell align="center">{row?.amount ?? "--"}</TableCell>
                    <TableCell align="center">
                      {row?.createdAt?.split("T")[0] ?? "--"}
                    </TableCell>
                    <TableCell align="center">{row?.status ?? "--"}</TableCell>
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

export default Payment;
