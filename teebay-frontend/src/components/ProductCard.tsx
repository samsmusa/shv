import React from 'react'

import { Card } from 'flowbite-react';
interface Product {
    id: number;
    name: string;
    description: string;
    category: string;
    price: string;
    rentPerHour: string;
  }
  

const ProductCard = ({product}:{product:Product}) => {
  return (
    <Card key={product.id} className="relative p-4 bg-white shadow-md rounded-lg my-2">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className='flex gap-2'>
              </div>
            </div>
            <p className="text-gray-700">Category: {product.category}</p>
            <p className="text-gray-700">Price: {product.price}</p>
            <p className="text-gray-700">Description: {product.description}</p>
          </Card>
  )
}

export default ProductCard