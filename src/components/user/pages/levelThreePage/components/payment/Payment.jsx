import { useEffect, useState } from "react";
import "./payment.scss";

// Alert
import { toast } from "react-hot-toast";

// Routing
import { useLocation, useNavigate } from "react-router-dom";

// Assets
import buttonArrowImg from "@/assets/rightArrow.webp";

// Validations
import {
  createOrderSchema,
  createOrderSchemaSecond,
} from "@/utils/validation/userValidations";

//Component
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

// Redux
import { setParamsQuery } from "@/redux/slice/user/state/authUserSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  useCreateOrderMutation,
  useVerifyPaymentMutation,
} from "@/redux/slice/user/api/userApiSlice";

const Payment = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.authUser);

  const [errors, setErrors] = useState({});
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [createOrder] = useCreateOrderMutation();
  const [verifyPayment] = useVerifyPaymentMutation();

  useEffect(() => {
    if (isAuthenticated === true) {
      dispatch(setParamsQuery(null));
    }
    if (location?.pathname) {
      const separatedUrl = location?.pathname?.split("/");
      if (separatedUrl) {
        setDetails({
          ...details,
          destination: separatedUrl[1],
          package: separatedUrl[2],
          plan: separatedUrl[3],
        });
      }
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${import.meta.env.VITE_API_RAZOR_PAY}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
      if (location?.pathname?.includes("family")) {
        await createOrderSchema.validate(details, { abortEarly: false });
      } else {
        await createOrderSchemaSecond.validate(details, { abortEarly: false });
      }

      const orderResponse = await createOrder({
        accessToken: userData.accessToken,
        orderDetails: {
          amount: 2000,
          currency: "INR",
          receipt: "receipt#1",
          bookingDetails: {
            ...details,
            totalAmount: 5000,
          },
        },
      }).unwrap();

      if (orderResponse?.status === 400) {
        toast.error(
          "Please select a start date that is at least one month from today"
        );
        setIsLoading(false);
        return;
      }

      const options = {
        key: "rzp_test_e6zf5ZgkpupNAu",
        amount: orderResponse.data.amount_due,
        currency: orderResponse.data.currency,
        name: "Come Fly With Me",
        description: "Transaction",
        order_id: orderResponse.data.id,
        callback_url: "http://localhost:3000/payment-success",
        handler: async function (response) {
          try {
            const verificationResponse = await verifyPayment({
              accessToken: userData.accessToken,
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              amount: 2000,
              currency: "rupees",
              order_id: orderResponse.data.id,
            }).unwrap();

            toast.success("Payment successful!");
            setDetails(null);
          } catch (err) {
            toast.error("Payment verification failed!");
            console.error(err);
          } finally {
            setIsLoading(false);
          }
        },
        theme: {
          color: "#151515",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
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

  return (
    <div className="payment">
      <h2>Book Your Slot</h2>
      <form className="payment-form">
        <div className="input-fields">
          <div className="container">
            <div className="input">
              <label htmlFor="">Start date :</label>
              <input
                type="date"
                name="start_date"
                onChange={handleChange}
                value={details?.start_date || ""}
                required
              />
              {errors?.start_date && (
                <p className="error-text">{errors?.start_date}</p>
              )}
            </div>
            <div className="input">
              <label htmlFor="">Number of Adults :</label>
              <input
                type="phone"
                name="no_of_adults"
                onChange={handleChange}
                value={details?.no_of_adults || ""}
                required
              />
              {errors?.no_of_adults && (
                <p className="error-text">{errors?.no_of_adults}</p>
              )}
            </div>
          </div>
          <div className="container">
            <div className="input">
              <label htmlFor="">End date :</label>
              <input
                type="date"
                name="end_date"
                onChange={handleChange}
                value={details?.end_date || ""}
                required
              />
              {errors?.end_date && (
                <p className="error-text">{errors?.end_date}</p>
              )}
            </div>

            {(location.pathname === "/bali/family/standard" ||
              location.pathname === "/bali/family/delux" ||
              location.pathname === "/bali/family/premium" ||
              location.pathname === "/bali/family/custom" ||
              location.pathname === "/phuket/family/standard" ||
              location.pathname === "/phuket/family/delux" ||
              location.pathname === "/phuket/family/premium" ||
              location.pathname === "/phuket/family/custom") && (
              <div className="input">
                <label htmlFor="">Number of Children :</label>
                <input
                  type="phone"
                  name="no_of_children"
                  onChange={handleChange}
                  value={details?.no_of_children || ""}
                  required
                />
                {errors?.no_of_children && (
                  <p className="error-text">{errors?.no_of_children}</p>
                )}
              </div>
            )}
          </div>
        </div>

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
      </form>
    </div>
  );
};

export default Payment;
