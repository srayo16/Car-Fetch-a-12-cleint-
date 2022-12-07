import React, { useEffect, useState } from 'react';

const UseParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('https://car-fetch-a-12-server.onrender.com/parts')
            .then(res => res.json())
            .then(data => setParts(data.reverse()))
    }, [])

    return [parts, setParts];
};

export default UseParts;