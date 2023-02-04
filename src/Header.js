import React from 'react';
import { useSelector } from 'react-redux'

function Header(props)
{
    const { count } = useSelector((state) => state.cart);
    return (
        <div style={{}}>
            Total Items In Cart: {count}
        </div>
    );
}

export default Header;