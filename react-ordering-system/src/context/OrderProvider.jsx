import { createContext, useState, useEffect } from "react"
import { toast } from "react-toastify";
import clientAxios from "../config/axios";

const OrderContext = createContext();

const OrderProvider = ({children}) => {

    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState({})
    const [modal, setModal] = useState(false)
    const [product, setProduct] = useState({})
    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const newTotal = order.reduce( (total, product) => (product.price * product.quantity) + total, 0)
        setTotal(newTotal)
    }, [order])

    const getCategories = async () => {
        try {
            const {data} = await clientAxios('/api/categories')
            setCategories(data.data)
            setCurrentCategory(data.data[0])
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories();
    }, [])

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

    const handleSubmitNewOrder= async (logout) => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const {data} = await clientAxios.post('/api/orders', 
            {
                total,
                products: order.map(product => {
                    return {
                        id: product.id,
                        quantity: product.quantity
                    }
                })
            }, 
            {   // Autenticar usuario
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success(data.message);
            setTimeout(() => {
                 setPedido([])
            }, 1000);

            // Cerrar la sesión del usuario
            setTimeout(() => {
                localStorage.removeItem('AUTH_TOKEN');
                    logout();
            }, 3000);
        } catch (error) {
            console.log(error)
        }
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
                total,
                handleSubmitNewOrder
            }}
        >{children}</OrderContext.Provider>
    )
}

export {
    OrderProvider
}

export default OrderContext
