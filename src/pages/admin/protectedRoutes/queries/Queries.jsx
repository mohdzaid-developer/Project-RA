import "./queries.scss";

//Assets
import query from "@/assets/query.png";

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

const Queries = () => {
  return (
    <section className="query-container">
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
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.message}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                </TableRow>
              ))}
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

export default Queries;
