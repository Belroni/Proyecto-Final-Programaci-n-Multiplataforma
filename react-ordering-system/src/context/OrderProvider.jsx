import { createContext, useState, useEffect } from "react"
import { toast } from "react-toastify";
import { categories as categoriesDB } from "../data/categories"

const OrderContext = createContext();

const OrderProvider = ({children}) => {

    const [categories, setCategories] = useState(categoriesDB);
    const [currentCategory, setCurrentCategory] = useState(categories[0])
    const [modal, setModal] = useState(false)
    const [product, setProduct] = useState({})
    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const newTotal = order.reduce( (total, product) => (product.price * product.quantity) + total, 0)
        setTotal(newTotal)
    }, [order])

    const handleClickCategory = id => {
        const category = categories.filter(category => category.id === id)[0]
        setCurrentCategory(category)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProduct = product => {
        setProduct(product)
    }

    const handleAddOrder = ({category_id, ...product}) => {
        if(order.some( orderState => orderState.id === product.id )) {
            const updatedOrder = order.map( orderState => orderState.id === product.id ? product : orderState)
            setOrder(updatedOrder)
            toast.success('Saved successfully')
        }else {
            setOrder([...order, product])
            toast.success('Added to order')
        }
    }

    const handleEditQuantity = id => {
        const productUpdate = order.filter(product => product.id === id)[0]
        setProduct(productUpdate)
        setModal(!modal)
    }
    
    const handleRemoveOrderProduct = id => {
        const updatedOrder = order.filter(product => product.id != id)
        setOrder(updatedOrder)
        toast.success('Removed from order')
    }
    return (
        <OrderContext.Provider
            value={{ 
                categories,
                currentCategory,
                handleClickCategory,
                modal,
                handleClickModal, 
                product,
                handleSetProduct,
                order,
                handleAddOrder,
                handleEditQuantity,
                handleRemoveOrderProduct,
                total
            }}
        >{children}</OrderContext.Provider>
    )
}

export {
    OrderProvider
}

export default OrderContext
