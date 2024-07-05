import React from 'react'
import ProductCard from './ProductCard';

const BorrowProducts = () => {
    const products = React.useMemo(() => {
        return Array(10)
          .fill(1)
          .map((p, index) => {
            return {
              id: index,
              name: "string",
              description: "string",
              category: "string",
              price: "string",
              rentPerHour: "string",
            };
          });
      }, []);
  return (
    
    <div>{products.map((product)=><ProductCard product={product}/>)}</div>
  )
}

export default BorrowProducts