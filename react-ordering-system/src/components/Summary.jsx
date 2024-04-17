import { moneyFormat } from "../helpers";
import useOrder from "../hooks/useOrder"
import ProductSummary from "./ProductSummary";

export default function Summary() {
  
  const { order, total } = useOrder();
  const confirmOrder = () => order.length === 0

  return (
    <aside className='md:w-72 h-screen overflow-y-scroll p-5'>
      <h1 className="text-4xl font-black">
        My Order 
      </h1>
      <p className="text-lg my-5">
        Aqui veras el resumen 
      </p>
      <div className="py-10">
        {order.length === 0 ? (
          <p className="text-center text-2xl">There are no items in your order yet</p>
        ) : (
          order.map(product => (
            <ProductSummary 
              key={product.id}
              product = {product}
            />
          ))
        )}
      </div>
      <p className="text-xl mt-10">
        Total: {''}
        {moneyFormat(total)}
      </p>
      <form className="w-full">
        <div className="mt-5">
          <input 
            type="submit"
            className={`${confirmOrder() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
            value="Confirm Order"
            disabled={confirmOrder()}
          />

        </div>
      </form>
    </aside>
  )
}
