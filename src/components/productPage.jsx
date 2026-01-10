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
    // console.log(productData)
    
    const filteredProduct = productData.filter(item => item.title.toLowerCase().includes(searchProduct.toLowerCase()))
    
    
    
    
    
    const filterProduct = productData.filter(item => item.title.toLowerCase().includes(searchProduct.toLowerCase()) && selectedCategory === "" || item.category == selectedCategory )
     const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const lastIndex = currentPage * itemsPerPage; // 1 * 5 = 5
    const firstIndex =  lastIndex - itemsPerPage //  5 - 5  = 0
    const paginatedProduct = filterProduct.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(filterProduct.length / itemsPerPage)


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
                    paginatedProduct.map((item, i) => (
                        <div key={i} className=" ">
                            <ProductCard product={item} />

                        </div>
                    ))
                }
                <br />
                <div className=' w-fit'>
                {
                    [...Array(totalPages).keys()].map((page)=>(
                        <button key={page + 1}
                        className='border bg-gray-400  p-4 m-1'
                        
                        onClick={()=> setCurrentPage(page + 1 )}
                        >
                             {page + 1}
                        </button>
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default ProductPage