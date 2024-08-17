import "./singleTripDetails.scss";
import { useParams } from "react-router-dom";
import AdminNavbar from "@/components/admin/adminNavbar/AdminNavbar";

//Assets
import trip from "@/assets/trip.png";
import PopUp from "@/components/global/popUp/PopUp";

//Alert
import { toast } from "react-hot-toast";

//Redux
import {
  useAdminGetAllBookingQuery,
  useAdminUpdateTripStatusMutation,
} from "@/redux/slice/admin/api/adminApiSlice";

const statusNames = ["Booked", "Reviewed", "Approved", "Done"];
const selectedValues = {
  booked: ["booked"],
  reviewed: ["booked", "reviewed"],
  approved: ["booked", "reviewed", "approved"],
  done: ["booked", "reviewed", "approved", "done"],
};
const SingleTripDetails = () => {
  const { id } = useParams();

  const [updateTripStatus, { isLoading: isStatusLoading }] =
    useAdminUpdateTripStatusMutation();
  const { data: singleBookingDetails, isLoading: allBookingIsLoading } =
    useAdminGetAllBookingQuery({
      destination: "",
      selectedPlan: "",
      selectedPackage: "",
      id,
    });

  const handleChangeStatus = async (status) => {
    customPopUp.Confirm({
      message: `Do you want to change status to
                            ${status}
                            for this trip ?`,
      isLoading: isStatusLoading,
      handleAction: async () => {
        if (status) {
          const response = await updateTripStatus({
            id: id,
            status: status,
          });
          toast.success(response?.data?.message);
          window?.customPopUp.Close();
        }
      },
    });
  };
  return (
    <section className="trips-container">
      <PopUp />
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
                onClick={() => handleChangeStatus(item)}
                id={
                  selectedValues[
                    singleBookingDetails?.data[0]?.status.toLowerCase()
                  ]?.includes(item.toLowerCase())
                    ? "selected"
                    : ""
                }
                disabled={
                  selectedValues[
                    singleBookingDetails?.data[0]?.status.toLowerCase()
                  ]?.includes(item.toLowerCase())
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
