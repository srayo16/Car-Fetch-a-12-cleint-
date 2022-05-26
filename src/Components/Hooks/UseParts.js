import React, { useEffect, useState } from 'react';

const UseParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-atoll-13213.herokuapp.com/parts', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setParts(data.reverse()))
    }, [])

    return [parts, setParts];
};

export default UseParts;