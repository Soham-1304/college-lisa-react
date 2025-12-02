import React from 'react';
import Student from './Student';

const students = [
    { id: 1, name: 'Soham', age: 21, course: 'Computer Science' },
    { id: 2, name: 'Rahul', age: 22, course: 'Mechanical Engineering' },
    { id: 3, name: 'Priya', age: 20, course: 'Electronics' },
];

export default function StudentList() {
    return (
        <div>
            <h1>Student List</h1>
            {students.map((student) => (
                <Student
                    key={student.id}
                    name={student.name}
                    age={student.age}
                    course={student.course}
                />
            ))}
        </div>
    );
}
