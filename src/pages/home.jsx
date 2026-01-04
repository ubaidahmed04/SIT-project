import { useEffect, useState } from "react";
import { HeroSection } from "../components/herosection";
import { ProductCard } from "../components/productCard";
import { PromoBanner } from "../components/adSection";
import ProductCardSkeleton from "../components/loaderSkeleton";

function Home() {
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(false)
    const getAllProducts = () => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProductData(data))
            .catch((err) => console.log(err))
            setLoading(false)
    }
    console.log(productData)
    useEffect(() => {
        console.log("First Time Load Product Component ");
        getAllProducts()
    }, [])

    return (
        <div className="min-h-screen">
            <HeroSection />
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full gap-3 py-6">

                {  loading ?
                    Array(8).fill(0).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))
                    :
                    productData.map((item, i) => (
                        <div key={i} className=" ">
                            <ProductCard product={item} />

                        </div>
                    ))
                }
            </div>

            <PromoBanner />

        </div>
    )
}
export default Home