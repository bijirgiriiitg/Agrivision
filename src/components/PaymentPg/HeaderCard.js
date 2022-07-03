import { Button } from './Button';
import React, { useEffect } from 'react';
import {paymentHandler} from './PaymentHandler'
import { useState } from 'react';
import Loader from "../../pages/Loader"
import { baseURL } from '../../Apis';

const HeaderCard = ({active,Id,price,notify,refral}) => {
  const [loader, setloader] = useState(false)
  const [disabled, setdisabled] = useState(false)

    const handelChange = async () => {
        active===2? paymentHandler(price,[Id],[],[],0,refral) :active===3? paymentHandler(price,[],[Id],[],0,refral): paymentHandler(price,[],[],[Id],0,refral);
      };
      
      useEffect(() => {
        const fun =  async (e) => {
          setloader(true)
          const user = JSON.parse(localStorage.getItem("user"))
          const response = await fetch(`${baseURL}/user/cart/${user._id}`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
              });
              const json = await response.json();
              if(active===2){ 
                json.data.courseItems.forEach(element => {
                  if(element.courseId===Id){
                    setdisabled(true)
                  }
                });
              }
              else if(active===3){
                json.data.testSeriesItems.forEach(element => {
                  if(element.testSeriesId===Id){
                    setdisabled(true)
                  }
                });
              }
              else{
                json.data.packageItems.forEach(ele=>{
                  if(ele.packageId===Id){
                    setdisabled(true)
                  }
                })
              }
              setloader(false)
          }
          fun()
          // eslint-disable-next-line
      }, [])
      
      const addtocart = async ()=>{
        const user = JSON.parse(localStorage.getItem("user"))
        let data={}
        active===2?data={courseId: Id}:(active===3?data={testSeriesId: Id}:data={packageId:Id})
        setloader(true)
         
          const response = await fetch(`${baseURL}/user/cart/${user._id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(data)
          });
          const json = await response.json();
          setloader(false)
          if(json.success){
            notify("success","Added Successfully")
            setdisabled(true)
          }else{
            notify("failed","Something went wrong")
          }
    
      } 

        

    return (
        <div className='styledCard'>
          {loader &&<Loader/>}
            <div className='headCardHead'>
            </div>
            <div className='payCardContent'>
                <div className='headCardContentWrapper'>
                <h2><i className="fas fa-rupee-sign"></i> {price}</h2>

                    <Button className='btns' buttonStyle='btn--primary' onClick={addtocart} disabled={disabled} buttonSize='btn--large'>{!disabled?"ADD TO CART":"ADDED"}</Button>

                    <Button className='btns' onClick={handelChange} buttonStyle='btn--outline' buttonSize='btn--large'>BUY NOW</Button>
                </div>
            </div>
        </div>
    );
};
export default HeaderCard;