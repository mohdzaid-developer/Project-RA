import { useEffect, useState } from "react";
import "./payment.scss";

// Alert
import { toast } from "react-hot-toast";

// Routing
import { Link, useLocation, useNavigate } from "react-router-dom";

// Assets
import buttonArrowImg from "@/assets/rightArrow.webp";
import nbfcLogo from "@/assets/nbfcLogo.png";

// MUI
import { Checkbox } from "@mui/material";

// Validation
import { createOrderSchemaSecond } from "@/utils/validation/userValidations";

// Component
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

// Redux
import {
  useCreateCustomOrderMutation,
  useCreateOrderMutation,
  useUserGetCustomPendingOrderQuery,
} from "@/redux/slice/user/api/userApiSlice";
import { setParamsQuery } from "@/redux/slice/user/state/authUserSlice";
import { useDispatch, useSelector } from "react-redux";

const Payment = ({ data }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.authUser);
  const [errors, setErrors] = useState({});
  const [details, setDetails] = useState({
    start_date: "",
    end_date: "",
    no_of_adults: "",
    no_of_children: "",
    termsAndCondition: "",
  });
  const [minStartDate, setMinStartDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [createOrder] = useCreateOrderMutation();
  const [createCustomOrder] = useCreateCustomOrderMutation();

  const { data: singlePendingOrder, error } = useUserGetCustomPendingOrderQuery(
    location?.search?.split("=")[1],
    { skip: location?.search?.length <= 0 }
  );

  useEffect(() => {
    if (singlePendingOrder?.data) {
      setDetails({ ...singlePendingOrder?.data });
    }
  }, [singlePendingOrder]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setParamsQuery(null));
    }
    if (location?.pathname) {
      const separatedUrl = location?.pathname?.split("/");
      if (separatedUrl) {
        setDetails((prevDetails) => ({
          ...prevDetails,
          destination: separatedUrl[1],
          package: separatedUrl[2],
          plan: separatedUrl[3],
        }));
      }
    }

    const oneMonthLater = new Date();
    oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
    const minDate = oneMonthLater.toISOString().split("T")[0];
    setMinStartDate(minDate);
  }, [location, isAuthenticated, dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: newValue,
    }));
  };

  useEffect(() => {
    let totalDays = location?.pathname.includes("premium") ? 8 : 6;
    if (details.start_date) {
      const startDate = new Date(details.start_date);
      startDate.setDate(startDate.getDate() + totalDays);
      const endDate = startDate.toISOString().split("T")[0];

      setDetails((prevDetails) => ({
        ...prevDetails,
        end_date: endDate,
      }));
    }
  }, [details.start_date]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${import.meta.env.VITE_API_RAZOR_PAY}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const paymentWindow = (orderResponse) => {
    const options = {
      key: `${import.meta.env.VITE_API_RAZOR_PAY_KEY}`,
      amount: orderResponse?.amount_due ?? orderResponse?.total_amount,
      currency: orderResponse?.currency ?? "INR",
      name: "Come Fly With Me",
      description: "Transaction",
      order_id: orderResponse?.id ?? orderResponse?.order_id,
      callback_url: "https://comeflywithme.co.in/payment-success",
      handler: async function (response) {
        try {
          toast.success("Payment successful!");
          setDetails({
            start_date: "",
            end_date: "",
            no_of_adults: "",
            no_of_children: "",
          });
        } catch (err) {
          toast.error("Payment verification failed!");
        } finally {
          setIsLoading(false);
        }
      },
      theme: {
        color: "#151515",
      },
      modal: {
        ondismiss: () => {
          setIsLoading(false);
          toast.error("Payment was not completed.");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    let userData = JSON.parse(sessionStorage.getItem("user"));
    if (!userData) {
      navigate(`/login?page=${location?.pathname.replace(/\//g, "?")}`);
      setIsLoading(false);
      return;
    }

    try {
      const oneMonthLater = new Date(minStartDate);
      if (new Date(details.start_date) < oneMonthLater) {
        toast.error("Start date must be at least one month from today");
        setIsLoading(false);
        return;
      }
      await createOrderSchemaSecond.validate(details, { abortEarly: false });

      const orderResponse = await createOrder({
        currency: "INR",
        receipt: "receipt#1",
        ...details,
      });

      if (orderResponse?.status === 400) {
        toast.error(
          "Please select a start date that is at least one month from today"
        );
        setIsLoading(false);
        return;
      }
      await paymentWindow({ ...orderResponse?.data?.data });
    } catch (err) {
      if (err.inner) {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      } else {
        toast.error("Something went wrong!");
      }
      setIsLoading(false);
    }
  };

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    try {
      await createOrderSchemaSecond.validate(details, { abortEarly: false });
      const response = await createCustomOrder({ ...details });
      if (response?.data?.statusCode == 201) {
        toast.success(response?.data?.message);
        setDetails({});
      } else {
        toast.error(response?.data?.message);
      }
    } catch (err) {
      if (err.inner) {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      }
    }
  };

  useEffect(() => {
    if (singlePendingOrder?.data[0]?.total_amount) {
      paymentWindow({ ...singlePendingOrder?.data[0] });
    }
    if (error) {
      toast?.error(singlePendingOrder?.data?.message);
      navigate("/");
    }
  }, [singlePendingOrder]);

  return (
    <div className="payment">
      <h2>Book Your Slot</h2>
      <form className="payment-form">
        <div className="input-fields">
          <div className="container">
            <div className="input">
              <label htmlFor="start_date">Start date :</label>
              <input
                type="date"
                name="start_date"
                onChange={handleChange}
                value={details?.start_date || ""}
                min={minStartDate}
                required
              />
              {errors?.start_date && (
                <p className="error-text-booking">{errors?.start_date}</p>
              )}
            </div>
            <div className="input">
              <label htmlFor="no_of_adults">Number of Adults :</label>
              <select
                name="no_of_adults"
                onChange={handleChange}
                value={details?.no_of_adults || ""}
                required
              >
                <option value="" disabled>
                  Select number of adults
                </option>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              {errors?.no_of_adults && (
                <p className="error-text-booking">{errors?.no_of_adults}</p>
              )}
            </div>
          </div>
          <div className="container">
            <div className="input">
              <label htmlFor="end_date">End date :</label>
              <input
                type="date"
                name="end_date"
                value={details?.end_date || ""}
                readOnly
                required
              />
              {errors?.end_date && (
                <p className="error-text-booking">{errors?.end_date}</p>
              )}
            </div>

            {location.pathname.includes("custom") && (
              <div className="input">
                <label htmlFor="no_of_children">Number of Children :</label>
                <select
                  name="no_of_children"
                  onChange={handleChange}
                  value={details?.no_of_children || ""}
                  required
                >
                  <option value="" disabled>
                    Select number of children
                  </option>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                {errors?.no_of_children && (
                  <p className="error-text-booking">{errors?.no_of_children}</p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="price">
          <h3>
            Price starting from Rs. <span>{data.price}</span> only!
          </h3>
          <p>
            Note:- You have to pay a token amount of Rs <span>3,000</span> to
            book your slot which will be refunded to you.
          </p>
        </div>

        <div className="SigUp-Checkbox">
          <div className="checkbox">
            <Checkbox
              required
              checked={details?.termsAndCondition}
              name="termsAndCondition"
              sx={{ color: "#E2E8F0" }}
              onChange={handleChange}
              className="checkbox-box"
            />
            <p id="Checkbox-Para">
              By booking slot means, you agree to the{" "}
              <Link to="/terms-and-conditions" className="Checkbox">
                Terms & Conditions{" "}
              </Link>
              and our{" "}
              <Link to="/privacy-policy" className="Checkbox">
                {" "}
                Privacy Policy
              </Link>
            </p>
          </div>
          {errors?.termsAndCondition && (
            <p className="error-text">{errors?.termsAndCondition}</p>
          )}
        </div>

        {details?.package == "custom" ? (
          <button onClick={handleCreateOrder}>
            {isLoading ? (
              <CircularProgressBar />
            ) : (
              <>
                Book Now
                <img src={buttonArrowImg} alt="" />
              </>
            )}
          </button>
        ) : (
          <button onClick={handlePayment}>
            {isLoading ? (
              <CircularProgressBar />
            ) : (
              <>
                Book Now
                <img src={buttonArrowImg} alt="" />
              </>
            )}
          </button>
        )}

        <div className="nbfc">
          <h3>Powered By - </h3>
          <img src={nbfcLogo} alt="" />
        </div>
      </form>
    </div>
  );
};

export default Payment;
