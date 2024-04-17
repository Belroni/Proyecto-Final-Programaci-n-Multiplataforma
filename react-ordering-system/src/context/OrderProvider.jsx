import { createContext, useState } from "react"
import { categories as categoriesDB } from "../data/categories"

const OrderContext = createContext();

const OrderProvider = ({children}) => {

    const [categories, setCategories] = useState(categoriesDB);
    const [currentCategory, setCurrentCategory] = useState(categories[0])
    const [modal, setModal] = useState(false)
    const [product, setProduct] = useState({})


    const handleClickCategory = id => {
        const category = categories.filter(category => category.id === id)[0]
        setCurrentCategory(category)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handlesetProduct = product => {
        setProduct(product)
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
                handlesetProduct
            }}
        >{children}</OrderContext.Provider>
    )
}

export {
    OrderProvider
}

export default OrderContext
