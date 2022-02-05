import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserList.css'




function UserList() {
    const [user, setUser] = useState([])
    useEffect(() =>
        axios.get('https://jsonplaceholder.typicode.com/users')

            .then(result => {
                console.log(result)
                setUser(result.data)
            })
            .catch(error => console.log('error is ', error)), []
    )
    return (
        <Carousel>

            {
                user.map(el =>
                    <Carousel.Item key={el.id}>
                        <img
                            className="d-block w-100"
                            src="https://www.pngmagic.com/product_images/dusty-blue-background-images-free-download-pngmagic.jpg"
                            alt={el.name}
                        />
                        <Carousel.Caption className="caroussel_caption__styling">
                            <div className="list__styling">
                                <p><span className="prefix_styling">Name : </span>{el.name}</p>
                                <p><span className="prefix_styling">Username : </span>{el.username}</p>
                                <p><span className="prefix_styling">Email : </span>{el.email}</p>
                                <hr />
                                <div className="list_adress__styling" >
                                    <p><span className="prefix_styling">Street : </span>{el.address.street}</p>
                                    <p><span className="prefix_styling">Suite : </span>{el.address.suite}</p>
                                    <p><span className="prefix_styling">City : </span>{el.address.city}</p>
                                </div>
                            </div>

                        </Carousel.Caption>

                    </Carousel.Item>)
            }

        </Carousel>
    )
}

export default UserList;