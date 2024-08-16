import {
  useAdminGetAllBookingQuery,
  useAdminGetAllPaymentsQuery,
} from "@/redux/slice/admin/api/adminApiSlice";
import "./singleTripDetails.scss";
import "../trips/trips.scss";
import { useParams } from "react-router-dom";
import AdminNavbar from "@/components/admin/adminNavbar/AdminNavbar";

//Assets
import trip from "@/assets/trip.png";

const statusNames = ["Booked", "Reviewed", "Approved", "Done"];
const SingleTripDetails = () => {
  const { id } = useParams();
  const { data: singleBookingDetails, isLoading: allBookingIsLoading } =
    useAdminGetAllBookingQuery({
      destination: "",
      selectedPlan: "",
      selectedPackage: "",
      id,
    });

  return (
    <section className="trips-container">
      <AdminNavbar title="Trips" image={trip} />
      <div className="single-trip-details">
        <div className="booking-details">
          <div className="trip-heading">
            <h1>Trip Details</h1>
          </div>

          <div className="detail-container">
            <div className="detail-slot">
              <h2>Name :</h2>
              <h3>{singleBookingDetails?.data[0]?.client_name ?? "--"}</h3>
            </div>
            <div className="detail-slot">
              <h2>email:</h2>
              <h3>{singleBookingDetails?.data[0]?.email ?? "--"}</h3>
            </div>
            <div className="detail-slot">
              <h2>phone :</h2>
              <h3>{singleBookingDetails?.data[0]?.phone ?? "--"}</h3>
            </div>
            <div className="detail-slot">
              <h2>destination :</h2>
              <h3>{singleBookingDetails?.data[0]?.destination ?? "--"}</h3>
            </div>
            <div className="detail-slot">
              <h2>Plan :</h2>
              <h3>{singleBookingDetails?.data[0]?.plan ?? "--"}</h3>
            </div>
            <div className="detail-slot">
              <h2>Package :</h2>
              <h3>{singleBookingDetails?.data[0]?.package ?? "--"}</h3>
            </div>
            <div className="detail-slot">
              <h2>Number Of Adults :</h2>
              <h3>{singleBookingDetails?.data[0]?.no_of_adults ?? "--"}</h3>
            </div>
            <div className="detail-slot">
              <h2>Number of Children :</h2>
              <h3>{singleBookingDetails?.data[0]?.no_of_children ?? "--"}</h3>
            </div>
            <div className="detail-slot">
              <h2>bookedDate :</h2>
              <h3>
                {singleBookingDetails?.data[0]?.booked_date?.split("T")[0]}
              </h3>
            </div>
            <div className="detail-slot">
              <h2>startDate :</h2>
              <h3>
                {singleBookingDetails?.data[0]?.start_date?.split("T")[0]}
              </h3>
            </div>
            <div className="detail-slot">
              <h2>endDate :</h2>
              <h3>{singleBookingDetails?.data[0]?.end_date?.split("T")[0]}</h3>
            </div>
          </div>
        </div>

        <div className="payment-details">
          <div className="trip-heading">
            <h1>Payment Details</h1>
          </div>

          <div className="detail-container">
            <div className="detail-slot">
              <h2>Total Amount :</h2>
              <h3>{singleBookingDetails?.data[0]?.total_amount}</h3>
            </div>
            <div className="detail-slot">
              <h2>Paid Amount :</h2>
              <h3>{singleBookingDetails?.data[0]?.paid_amount}</h3>
            </div>
          </div>
        </div>

        <div className="payment-details">
          <div className="trip-heading">
            <h1>Process Status</h1>
          </div>

          <div className="status-container">
            {statusNames?.map((item) => (
              <button
                className="status-btn"
                id={
                  singleBookingDetails?.data[0]?.status == item.toLowerCase()
                    ? "selected"
                    : ""
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleTripDetails;
