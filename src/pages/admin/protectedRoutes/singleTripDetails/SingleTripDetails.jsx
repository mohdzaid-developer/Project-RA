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
  useCreateCustomOrderMutation,
} from "@/redux/slice/admin/api/adminApiSlice";
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";
import { useEffect, useState } from "react";

const statusNames = ["Booked", "Reviewed", "Approved", "Done"];
const selectedValues = {
  booked: ["booked"],
  reviewed: ["booked", "reviewed"],
  approved: ["booked", "reviewed", "approved"],
  done: ["booked", "reviewed", "approved", "done"],
};
const SingleTripDetails = () => {
  const { id } = useParams();

  const [singleBookingDetails, setSingleBookingDetails] = useState({});

  const [updateTripStatus, { isLoading: isStatusLoading }] =
    useAdminUpdateTripStatusMutation();

  const [createCustomOrder, { isLoading: isOrderLoading }] =
    useCreateCustomOrderMutation();
  const { data: singleBookingDetail, isLoading: allBookingIsLoading } =
    useAdminGetAllBookingQuery({
      destination: "",
      selectedPlan: "",
      selectedPackage: "",
      id,
      pageNum: 1,
      pageSize: 10,
    });

  useEffect(() => {
    if (singleBookingDetail) {
      setSingleBookingDetails({ ...singleBookingDetail?.data?.data[0] });
    }
  }, [singleBookingDetail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSingleBookingDetails({ ...singleBookingDetails, [name]: value });
  };

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

  const handleSubmit = async (data) => {
    customPopUp.Confirm({
      message: `Do you want to submit ?`,
      isLoading: isStatusLoading,
      handleAction: async () => {
        if (data) {
          const response = await createCustomOrder({ ...data });
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
                  <h3>{singleBookingDetails?.client_name ?? "--"}</h3>
                </div>
                <div className="detail-slot">
                  <h2>Email :</h2>
                  <h3>{singleBookingDetails?.email ?? "--"}</h3>
                </div>
                <div className="detail-slot">
                  <h2>Phone number :</h2>
                  <h3>{singleBookingDetails?.phone ?? "--"}</h3>
                </div>
                <div className="detail-slot">
                  <h2>Destination :</h2>
                  <h3>{singleBookingDetails?.destination ?? "--"}</h3>
                </div>
                <div className="detail-slot">
                  <h2>Package :</h2>
                  <h3>{singleBookingDetails?.package ?? "--"}</h3>
                </div>
                <div className="detail-slot">
                  <h2>Plan :</h2>
                  <h3>{singleBookingDetails?.plan ?? "--"}</h3>
                </div>

                <div className="detail-slot">
                  <h2>Number Of Adults :</h2>
                  <h3>{singleBookingDetails?.no_of_adults}</h3>
                </div>

                {singleBookingDetails?.no_of_children && (
                  <div className="detail-slot">
                    <h2>Number of Children :</h2>
                    <h3>{singleBookingDetails?.no_of_children}</h3>
                  </div>
                )}
                <div className="detail-slot">
                  <h2>Booked Date :</h2>
                  <h3>{singleBookingDetails?.booked_date?.split("T")[0]}</h3>
                </div>
                <div className="detail-slot">
                  <h2>Trip Start Date :</h2>
                  <h3>
                    {singleBookingDetails?.status == "request" ? (
                      <input
                        type="date"
                        value={singleBookingDetails?.start_date?.split("T")[0]}
                        name="start_date"
                        onChange={handleChange}
                      />
                    ) : (
                      singleBookingDetails?.start_date?.split("T")[0]
                    )}
                  </h3>
                </div>
                <div className="detail-slot">
                  <h2>Trip End Date :</h2>
                  <h3>
                    {singleBookingDetails?.status == "request" ? (
                      <input
                        type="date"
                        value={singleBookingDetails?.end_date?.split("T")[0]}
                        name="end_date"
                        onChange={handleChange}
                      />
                    ) : (
                      singleBookingDetails?.end_date?.split("T")[0]
                    )}
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
                  {singleBookingDetails?.status == "request" ? (
                    <input
                      type="number"
                      placeholder="Enter Total Amount"
                      name="total_amount"
                      onChange={handleChange}
                    />
                  ) : (
                    <h3>{singleBookingDetails?.total_amount}</h3>
                  )}
                </div>
                <div className="detail-slot">
                  <h2>Paid Amount :</h2>
                  {singleBookingDetails?.status == "request" ? (
                    <input
                      type="number"
                      placeholder="Enter Payable Amount"
                      name="paid_amount"
                      onChange={handleChange}
                    />
                  ) : (
                    <h3>{singleBookingDetails?.paid_amount}</h3>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-container">
            <div className="trip-heading">
              <h3>Process Status</h3>
            </div>

            <div className="status-container">
              {singleBookingDetails?.status == "request" ? (
                <button
                  className="status-btn"
                  onClick={() => handleSubmit({ ...singleBookingDetails })}
                >
                  Submit
                </button>
              ) : (
                statusNames?.map((item) => (
                  <button
                    className="status-btn"
                    onClick={() => handleChangeStatus(item)}
                    id={
                      selectedValues[
                        singleBookingDetails?.status?.toLowerCase()
                      ]?.includes(item?.toLowerCase())
                        ? "selected"
                        : ""
                    }
                    disabled={selectedValues[
                      singleBookingDetails?.status?.toLowerCase()
                    ]?.includes(item?.toLowerCase())}
                  >
                    {item}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleTripDetails;
