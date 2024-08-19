import "../payment/payment.scss";
import "./newsLetter.scss";

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
  TableRow
} from "@mui/material";
const NewsLetter = () => {
  const { data: allNewsLetterList, isLoading: newsListLoading } =
    useAdminGetAllNewsLettersQuery();

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
              {allNewsLetterList?.data.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
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

export default NewsLetter;
