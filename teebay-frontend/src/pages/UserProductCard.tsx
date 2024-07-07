import React, {useState} from "react";
import {Card, Button, Modal, Kbd} from "flowbite-react";
import EditProductForm from "../components/EditProductForm";
import AddProductForm from "../components/AddProductForm";

interface Product {
    id: number;
    title: string;
    description: string;
    categories: any;
    price: string;
    rentPerHour: string;
}

interface UserProductListProps {
}

const UserOwnProductCard = ({product}: { product: Product }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [productIdToDelete, setProductIdToDelete] = useState<number | null>(
        null
    );
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedProduct, setEditedProduct] = useState<Product | null>(null);


    const handleDeleteClick = (productId: number) => {
        setProductIdToDelete(productId);
        setShowConfirmation(true);
    };

    const handleConfirmDelete = () => {
        if (productIdToDelete !== null) {
            // onDelete(productIdToDelete);
            setShowConfirmation(false);
            setProductIdToDelete(null);
        }
    };

    const handleCancelDelete = () => {
        setShowConfirmation(false);
        setProductIdToDelete(null);
    };

    const handleEditClick = (product: Product) => {
        setEditedProduct(product);
        setShowEditModal(true);
    };

    const handleSaveEdit = (updatedProduct: Product) => {
        // onEdit(updatedProduct);
        setShowEditModal(false);
        setEditedProduct(null);
    };

    const handleCancelEdit = () => {
        setShowEditModal(false);
        setEditedProduct(null);
    };

    return (
        <div className="my-1.5">
            <div className="grid grid-cols-1 gap-6">
                <Card
                    key={product?.id}
                    className="relative p-4 bg-white shadow-md rounded-lg"
                >
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold">{product?.title}</h3>
                        <div className="flex gap-2">
                            <Button
                                onClick={() => handleEditClick(product)}
                                className="bg-blue-500 text-white"
                            >
                                Edit
                            </Button>
                            <Button
                                onClick={() => handleDeleteClick(product?.id)}
                                className="bg-red-500 text-white"
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                    <p className="text-gray-700">Category: {product?.categories?.map((cat) => <Kbd
                        className="ml-1">{cat?.name}</Kbd>)}</p>
                    <p className="text-gray-700">Price: {product?.price}</p>
                    <p className="text-gray-700">Description: {product?.description}</p>
                </Card>
            </div>

            {/* Confirmation Modal */}
            <Modal show={showConfirmation} onClose={handleCancelDelete}>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
                    <p className="text-gray-700 mb-4">
                        Are you sure you want to delete this product?
                    </p>
                    <div className="flex justify-end">
                        <Button
                            onClick={handleCancelDelete}
                            className="mr-2 bg-green-400 text-white"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleConfirmDelete}
                            color="red"
                            className="bg-red-500 text-white"
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            </Modal>

            {/* Edit Modal */}
            {editedProduct && (
                <Modal show={showEditModal} onClose={handleCancelEdit}>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-4">Edit Product</h3>
                        <EditProductForm
                            product={editedProduct}
                            onSave={handleSaveEdit}
                            onCancel={handleCancelEdit}
                        />
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default UserOwnProductCard;
