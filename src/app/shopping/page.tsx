"use client";
import Link from "next/link";
import React, { useState } from "react";
import { DashboardNav } from "../dashboard/DashboardNav";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Product: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  const addToCart = (item: Product) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const getTotalPrice = (): string => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    const totalAmount = getTotalPrice();
    window.location.href = "/checkout";
  };

  const products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 10.0,
      quantity: 1,
      image:
        "https://www.gardendesign.com/pictures/images/675x529Max/site_3/hawaiian-pothos-epipremnum-aureum-proven-winners_17324.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 15.0,
      quantity: 1,
      image:
        "https://th.bing.com/th/id/R.988b5e9078051dbf7c454cf46f64ee96?rik=%2bj8LdVF%2bG7e0fg&riu=http%3a%2f%2fwww.fygconsultores.com%2fwp-content%2fuploads%2f2017%2f02%2f10-medicinal-herbs-you-can-grow-peppermint.jpg&ehk=bN4%2bIHPqGDNvQu7KxzEIqQXwJjjVKjRdsTzlY5Aq1%2bw%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      name: "Product 3",
      price: 20.0,
      quantity: 1,
      image:
        "https://www.petalrepublic.com/wp-content/uploads/2022/01/Water-1170x780.jpeg",
    },
    {
      id: 4,
      name: "Product 4",
      price: 25.0,
      quantity: 1,
      image:
        "https://th.bing.com/th/id/OIP.FpBHnzdw2W4dYJmv-sBpAwHaGW?rs=1&pid=ImgDetMain",
    },
    {
      id: 5,
      name: "Product 5",
      price: 30.0,
      quantity: 1,
      image:
        "https://infohubpost.com/wp-content/uploads/2018/09/herbal_medicine_01-1024x683.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      price: 35.0,
      quantity: 1,
      image:
        "https://th.bing.com/th/id/OIP.4cJ-beSIASrVzcIQvvzCbgHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 7,
      name: "Product 7",
      price: 40.0,
      quantity: 1,
      image:
        "https://s42814.pcdn.co/wp-content/uploads/2019/12/01_herb_garden.jpg.optimal.jpg",
    },
    {
      id: 8,
      name: "Product 8",
      price: 45.0,
      quantity: 1,
      image:
        "https://www.wishgardenherbs.com/cdn/shop/articles/Yarrow_Achillea_millefolium.jpg?v=1660058152&width=1920",
    },
    {
      id: 9,
      name: "Product 9",
      price: 50.0,
      quantity: 1,
      image:
        "https://th.bing.com/th/id/R.7adf7b5b30f9c65eacf16b5922b670ed?rik=XL0ga%2fr%2bj8LPDw&riu=http%3a%2f%2fwww.remediesforme.com%2fwp-content%2fuploads%2f2016%2f01%2fparsley-herb-fresh-green-leaves.jpg&ehk=phT%2bGCXEiDVnv6sDKlwOvo1jk%2fzI62haSNdRvjNkpKs%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 10,
      name: "Product 9",
      price: 50.0,
      quantity: 1,
      image:
        "https://th.bing.com/th/id/R.29007574af1e5f94d08595454817d9aa?rik=HCWWJsWP5gE9%2fA&riu=http%3a%2f%2fwww.herbal-supplement-resource.com%2fwp-content%2fuploads%2f2014%2f01%2fherbs_safety_img.jpg&ehk=36SxKBb8sTZwA7I%2fMQ6%2bW6f2QL%2fEJtAuP4NxpH%2fUNHc%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 11,
      name: "Product 9",
      price: 50.0,
      quantity: 1,
      image:
        "https://www.kidsdogardening.com/wp-content/uploads/2020/01/Indoor-Herbs-1920x1280.jpeg",
    },
    {
      id: 12,
      name: "Product 9",
      price: 50.0,
      quantity: 1,
      image:
        "https://th.bing.com/th/id/R.988b5e9078051dbf7c454cf46f64ee96?rik=%2bj8LdVF%2bG7e0fg&riu=http%3a%2f%2fwww.fygconsultores.com%2fwp-content%2fuploads%2f2017%2f02%2f10-medicinal-herbs-you-can-grow-peppermint.jpg&ehk=bN4%2bIHPqGDNvQu7KxzEIqQXwJjjVKjRdsTzlY5Aq1%2bw%3d&risl=&pid=ImgRaw&r=0",
    },
  ];

  return (
    <>
    <DashboardNav/>
      <div className="py-20 bg-blue-100">
        <h1 className="text-center font-bold text-5xl text-slate-700 ">
          <span className="text-violet-700 ">Shopping</span> Cart
        </h1>

        <div className="my-10 mx-10 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Products */}
            {products.map((product) => (
              <div
                key={product.id}
                className="border-2 border-gray-300 rounded-lg p-3"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full mb-4 object-cover rounded-lg h-60"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-500 mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => addToCart({ ...product })}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Add to Cart
                  </button>
                  <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
            {/* Shopping Cart */}
            <div className="fixed top-20 right-4">
              <div className="relative">
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="bg-blue-500 text-white rounded-full p-2"
                >
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2">
                      {cart.length}
                    </span>
                  )}
                  <div>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"
                      alt=""
                      className="w-7 h-7 p-1"
                    />
                  </div>
                </button>
              </div>
            </div>
            {showCart && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg flex justify-center items-center">
                <div className="bg-white rounded-lg p-4 w-[550px] max-h-96 overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold ">Your Cart</h2>
                    <button onClick={() => setShowCart(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <ul>
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center py-2  "
                      >
                        <span className="font-semibold text-blue-600">
                          {item.name}
                        </span>
                        <div className="flex items-center font-semibold">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <span className="font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-white px-3 pb-1 rounded-lg hover:bg-red-600 bg-red-500"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between mt-4">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold">${getTotalPrice()}</span>
                  </div>
                  <Link href={"/checkout"}>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
