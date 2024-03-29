import React, {useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DefaultLayout from '../Components/DefaultLayout'
import { getAllCars } from '../Redux/actions/carsActions'
import {Button, Row, Col} from 'antd'

function Home() {
    const {cars, loading} = useSelector(state=>state.carsReducer)

    const dispatch = useDispatch()
     

    useEffect(() => {
        dispatch(getAllCars())
    }, [])
    
    return(
        <DefaultLayout>
            <h1>Page</h1>

            
            <Row>
                {cars.map(car=>{
                    return <Col lg={5} sm={24} xs={24}>
                    <div className="car p-2 bs1">
                       <img src={car.image} className="carimg"/>

                       <div className="car-content d-flex align-items-center justify-content-between">

                            <div className='text-left pl-2'>
                                <p>{car.name}</p>
                                <p> Rent Per Hour {car.rentPerHour} /-</p>
                            </div>

                            <div>
                                <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
                            </div>
                        </div>
                    </div>
               </Col>
            })}
            </Row>
        </DefaultLayout>
    )
}

export default Home