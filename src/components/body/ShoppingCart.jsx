import React, { useState, useEffect } from 'react';

function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    // Actualiza el total cada vez que cambia el carrito
    useEffect(() => {
        let sum = 0;
        cart.forEach(item => {
            sum += item.quantity * item.price;
        });
        setTotal(sum);
    }, [cart]);

    function addToCart(product) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        const index = cart.findIndex(item => item.id === product.id);
        if (index !== -1) {
            const updatedCart = [...cart];
            updatedCart[index].quantity++;
            setCart(updatedCart);
        } else {
            // Si el producto no está en el carrito, lo agrega con cantidad 1
            const newProduct = { ...product, quantity: 1 };
            setCart([...cart, newProduct]);
        }
    }

    function removeFromCart(productId) {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    }

    function updateQuantity(productId, quantity) {
        const updatedCart = [...cart];
        const index = updatedCart.findIndex(item => item.id === productId);
        updatedCart[index].quantity = quantity;
        setCart(updatedCart);
    }

    return (
        <div>
            <h1>Carrito de compra</h1>
            <div>
                {cart.length === 0 ? (
                    <p>No hay productos en el carrito</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio unitario</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={e => updateQuantity(item.id, e.target.value)}
                                        />
                                    </td>
                                    <td>{item.quantity * item.price}</td>
                                    <td>
                                        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <p>Total: {total}</p>
            <button onClick={() => setCart([])}>Vaciar carrito</button>
            <hr />
            <h2>Productos disponibles</h2>
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Precio: {product.price}</p>
                        <button onClick={() => addToCart(product)}>Agregar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 },
    { id: 4, name: 'Producto 4', price: 40 },]

    export default ShoppingCart
