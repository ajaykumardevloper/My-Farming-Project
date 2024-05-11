

import Link from "next/link";
import { DashboardNav } from "../dashboard/DashboardNav";


const CheckoutPage = () => {



  return (

    <>
        <DashboardNav/>
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-semibold mb-8">Checkout</h1>
      <div className="bg-blue-200 rounded-lg p-4">
        <h2 className="text-center font-bold text-5xl text-blue-700 mb-4">Payment Details</h2>
        <div className="mb-4">
          <label
            htmlFor="paymentMethod"
            className="block text-sm font-medium text-gray-700"
          >
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"

            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"

            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="expiryDate"
            className="block text-sm font-medium text-gray-700"
          >
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"

            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-700"
          >
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"

            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-semibold">Total:</span>
          <span>$500</span>
        </div>
        <div className="flex justify-between mt-4">
          <Link href={"/shopping"}>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
              Back
            </button>
          </Link>
          <button

            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CheckoutPage;
