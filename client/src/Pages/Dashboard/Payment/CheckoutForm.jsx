import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const cart = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0) || 1;
  
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[ payment error]", error);
      setError(error.message);
    } else {
      console.log("[payment Method]", paymentMethod);
      setError("");
    }
  };

  return (
    <div className="lg:w-[1200px] md:w-[550px] mt-5 p-2 mx-auto mb-10">
      <form onSubmit={handleSubmit}>
        <div>
          <CardElement
            className="p-5 text-xl border-2 border-blue-400 rounded-md"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <div className="md:mx-[185px] lg:mx-[450px]">
          <button
            className="md:w-40 btn text-lg
               lg:w-72 my-14 bg-blue-700 font-semibold text-white rounded-md hover:bg-yellow-400 hover:text-black"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
        <p className="text-red-500 text-xl text-center">{error}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
