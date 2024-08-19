import "./singleTripDetails.scss";
import { useParams } from "react-router-dom";

//Assets
import trip from "@/assets/trip.png";

//Components
import AdminNavbar from "@/components/admin/adminNavbar/AdminNavbar";
import PopUp from "@/components/global/popUp/PopUp";

//Alert
import { toast } from "react-hot-toast";

//Redux
import {
  useAdminGetAllBookingQuery,
  useAdminUpdateTripStatusMutation,
} from "@/redux/slice/admin/api/adminApiSlice";
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

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
    <section className="admin-trips-container">
      <PopUp />
      <AdminNavbar title="Trips" image={trip} />
      {allBookingIsLoading ? (
        <div className="loader">
          <CircularProgressBar />
        </div>
      ) : (
        <div className="single-trip-details">
          <div className="top-container">
            <div className="details">
              <div className="trip-heading">
                <h3>Trip Details</h3>
              </div>

              <div className="detail-container">
                <div className="detail-slot">
                  <h2>Name :</h2>
                  <h3>{singleBookingDetails?.data[0]?.client_name ?? "--"}</h3>
                </div>
                <div className="detail-slot">
                  <h2>Email :</h2>
                  <h3>{singleBookingDetails?.data[0]?.email ?? "--"}</h3>
                </div>
                <div className="detail-slot">
                  <h2>Phone number :</h2>
                  <h3>{singleBookingDetails?.data[0]?.phone ?? "--"}</h3>
                </div>
                <div className="detail-slot">
                  <h2>Destination :</h2>
                  <h3>{singleBookingDetails?.data[0]?.destination ?? "--"}</h3>
                </div>
                <div className="detail-slot">
                  <h2>Package :</h2>
                  <h3>{singleBookingDetails?.data[0]?.package ?? "--"}</h3>
                </div>
                <div className="detail-slot">
                  <h2>Plan :</h2>
                  <h3>{singleBookingDetails?.data[0]?.plan ?? "--"}</h3>
                </div>

                <div className="detail-slot">
                  <h2>Number Of Adults :</h2>
                  <h3>{singleBookingDetails?.data[0]?.no_of_adults}</h3>
                </div>

                {singleBookingDetails?.data[0]?.no_of_children && (
                  <div className="detail-slot">
                    <h2>Number of Children :</h2>
                    <h3>{singleBookingDetails?.data[0]?.no_of_children}</h3>
                  </div>
                )}
                <div className="detail-slot">
                  <h2>Booked Date :</h2>
                  <h3>
                    {singleBookingDetails?.data[0]?.booked_date?.split("T")[0]}
                  </h3>
                </div>
                <div className="detail-slot">
                  <h2>Trip Start Date :</h2>
                  <h3>
                    {singleBookingDetails?.data[0]?.start_date?.split("T")[0]}
                  </h3>
                </div>
                <div className="detail-slot">
                  <h2>Trip End Date :</h2>
                  <h3>
                    {singleBookingDetails?.data[0]?.end_date?.split("T")[0]}
                  </h3>
                </div>
              </div>
            </div>

            <div className="details">
              <div className="trip-heading">
                <h3>Payment Details</h3>
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
          </div>

          <div className="bottom-container">
            <div className="trip-heading">
              <h3>Process Status</h3>
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
                  disabled={selectedValues[
                    singleBookingDetails?.data[0]?.status.toLowerCase()
                  ]?.includes(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleTripDetails;
