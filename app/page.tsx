import HomeHeader from "@/components/HomeComponents/HomeHeader/HomeHeader";
import ProductList from "@/components/Products/ProductList";
import { productList } from "@/components/Products/productsList";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <ProductList
        productArray={productList}
        productType="FLASH SALES"
        title="Today's"
      />
    </>
  );
}
