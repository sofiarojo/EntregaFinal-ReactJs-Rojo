import React, { useState } from "react";
import './ItemCount.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrementar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      onAdd(count);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes agregar al menos un producto al carrito',
      });
    }
  };

  return (
    <div className="container" id="itemcount">
      <div className="row mb-3">
        <div className="d-grid gap-2">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary pastel-color" onClick={decrementar}>-</button>
            <button type="button" className="btn btn-outline-primary pastel-color">{count}</button>
            <button type="button" className="btn btn-outline-primary pastel-color" onClick={incrementar}>+</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-grid gap-2">
          <button type="button" size="lg" className="btn btn-outline-primary pastel-color" onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
        <div className="d-grid gap-2">
          <Link to="/cart">
            <button type="button" size="lg" className="btn btn-outline-primary pastel-color">Finalizar compra</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
