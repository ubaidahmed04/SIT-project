import React, { useEffect, useState } from 'react'
import ProductCardSkeleton from './loaderSkeleton'
import { ProductCard } from './productCard'
import { Search } from 'lucide-react'

const ProductPage = () => {
    const [productData, setProductData] = useState([])
    const [category, setCategory] = useState([])
    const[ selectedCategory, setSelectedCategory ] = useState("")
    const [searchProduct, setSearchProduct] = useState("")
    const [loading, setLoading] = useState(false)
    const getAllProducts = () => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProductData(data))
            .catch((err) => console.log(err))
        setLoading(false)
    }
    const getAllCategory = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => setCategory(data))
            .catch((err) => console.log(err))
    }
    console.log(productData)
    
    const filterProduct = productData.filter(item => item.title.toLowerCase().includes(searchProduct.toLowerCase()) && selectedCategory === "" || item.category == selectedCategory )
    console.log(filterProduct)
    useEffect(() => {
        console.log("First Time Load Product Component ");
        getAllProducts()
        getAllCategory()
    }, [])


    return (
        <>
            <div className=" flex items-center bg-gray-100 rounded-full px-4 py-2 my-4 w-64 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
                <Search size={18} className="text-gray-400" />
                <input
                    type="text"
                    placeholder="Search products..."
                    onChange={(e)=>setSearchProduct(e.target.value)}
                    value={searchProduct}
                    className="bg-transparent border-none focus:outline-none text-sm ml-2 w-full"
                />
            </div>
            <div>
                <select name=" " id="" onChange={(e)=>setSelectedCategory(e.target.value)} className=''>
                    <option value="">All</option>
                    {
                        category.map((item)=>(
                            <option value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full gap-3 py-6">

                {loading ?
                    Array(8).fill(0).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))
                    :
                    filterProduct.map((item, i) => (
                        <div key={i} className=" ">
                            <ProductCard product={item} />

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ProductPage