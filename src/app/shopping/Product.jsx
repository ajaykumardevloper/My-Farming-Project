/* eslint-disable react/prop-types */
export default function Product({ product, cart,setCart }) {

  const addCart =()=> {
    setCart([...cart,product])
  }
  const removeCart =()=> {
    setCart(cart.filter((c)=>c.id!== product.id))
  }
  return (
    <>
      <div key={product.id} className="w-52">
        <div className="w-full h-52">
          <img src={product.src} alt="" className="w-full h-full rounded-lg object-cover" />
        </div>
        <div className="text-center">
          <h3 className="my-3 font-semibold text-lg ">{product.name}</h3>
          <p className="my-3"> Price Rs :{product.amt}</p>
          {cart.includes(product)? <button onClick={removeCart} className="bg-red-400  hover:text-white font-semibold  w-full h-10 rounded-lg">Remove to Cart</button> : <button onClick={addCart}className="bg-green-400 hover:text-white font-semibold  w-full h-10 rounded-lg">Add to Cart</button>}
        </div>
      </div>
    </>
  );
}
