import "../payment/payment.scss";
import "./newsLetter.scss";
import { useState } from "react";

//Assets
import dashboard from "@/assets/dashboard.png";

//Components
import AdminNavbar from "@/components/admin/adminNavbar/AdminNavbar";
import { useAdminGetAllNewsLettersQuery } from "@/redux/slice/admin/api/adminApiSlice";

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

const NewsLetter = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { data: allNewsLetterList, isLoading: newsListLoading } =
    useAdminGetAllNewsLettersQuery({ pageNum: page, pageSize: rowsPerPage });

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(1);
  };
  return (
    <section className="payment-container">
      <AdminNavbar title="News Letter" image={dashboard} />

      <section className="payments">
        <TableContainer component={Paper} className="table">
          <Table aria-label="simple table">
            <TableHead className="table-head">
              <TableRow>
                <TableCell align="center">S/N</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">phone</TableCell>
                <TableCell align="center">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-body">
              {allNewsLetterList?.data?.data?.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell align="center">
                    {index + rowsPerPage * page - rowsPerPage + 1}
                  </TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
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
        count={allNewsLetterList?.data?.totalResultsCount}
        rowsPerPage={rowsPerPage}
        page={page - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="table-pagination"
      />
        </TableContainer>
      </section>
    </section>
  );
};

export default NewsLetter;
