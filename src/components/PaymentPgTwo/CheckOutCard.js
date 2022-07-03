import React, { useEffect, useState } from 'react';
import { baseURL } from '../../Apis';
import { Button } from '../PaymentPg/Button';
import {paymentHandler} from '../PaymentPg/PaymentHandler'

function CheckOutCard(props) {
    
    const [courseIds, setcourseIds] = useState([])
    const [packageIds, setpackageIds] = useState([])
    const [testSeriesIds, settestSeriesIds] = useState([])
    
    useEffect(() => {
        let t=[],t2=[],t3=[];


        const fun =  async (e) => {
            const user = JSON.parse(localStorage.getItem("user"))
            const response = await fetch(`${baseURL}/user/cart/${user._id}`, {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                  },
                });
                const json = await response.json();
                json.data.courseItems.forEach(element => {
                    t.push(element.courseId)
                });
                setcourseIds(t)
                json.data.testSeriesItems.forEach(element =>{
                    t2.push(element.testSeriesId)
                })
                settestSeriesIds(t2)
                json.data.packageItems.forEach(element =>{
                    t3.push(element.packageId)
                })
                setpackageIds(t3)
                // setloader(false)
            }
            fun()
            
        // eslint-disable-next-line
    }, [])
    const checkout = ()=>{
        if(props.totalAmount<=0){
            alert("Nothing to checkout")
        }
        else{
            paymentHandler(props.totalAmount,courseIds,testSeriesIds,packageIds,1);
        }
    }
    return (
        <div className='coCardWrapper'>
            <div className='gap coCardHead'>
                <h4>TOTAL:</h4>
                <div className='priceTag'>
                    &#x20B9;
                    <span>{props.totalAmount}</span>
                </div>
            </div>
            <div className='gap'>

                <Button className='btns coCardBtn' buttonStyle='btn--primary'onClick={checkout} buttonSize='btn--large'>CHECKOUT</Button>

            </div>
            <div className='gap coCardCont'>
                <h4>Promotions</h4>
            </div>
            <div className='gap coCardInput'>
                <input type="text" className='inp' placeholder='Enter Coupon' /><input className='sub' type="submit" value='APPLY' />
            </div>

        </div>

    );
}

export default CheckOutCard;