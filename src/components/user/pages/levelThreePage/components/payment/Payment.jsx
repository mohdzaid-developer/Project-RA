import { useEffect, useState } from "react";
import "./payment.scss";

// External Libraries
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";

// Assets & Components
import buttonArrowImg from "@/assets/rightArrow.webp";
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

// Redux  Validation
import {
  useCreateOrderMutation,
  useVerifyPaymentMutation,
} from "@/redux/slice/user/api/userApiSlice";
import { setParamsQuery } from "@/redux/slice/user/state/authUserSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  createOrderSchema,
  createOrderSchemaSecond,
} from "@/utils/validation/userValidations";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.authUser);

  const [createOrder] = useCreateOrderMutation();
  const [verifyPayment] = useVerifyPaymentMutation();

  const [details, setDetails] = useState({
    start_date: "",
    end_date: "",
    no_of_adults: "",
    no_of_children: "",
    termsAndCondition: "",
  });
  const [minStartDate, setMinStartDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isAuthenticated) dispatch(setParamsQuery(null));

    const separatedUrl = location.pathname.split("/");
    setDetails((prevDetails) => ({
      ...prevDetails,
      destination: separatedUrl[1],
      package: separatedUrl[2],
      plan: separatedUrl[3],
    }));

    const oneMonthLater = new Date();
    oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
    setMinStartDate(oneMonthLater.toISOString().split("T")[0]);
  }, [location.pathname, isAuthenticated, dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    if (details.start_date && !location.pathname.includes("/custom")) {
      const endDate = new Date(details.start_date);
      endDate.setDate(endDate.getDate() + 6);
      setDetails((prevDetails) => ({
        ...prevDetails,
        end_date: endDate.toISOString().split("T")[0],
      }));
    }
  }, [details.start_date, location.pathname]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${import.meta.env.VITE_API_RAZOR_PAY}`;
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const validateAndCreateOrder = async () => {
    const validationSchema =
      location.pathname.includes("family") &&
      !location.pathname.includes("/custom")
        ? createOrderSchema
        : createOrderSchemaSecond;

    await validationSchema.validate(details, { abortEarly: false });

    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (!userData) {
      navigate(`/login?page=${location.pathname.replace(/\//g, "?")}`);
      return;
    }

    return await createOrder({
      accessToken: userData.accessToken,
      orderDetails: {
        amount: 2000,
        currency: "INR",
        receipt: "receipt#1",
        bookingDetails: { ...details, totalAmount: 5000 },
      },
    }).unwrap();
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (location.pathname.includes("/custom")) {
        console.log("custom");
        setIsLoading(false);
        return;
      }

      if (
        !location.pathname.includes("/custom") &&
        new Date(details.start_date) < new Date(minStartDate)
      ) {
        toast.error("Start date must be at least one month from today");
        return;
      }

      const orderResponse = await validateAndCreateOrder();
      if (!orderResponse) return;

      const options = {
        key: "rzp_test_e6zf5ZgkpupNAu",
        amount: orderResponse.data.amount_due,
        currency: orderResponse.data.currency,
        name: "Come Fly With Me",
        description: "Transaction",
        order_id: orderResponse.data.id,
        callback_url: "http://localhost:3000/payment-success",
        handler: async (response) => {
          try {
            const {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            } = response;
            await verifyPayment({
              accessToken: JSON.parse(sessionStorage.getItem("user"))
                .accessToken,
              orderId: razorpay_order_id,
              paymentId: razorpay_payment_id,
              signature: razorpay_signature,
              amount: 2000,
              currency: "rupees",
              order_id: orderResponse.data.id,
            }).unwrap();

            toast.success("Payment successful!");
            setDetails({
              start_date: "",
              end_date: "",
              no_of_adults: "",
              no_of_children: "",
              termsAndCondition: "",
            });
          } catch (err) {
            toast.error("Payment verification failed!");
            setIsLoading(false);
          } finally {
            setIsLoading(false);
          }
        },
        theme: { color: "#151515" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      if (err.inner) {
        const newErrors = {};
        err.inner.forEach((error) => (newErrors[error.path] = error.message));
        setErrors(newErrors);
        setIsLoading(false);
      } else {
        toast.error("Something went wrong!");
        setIsLoading(false);
      }
      setIsLoading(false);
    }
  };

  const renderSelectOptions = (count) =>
    Array.from({ length: count }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ));

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
                value={details.start_date}
                min={location.pathname.includes("/custom") ? "" : minStartDate}
                required
              />
              {errors.start_date && (
                <p className="error-text-booking">{errors.start_date}</p>
              )}
            </div>
            <div className="input">
              <label htmlFor="no_of_adults">Number of Adults :</label>
              <select
                name="no_of_adults"
                onChange={handleChange}
                value={details.no_of_adults}
                required
              >
                <option value="" disabled>
                  Select number of adults
                </option>
                {renderSelectOptions(10)}
              </select>
              {errors.no_of_adults && (
                <p className="error-text-booking">{errors.no_of_adults}</p>
              )}
            </div>
          </div>
          <div className="container">
            <div className="input">
              <label htmlFor="end_date">End date :</label>
              <input
                type="date"
                name="end_date"
                value={details.end_date}
                onChange={handleChange}
                readOnly={!location.pathname.includes("/custom")}
                required
              />
              {errors.end_date && (
                <p className="error-text-booking">{errors.end_date}</p>
              )}
            </div>

            {location.pathname.match(
              /(family|custom)\/(standard|delux|premium)/
            ) && (
              <div className="input">
                <label htmlFor="no_of_children">Number of Children :</label>
                <select
                  name="no_of_children"
                  onChange={handleChange}
                  value={details.no_of_children}
                  required
                >
                  <option value="" disabled>
                    Select number of children
                  </option>
                  {renderSelectOptions(10)}
                </select>
                {errors.no_of_children && (
                  <p className="error-text-booking">{errors.no_of_children}</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="terms-and-conditions">
          <Checkbox
            name="termsAndCondition"
            checked={details.termsAndCondition}
            onChange={handleChange}
            required
          />
          <span>
            I agree to the{" "}
            <Link to="/terms-and-conditions" target="_blank">
              Terms and Conditions
            </Link>
          </span>
          {errors.termsAndCondition && (
            <p className="error-text-booking">{errors.termsAndCondition}</p>
          )}
        </div>

        <div className="payment-button-container">
          <button
            type="submit"
            className="payment-button"
            onClick={handlePayment}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgressBar />
            ) : (
              <>
                <span>Pay Now</span>
                <img src={buttonArrowImg} alt="Pay Now" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
