// src/components/AddProductForm.tsx

import React, { useState } from 'react';
import { Modal, Button, TextInput, Label, Select } from 'flowbite-react';

interface AddProductFormProps {
  onSave: (product: any) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onSave }) => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    rentPerHour: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  const handleSave = () => {
    onSave(newProduct);
    setShowModal(false);
    setStep(1);
    setNewProduct({ name: '', category: '', description: '', price: '', rentPerHour: '' });
  };

  const handleCancel = () => {
    setShowModal(false);
    setStep(1);
    setNewProduct({ name: '', category: '', description: '', price: '', rentPerHour: '' });
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)} className="bg-green-500 text-white mt-4">Add Product</Button>
      <Modal show={showModal} onClose={handleCancel}>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Add New Product</h3>
          {step === 1 && (
            <>
              <div className="mb-4">
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</Label>
                <TextInput id="name" name="name" value={newProduct.name} onChange={handleInputChange} required />
              </div>
              <div className="flex justify-end">
                <Button onClick={handleCancel} className="mr-2 bg-gray-400 text-white">Cancel</Button>
                <Button onClick={handleNextStep} className="bg-blue-500 text-white">Next</Button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="mb-4">
                <Label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</Label>
                <Select id="category" name="category" value={newProduct.category} onChange={handleInputChange} required>
                  <option value="">Select Category</option>
                  <option value="Category A">Category A</option>
                  <option value="Category B">Category B</option>
                  <option value="Category C">Category C</option>
                  {/* Add more categories as needed */}
                </Select>
              </div>
              <div className="flex justify-between">
                <Button onClick={handlePreviousStep} className="bg-blue-500 text-white">Previous</Button>
                <Button onClick={handleNextStep} className="bg-blue-500 text-white">Next</Button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <div className="mb-4">
                <Label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</Label>
                <TextInput id="description" name="description" value={newProduct.description} onChange={handleInputChange} required />
              </div>
              <div className="flex justify-between">
                <Button onClick={handlePreviousStep} className="bg-blue-500 text-white">Previous</Button>
                <Button onClick={handleNextStep} className="bg-blue-500 text-white">Next</Button>
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <div className="mb-4">
                <Label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</Label>
                <TextInput id="price" name="price" type="number" value={newProduct.price} onChange={handleInputChange} required />
              </div>
              <div className="mb-4">
                <Label htmlFor="rentPerHour" className="block text-sm font-medium text-gray-700">Rent per Hour</Label>
                <TextInput id="rentPerHour" name="rentPerHour" type="number" value={newProduct.rentPerHour} onChange={handleInputChange} required />
              </div>
              <div className="flex justify-between">
                <Button onClick={handlePreviousStep} className="bg-blue-500 text-white">Previous</Button>
                <Button onClick={handleSave} className="bg-blue-500 text-white">Save</Button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default AddProductForm;
