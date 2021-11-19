import React, { useState } from "react";
import { Button} from "react-bootstrap";
import CreateModal from "./modals/AddProduct";


const AddProduct = () => {
  const [showCreate, setShowCreate] = useState(false);
  const handleCreateClose = () => setShowCreate(false);
  const handleCreateShow = () => setShowCreate(true);
  const CreateProduct = () => {
    handleDeleteShow();
  };
  return (
    <>
        <Button variant="primary" size="lg" onClick={() => CreateProduct()}>
          Add
        </Button>

        <CreateModal
          show={showCreate}
          id={userId4Actions}
          handleClose={handleCreateClose}
        />
    </> 
  );
};

export default AddProduct;