import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Buy from "./Buy";
import ConfirmBuy from "./ConfirmBuy";
import RentModal from "./RentModal"; // Import RentModal component
import { Button, Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isRentModalOpen, setIsRentModalOpen] = useState(false); // State for RentModal
  const navigator = useNavigate()

  const data = React.useMemo(() => {
    return Array(10)
      .fill(1)
      .map((p, index) => ({
        id: index,
        name: `Product ${index + 1}`,
        description: `Description for Product ${index + 1}`,
        category: "Category",
        price: `${(index + 1) * 10}`,
        rentPerHour: `${(index + 1) * 2}`,
      }));
  }, []);

  const handleCardClick =(product)=>(event)=> {
    // setSelectedProduct(product);
    // setIsBuyModalOpen(true);
    console.log('product');
    navigator(`/product/${product?.id}`)
    
  };

  const handleBuyClose = () => {
    setIsBuyModalOpen(false);
    setSelectedProduct(null);
  };

  const handleConfirmClose = () => {
    setIsConfirmModalOpen(false);
    setSelectedProduct(null);
  };

  const handleRentClick = () => {
    setIsRentModalOpen(true);
  };

  const handleRentClose = () => {
    setIsRentModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-4">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} onClick={handleCardClick(product)} />
        ))}
      </div>
    </div>
  );
};


export default AllProducts;
