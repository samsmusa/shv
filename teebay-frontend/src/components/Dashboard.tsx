// src/components/Dashboard.tsx

import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: string;
  rentPerHour: string;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Product 1', description: 'Description of Product 1', category: 'Category A', price: '100', rentPerHour: '10' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', category: 'Category B', price: '200', rentPerHour: '20' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', category: 'Category C', price: '300', rentPerHour: '30' },
    // Add more products as needed
  ]);

  const handleDelete = (productId: number) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleEdit = (updatedProduct: Product) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  const handleSave = (newProduct: any) => {
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    setProducts([...products, { ...newProduct, id: newId }]);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center mt-5">Dashboard</h1>
      <ProductList products={products} onDelete={handleDelete} onEdit={handleEdit} />
      <AddProductForm onSave={handleSave} />
    </div>
  );
};

export default Dashboard;
