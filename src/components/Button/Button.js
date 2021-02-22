import React from 'react';

const Button = ({ loadMore }) => {
    return (
        <button onClick={loadMore} className="Button" type="button">Load more</button>
    );
};

export default Button;