import React, { useEffect, useState } from 'react';

const UseParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data.reverse()))
    }, [])

    return [parts, setParts];
};

export default UseParts;