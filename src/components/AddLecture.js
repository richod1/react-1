import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DatePicker from './DatePicker';


export default function AddLecture(props) {
    const [name, setName] = useState('');
    const [Course, setCourse] = useState('');
    const [show, setShow] = useState(props.show);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleClick = () => {
      setShowDatePicker(true);
    };
  

    return (
        <>
            <button
                onClick={props.toggleShow}
                className="block m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                + Add Lecture
            </button>

            <Modal
                show={props.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Lecture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setName('');
                            setCourse('');
                            props.newLecture(name, Course);
                        }}
                        id="editmodal"
                        className="w-full max-w-sm"
                    >
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="name"
                                >
                                    Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    placeholder="Degraft"
                                    type="text"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    htmlFor="Course"
                                >
                                    Course
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="Course"
                                    placeholder="Computing"
                                    type="text"
                                    value={Course}
                                    onChange={(e) => {
                                        setCourse(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    htmlFor="Course"
                                >
                                    Course
                                </label>
                            </div>
                            <div className="md:w-2/3">
                            <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            lecturer presence
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Present</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Late</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Absent</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                                {/* <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="Course"
                                    placeholder="Computing"
                                    type="text"
                                    value={Course}
                                    onChange={(e) => {
                                        setCourse(e.target.value);
                                    }}
                                /> */}

<button
        onClick={handleClick}
        className="bg-purple-600 hover:bg-purple-700 
        text-white font-bold py-2 px-4 rounded"
      >
        Add Date
      </button>

      {showDatePicker && <DatePicker />}
                            </div>
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                        onClick={props.toggleShow}
                    >
                        Close
                    </button>
                    <button
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        form="editmodal"
                    >
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
