import ProductCard from './product-card';

// any is used because later we will create a product type (zod?)
// title is optional so use a ?
// limit is optional and a number
const ProductList = ({ data, title, limit }: { data: any; title?: string; limit?: number }) => {
  // if limit is provided, slice the data to the limit
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        // mobile - 1 column then 2,3,4 columns on larger screens
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product: any) => (
            // <div>{product.name}</div>
            // need a unique key for each product otherwise error
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
