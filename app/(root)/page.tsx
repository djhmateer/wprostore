// import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

// import the action
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  // console.log(sampleData);

  return (
    // <ProductList data={sampleData.products} title="Newest Arrivals" limit={4} />

    <ProductList data={latestProducts} title="Newest Arrivals" />
  );
};

export default HomePage;
