import React from 'react';

const Counter = ({ counterList }) => (
    <ul>
        {
            counterList.map((item, id) => {
                return <li key={id}>
                    <ul>
                        <li>{item.date}</li>
                        <li>{item.description}</li>
                        <li>{item.cash}</li>
                    </ul>
                </li>
            })
        }
    </ul>
)

export default Counter;