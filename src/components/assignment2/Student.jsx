import React from 'react';

export default function Student({ name, age, course }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Course: {course}</p>
        </div>
    );
}
