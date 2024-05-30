import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductCard2 from "../components/Route/ProductCard2/ProductCard2";
import { productItems } from "../data/ProductItems";
import styles from "../styles/styles";
import ProductList from "../components/ProductList/ProductList";


const ProductsPage2 = () => {
    const [searchParams] = useSearchParams();
    const categoryData2 = searchParams.get("category");
    const [data2, setData2] = useState([]);

    useEffect(() => {
        if (categoryData2 === null) {
            const d2 =
                productItems && productItems.sort((a, b) => a.total_sell - b.total_sell);
            setData(d);
        } else {
            const d2 =
                productItems && productItems.filter((i) => i.category === categoryData2);
            setData(d2);
        }
        //    window.scrollTo(0,0);
    }, []);

    return (
        <div>
            <Header activeHeading={3} />
            <br />
            <ProductList />
            <br />
            <div className={`${styles.section}`}>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                    {data2 && data2.map((i, index) => <ProductCard2 data2={i} key={index} />)}
                </div>
                {data2 && data2.length === 0 ? (
                    <h1 className="text-center w-full pb-[100px] text-[20px]">
                        No products Found!
                    </h1>
                ) : null}
            </div>
            <Footer />
        </div>
    );
};

export default ProductsPage2;
