import HomeHeader from "@/components/HomeComponents/HomeHeader/HomeHeader";
import ProductList from "@/components/Products/ProductList";
import { productList } from "@/components/Products/productsList";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleImageRenderer from "@/components/ImageRenderer/SingleImageRenderer";
import DoubleImageRenderer from "@/components/ImageRenderer/DoubleImageRenderer";
import Categories from "@/components/Categories/Categories";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <ProductList
        productArray={productList}
        productType="FLASH SALES"
        title="Today's"
        slidePerRow={1}
      />
      <SingleImageRenderer imgUrl="/images/solar-solution.webp" />
      <ProductList
        productArray={productList}
        productType="Best Selling Products"
        title="This month"
        slidePerRow={1}
      />
      <Categories title="Categories" categoriesType="Browse By Category" />
      <ProductList
        productArray={productList}
        productType="Explore Our Products"
        title="Our Products"
        slidePerRow={2}
      />
      <DoubleImageRenderer
        imgUrl1="/images/gaming.webp"
        imgUrl2="/images/MFLLaptops.webp"
      />
    </>
  );
}
