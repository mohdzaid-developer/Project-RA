import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createOrderSchema } from "../validation/validations";
import {toast} from "react-hot-toast";

const RazorpayPayment = () => {
  const navigate=useNavigate()
  const [errors, setErrors] = useState({});
  const [details, setDetails] = useState(null);
  const [normalAmount, setNormalAmount] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  let location = useLocation();
  useEffect(()=>{
    if(location?.pathname){
      let separatedUrl=location?.pathname?.split("/")
      if(separatedUrl){
        setDetails({
          ...details,
          destination:separatedUrl[1],
          package:separatedUrl[2],
          plan:separatedUrl[3]
        })
      }
    }
  },[location])
  const handleOnChange = (e) => {
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

  useEffect(()=>{
    console.log(errors)
  },[errors])

  const handlePayment = async () => {
    let userData=JSON.parse(sessionStorage.getItem("user"))
    if(!userData){
      navigate("/logon")
    }
    try {
      await createOrderSchema.validate(details, { abortEarly: false });
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${userData?.accessToken}`,
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

      // Open Razorpay Checkout
      const options = {
        key: "rzp_test_e6zf5ZgkpupNAu",
        amount: order.data.amount_due,
        currency: order.data.currency,
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: order.data.id,
        callback_url: "http://localhost:3000/payment-success",
        handler: function (response) {
          console.log(response);
          fetch(`${import.meta.env.VITE_API_BASE_URL}payment/verify-payment`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${userData?.accessToken}`,
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
        // prefill: {
        //   name: 'Your Name',
        //   email: 'your.email@example.com',
        //   contact: '9999999999'
        // },
        theme: {
          color: "#F37254",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      if (err) {
        console.log(err)
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
    <div>
      <h1>Razorpay Payment Gateway Integration</h1>
      <form id="payment-form">
        <input
          type="number"
          placeholder="no_of_adults"
          name="no_of_adults"
          onChange={handleOnChange}
          required
        />
        <input
          type="number"
          placeholder="no_of_children"
          name="no_of_children"
          onChange={handleOnChange}
          required
        />
        <input
          type="date"
          name="start_date"
          onChange={handleOnChange}
          required
        />
        <input type="date" name="end_date" onChange={handleOnChange} required />
        <button type="button" onClick={handlePayment}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default RazorpayPayment;
