// src/components/Buy.tsx

import React from "react";
import "flowbite";
import { Button } from "flowbite-react";

interface ProductProps {
  name: string;
  category: string;
  price: string;
  rentPerHour: string;
  description: string;
}

const Buy: React.FC<ProductProps> = ({
  name,
  category,
  price,
  rentPerHour,
  description,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="w-full p-4">
          <h2 className="text-gray-900 font-bold text-2xl mb-2">{name}</h2>
          <p className="text-gray-700 font-semibold text-sm mb-1">{category}</p>
          <p className="text-gray-700 text-lg mb-2">Price: ${price}</p>
          <p className="text-gray-700 text-lg mb-2">
            Rent per hour: ${rentPerHour}
          </p>
          <p className="text-gray-600 text-base mb-4">{description}</p>
          <div className="mt-4 flex justify-end gap-5">
            <Button className=" bg-blue-500 text-white rounded-full">
              Buy
            </Button>
            <Button className=" bg-blue-500 text-white rounded-full">
              Rent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
