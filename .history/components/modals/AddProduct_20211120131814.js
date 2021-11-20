import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import FieldArray from "../lineItems/nestedFieldArrays";
import { useSetRecoilState } from "recoil";
import { v4 as uuid4 } from "uuid";
import { products } from "../../store";
import { useForm } from "react-hook-form";
import Prueba from '../lineItems/prueba'
import { v4 as uuidv4 } from 'uuid';


const AddProduct = (props) => {
  const { show, id, handleClose } = props;
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState(0.0);
  // const [lItem, setLitem] = useState([]);

  const setProducts = useSetRecoilState(products);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeColor = (e) => {
    setColor(e.target.value);
  };

  const onChangeSize = (e) => {
    setSize(e.target.value);
  };

  // const onChangeLitem= (e) => {
  //   setLitem(e.target.value);
  // };

  const addProduct = () => {
    setProducts((oldList) => [
      ...oldList,
      {
        id: uuid4(),
        name: name,
        color: color,
        size: size,
        inputFields: inputFields,
      },
    ]);
    resetForm();
    handleClose();
  };

  const resetForm = () => {
    setName("");
    setColor("");
    setSize(0.0);
  };

  let price
  let quantity

  //---------------------------------------------- input dinamicos----------------------------------------------
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), price: '', quantity: '', totalPrice: price * quantity },
  ]);
  console.log(inputFields, 'whats coming out of this variable - lets check')

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("InputFields", inputFields);
  // };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setInputFields(newInputFields);
  }
  
  const handleAddFields = (e) => {
    e.preventDefault();
    console.log(e)

    setInputFields([...inputFields, { id: uuidv4(), price: 0, quantity: 0, totalPrice: 0 }])
  }

  const handleRemoveFields = id => {
    const values = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }
 

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                placeholder="Enter the Product Name"
                onChange={(e) => onChangeName(e)}
              />
            </Form.Group>

            <Form.Group controlId="color">
              <Form.Label>Color:</Form.Label>
              <Form.Control
                type="text"
                value={color}
                placeholder="Enter the Product Color"
                onChange={(e) => onChangeColor(e)}
              />
            </Form.Group>

            <Form.Group controlId="size">
              <Form.Label>Size:</Form.Label>
              <Form.Control
                type="number"
                value={size}
                placeholder="Enter the Product Size"
                onChange={(e) => onChangeSize(e)}
              />
            </Form.Group>
              <Form.Control
                type="number"
                value={quantity}
                placeholder="Enter the Product Quantity"
                onChange={(e) => onChangeQuantity(e)}
              />
            </Form.Group>
            <Form.Group controlId="lineItems">
              <Form.Label>lineItems:</Form.Label>
              {inputFields.map(inputField => (
                <div key={inputField.id}>
                  <span>Price:</span>
                  <Form.Control
                    name="priceInputName"
                    label="price"
                    placeholder="price"
                    variant="filled"
                    type="number"
                    value={inputField.priceInputName}
                    // onChange={(e) => onChangeLitem(e)}
                    onChange={event => handleChangeInput(inputField.id, event)}
                  />
                  <span>Quantity:</span>
                  <Form.Control
                    name="quantityInputName"
                    type="number"
                    label="Quantity"
                    placeholder="Quantity"
                    variant="filled"
                    value={inputField.quantityInputName}
                    // onChange={(e) => onChangeLitem(e)}
                    onChange={event => handleChangeInput(inputField.id, event)}
                  />
                  <span>Total:</span>
                  <button disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                    -
                  </button>
                  <button onClick={handleAddFields}>
                    +
                  </button>
                </div>
              ))}

            </Form.Group>

          </Form>
          {/* <FieldArray
        {...{ control, register, getValues, defaultValues, setValue, errors }}
      /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" size="lg" onClick={() => addProduct()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default AddProduct;

// function replaceProduct(products, i, newVal) {
//   return [...products.slice(0, i), newVal, ...products.slice(i + 1)];
// }