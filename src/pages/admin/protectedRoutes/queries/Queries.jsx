import { useEffect } from "react";
import "../payment/payment.scss";

//Assets
import query from "@/assets/query.png";

//Components
import AdminNavbar from "@/components/admin/adminNavbar/AdminNavbar";

//Mui
import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

//Redux
import { useAdminGetAllQueriesQuery } from "@/redux/slice/admin/api/adminApiSlice";

const Queries = () => {
  const { data: allQueriesList, isLoading: queryListLoading } =
    useAdminGetAllQueriesQuery();

  return (
    <section className="payment-container">
      <AdminNavbar title="Queries" image={query} />

      <section className="payments">
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
              {allQueriesList?.data.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{index + 1}</TableCell>
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
        </TableContainer>
      </section>
    </section>
  );
};

export default Queries;
