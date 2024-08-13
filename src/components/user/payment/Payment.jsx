import { useEffect, useState } from "react";
import "./payment.scss";

//Alert
import { toast } from "react-hot-toast";

//Routing
import { useLocation, useNavigate } from "react-router-dom";

//Assets
import buttonArrowImg from "@/assets/rightArrow.webp";

//Validation
import {
  createOrderSchema,
  createOrderSchemaSecond,
} from "@/utils/validation/validations";

const Payment = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [details, setDetails] = useState(null);
  const [normalAmount, setNormalAmount] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  useEffect(() => {
    if (location?.pathname) {
      let separatedUrl = location?.pathname?.split("/");
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
    let userData = JSON.parse(sessionStorage.getItem("user"));
    if (!userData) {
      navigate(`/login?page=${location?.pathname.replace(/\//g, "?")}`);
    }
    try {
      if (location?.pathname?.includes("family")) {
        await createOrderSchema.validate(details, { abortEarly: false });
      } else {
        await createOrderSchemaSecond.validate(details, { abortEarly: false });
      }
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData?.accessToken}`,
          },
          body: JSON.stringify({
            amount: 2000,
            currency: "INR",
            receipt: "receipt#1",
            bookingDetails: {
              ...details,
              totalAmount: 5000,
            },
          }),
        }
      );

      const order = await response.json();

      if (!order || !order.data || !order.data.id) {
        alert("Failed to create order. Please try again.");
        return;
      }

      const options = {
        key: "rzp_test_e6zf5ZgkpupNAu",
        amount: order.data.amount_due,
        currency: order.data.currency,
        name: "Come Fly With Me",
        description: "Transaction",
        order_id: order.data.id,
        callback_url: "http://localhost:3000/payment-success",
        handler: function (response) {
          fetch(`${import.meta.env.VITE_API_BASE_URL}payment/verify-payment`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userData?.accessToken}`,
            },
            body: JSON.stringify({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              amount: 2000,
              currency: "rupees",
              order_id: order.data.id,
            }),
          })
            .then((res) => {
              console.log(res.data.message);
            })
            .catch((err) => {
              console.error(err);
            });
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      if (err) {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      } else {
        toast.error("Something went wrong !");
      }
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
                required
              />
            </div>
            <div className="input">
              <label htmlFor="">Number of Adults :</label>
              <input
                type="phone"
                name="no_of_adults"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="container">
            <div className="input">
              <label htmlFor="">End date :</label>
              <input
                type="date"
                name="end_date"
                onChange={handleChange}
                required
              />
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
                  required
                />
              </div>
            )}
          </div>
        </div>
        <button onClick={handlePayment}>
          Book Now
          <img src={buttonArrowImg} alt="" />
        </button>
      </form>
    </div>
  );
};

export default Payment;
