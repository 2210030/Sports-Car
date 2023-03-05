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
                        <div>
                            <h3>{car.name}</h3>
                            <p> Rent Per Hour {car.rentPerHour} /-</p>
                        </div>
                    </Col>
                })}
            </Row>
            
            
            
            
        </DefaultLayout>
    )
}

export default Home