import "./myTrips.scss";

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
  TableRow,
} from "@mui/material";

import { useUserGetTripsQuery } from "@/redux/slice/user/api/userApiSlice";

const MyTrips = () => {
  const { data: tripDetails, isLoading: isTripLoading } =
    useUserGetTripsQuery();

  //   {
  //     "_id": "66c1d712da0696bc63bb77d2",
  //     "user_id": "66b857a0d452f0f66e9f599f",
  //     "client_name": "Mohd Zaid",
  //     "email": "za752911@gmail.com",
  //     "phone": "8858289520",
  //     "order_id": "order_OmLDm1Jpw4m7x5",
  //     "destination": "phuket",
  //     "package": "friends",
  //     "plan": "standard",
  //     "start_date": "2024-09-19T00:00:00.000Z",
  //     "end_date": "2024-09-25T00:00:00.000Z",
  //     "no_of_adults": 10,
  //     "status": "Booked",
  //     "booked_date": "2024-08-18T11:12:18.602Z",
  //     "__v": 0
  // }

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
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Message</TableCell>
                  <TableCell align="center">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="table-body">
                {tripDetails?.data.map((row, index) => (
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
        )}
      </section>
    </div>
  );
};

export default MyTrips;
