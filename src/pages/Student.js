import '../index.css';
import Students from  '../components/Students';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddStudent from '../components/AddStudent';
import EditStudent from '../components/EditStudent';
import Header from '../components/Header';


function Student() {
    const [student, setStudent] = useState([
        {
            id: 1,
            name: 'Caleb',
            Course: 'Java',
            img: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg',
        },
        {
            id: 2,
            name: 'Sal',
            Course: 'PHP',
            img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
        },
        {
            id: 3,
            name: 'John',
            Course: 'Accounting.',
            img: 'https://images.pexels.com/photos/2095582/pexels-photo-2095582.jpeg',
        },
        {
            id: 4,
            name: 'Melanie',
            Course: 'Software Engineer',
            img: 'https://images.pexels.com/photos/3760583/pexels-photo-3760583.jpeg',
        },
        {
            id: 5,
            name: 'Corey',
            Course: 'C++',
            img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
        },
        {
            id: 6,
            name: 'Jake',
            Course: 'HTML',
            img: 'https://images.pexels.com/photos/2225298/pexels-photo-2225298.jpeg',
        },
    ]);

    function updateStudent(id, newName, newCourse) {
        const updatedStudent = student.map((Student) => {
            if (id == student.id) {
                return { ...Student, name: newName, Course: newCourse };
            }

            return Student;
        });
        setStudent(updatedStudent);
    }

    function newStudent(name, Course, img) {
        const newStudent = {
            id: uuidv4(),
            name: name,
            Course: Course,
            img: img,
        };
        setStudent([...Student, newStudent]);
    }

    const showStudent = true;
    return (
        <div className="">
            {showStudent ? (
                <>
                    <div className="flex flex-wrap justify-center">
                        {student.map((Student) => {
                            const EditStudents = (
                                <EditStudent
                                    id={Student.id}
                                    name={Student.name}
                                    Course={Student.Course}
                                    updateStudent={updateStudent}
                                />
                            );
                            return (
                                <Students
                                    key={Student.id}
                                    id={Student.id}
                                    name={Student.name}
                                    Course={Student.Course}
                                    img={Student.img}
                                    EditStudent={EditStudents}
                                />
                            );
                        })}
                    </div>
                    <AddStudent newStudent={newStudent} />
                </>
            ) : (
                <p>You cannot see the Student</p>
            )}
        </div>
    );
}

export default Student;
