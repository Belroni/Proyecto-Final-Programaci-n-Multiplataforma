import { useState, useEffect } from "react"; 
import useOrder from "../hooks/useOrder"
import { moneyFormat } from "../helpers";

export default function ProductModal() {

    const { product, handleClickModal, handleAddOrder, order } = useOrder();
    const [quantity, setQuantity] = useState(1);
    const [edition, setEdition] = useState(false);

    useEffect(() => {
        if(order.some( orderState => orderState.id === product.id )) {
            const productEdition = order.filter( orderState => orderState.id === product.id)[0]
            setQuantity(productEdition.quantity)
            setEdition(true)
        }
    }, [order])

  return (
    <div className="md:flex 
    gap-10">
      <div className="md:w-1/3">
        <img
            alt={`Product image ${product.name}`}
            src={`/img/${product.image}.jpg`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
            <button onClick={handleClickModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">
            {product.name}
        </h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
            {moneyFormat(product.price)}
        </p>

        <div className="flex gap-4 mt-5">
            <button
                type="button"
                onClick={() => {
                    if(quantity <= 1 ) return
                    setQuantity(quantity - 1)
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
            <p className="text-3xl">{quantity}</p>
            <button
                type="button"
                onClick={() => {
                    if(quantity >= 5 ) return
                    setQuantity(quantity + 1)
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
        </div>

        <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
            onClick={() => {
                handleAddOrder({...product, quantity})
                handleClickModal()
            }}
        >
        {edition ? 'Save changes' : 'Add to order'}
        </button>
      </div>
    </div>
  )
}
