import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AddLecture from '../components/AddLecture';
import { baseUrl } from '../shared';
import { LoginContext } from '../App';
import useFetch from '../hooks/UseFetch';

export default function Lectures() {
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    //const [Lectures, setLectures] = useState();
    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show);
    }

    const location = useLocation();
    const navigate = useNavigate();

    const url = baseUrl + 'api/Lectures/';
    const {
        request,
        appendData,
        data: { Lectures } = {},
        errorStatus,
    } = useFetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('access'),
        },
    });

    useEffect(() => {
        request();
    }, []);

    //useEffect(() => {
    //    console.log(request, appendData, Lectures, errorStatus);
    //});

    function newLecture(name, Course) {
        appendData({ name: name, Course: Course });

        if (!errorStatus) {
            toggleShow();
        }
    }

    return (
        <>
            <h1>Here are our Lectures:</h1>
            {Lectures
                ? Lectures.map((Lecture) => {
                      return (
                          <div className="m-2" key={Lecture.id}>
                              <Link to={'/Lectures/' + Lecture.id}>
                                  <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                                      {Lecture.name}
                                  </button>
                              </Link>
                          </div>
                      );
                  })
                : null}

            <AddLecture
                newLecture={newLecture}
                show={show}
                toggleShow={toggleShow}
            />
        </>
    );
}
