import { createContext, useState } from "react"
import { categories as categoriesDB } from "../data/categories"

const OrderContext = createContext();

const OrderProvider = ({children}) => {

    const [categories, setCategories] = useState(categoriesDB);
    const [currentCategory, setCurrentCategory] = useState(categories[0])

    const handleClickCategory = () =>
    {
        console.log('click en category')
    } 

    return (
        <OrderContext.Provider
            value={{ 
                categories,
                currentCategory,
                handleClickCategory
            }}
        >{children}</OrderContext.Provider>
    )
}

export {
    OrderProvider
}

export default OrderContext
