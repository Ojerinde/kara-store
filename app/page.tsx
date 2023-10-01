import HomeHeader from "@/components/HomeComponents/HomeHeader/HomeHeader";
import ProductList from "@/components/Products/ProductList";
import { productList } from "@/components/Products/productsList";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <ProductList
        productArray={productList}
        apartmentType="FLASH SALES"
        title="Today's"
      />
    </>
  );
}
