import { Moneyformat } from "../helpers"

export default function Product({product}) {
    const { name, image, price } = product
    return (
        <div className='border p-3 shadow bg-white'>
            <img
                alt={`${name} product`}
                className='w-full'
                src={`/img/${image}.jpg`}
            />
            <div className='p-5'>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <p className='mt-5 font-black text-4xl text-amber-500'>
                    { Moneyformat(price)}
                </p>
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                >
                    Add
                </button>
            </div>
        </div>
    )
}
