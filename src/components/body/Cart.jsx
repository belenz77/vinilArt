import React, { useState, useEffect } from "react";

const Cart = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [totalItem, setTotalItem] = useState(totalItem2());
    const [totalCart, setTotalCart] = useState(totalCart());
    const divisa = "€";

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        setTotalItem(totalItem2());
        setTotalCart(totalCart());
    }, [cart]);


    const printCart = () => {
        return cart.map((item) => {
            const totalProduct = item.quantity * item.price;
            return (
                <tr key={item.id}>
                    <td style={{ height: "15vh" }}>
                        <img src={item.image} style={{ height: "100%" }} alt="Product" />
                    </td>
                    <td>
                        <h5>{item.name}</h5>
                        <button onClick={() => deleteProduct(item.id)}>Borrar</button>
                    </td>
                    <td>
                        <p>
                            {item.price}
                            {divisa}
                        </p>
                    </td>
                    <td className="itemQuantity">
                        <button onClick={() => addAndDelete(item.id, "subtract")} data-type="subtract">
                            -
                        </button>
                        <p>{item.quantity}</p>
                        <button onClick={() => addAndDelete(item.id, "add")} data-type="add">
                            +
                        </button>
                    </td>
                    <td>
                        <p>
                            {totalProduct}
                            {divisa}
                        </p>
                    </td>
                </tr>
            );
        });
    };

    const addAndDelete = (id, order) => {
        const newCart = cart.map((item) => {
            if (item.id === id) {
                if (order === "add") {
                    item.quantity++;
                } else {
                    item.quantity--;
                }
            }
            return item;
        });
        setCart(newCart.filter((item) => item.quantity > 0));
    };

    const deleteProduct = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    };

    const clearCart = () => {
        localStorage.clear();
        setCart([]);
        setTotalItem(0);
        setTotalCart(0);
    };

    const renderIndex = () => {
        const newProducts = products.filter((item) => item.category === "New");
        const productProducts = products.filter((item) => item.category === "Products");
        const exclusiveProducts = products.filter((item) => item.category === "Exclusive");

        return (
            <div>
                <div id="new">{newProducts.map((item) => printNew(item))}</div>
                <div id="products">{productProducts.map((item) => printNew(item))}</div>
                <div id="exclusive">{exclusiveProducts.map((item) => printNew(item))}</div>
            </div>
        );
    };

    const printNew = (item) => {
        const shoppingButton = () => {
            const exist = cart.some((product) => product.id === item.id);
            if (exist) {
                const newCart = cart.map((product) => {
                    if (product.id === item.id) {
                        product.quantity++;
                    }
                    return product;
                });
                setCart(newCart);
            }
        }
    }

}
            export default Cart;

