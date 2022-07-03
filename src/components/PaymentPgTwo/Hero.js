import React,{useEffect,useState} from 'react';
import './Hero.css';
import CheckOutCard from './CheckOutCard';
import CheckOut from '../Payment/CheckOut';
import CheckOut2 from '../Payment/CheckOut2';
import CheckOut3 from '../Payment/CheckOut3';
import PayCard from '../PaymentPg/PayCard';
//import CourseData from '../PaymentPg/CourseData';
import PayCardMobile from '../PaymentPg/PayCardMobile';
import Loader from "../../pages/Loader"
import { baseURL } from '../../Apis';

const Hero = ({notify}) => {
  const [loader, setloader] = useState(false)
  const [bucket, setbucket] = useState([])
  const [bucket2, setbucket2] = useState([])
  const [bucket3, setbucket3] = useState([])
  const [total, settotal] = useState(0)
  const [totalItems, settotalItems] = useState(0)
  const [packs, setPacks] = useState(null);

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
          setbucket(json.data.courseItems)
          setbucket2(json.data.testSeriesItems)
          setbucket3(json.data.packageItems)
          settotal(json.data.totalAmount)
          settotalItems(json.data.totalItems)
          setloader(false)
      }
      fun()
  }, [])

  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/package`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const json = await response.json();

      if (json.success) {
        setPacks(json.data);
      }
    };
    fun();
    // eslint-disable-next-line
  }, []);
  
// function createMobileCourseData(data) {
//   return (
//       <PayCardMobile
//           key={data.id}
//           title={data.name}
//           studentsEnrolled={data.studentsEnrolled}
//           rating={data.rating}
//       />
//   )
// }

  return (
    <>
    {loader &&<Loader/>}
    <div className='hero-container'>
      <div className='payBodyWrapper'>
        <div className='payHead'>
          <div className='payHeadTitle'>
            <h2>Shopping Cart</h2>
            
          </div>
          <div className='payContContainer'>
            <div>
              {bucket.length > 0 && <h4>{bucket.length} Courses in Cart</h4>}
              {bucket && bucket.map((item)=>{
                return <CheckOut key = {item.courseId} notify={notify} item={item} bucket={bucket} setbucket={setbucket} total={total} settotal={settotal} totalItems={totalItems} settotalItems={settotalItems}/>
              })}
              {bucket2.length > 0 && <h4>{bucket2.length} Testseries in Cart</h4>}
              {bucket2 && bucket2.map((item)=>{
                return <CheckOut2 key = {item.testSeriesId} notify={notify} item={item} bucket2={bucket2} setbucket2={setbucket2} total={total} settotal={settotal} totalItems={totalItems} settotalItems={settotalItems}/>
              })}
              {bucket3.length > 0 && <h4>{bucket3.length} Packages in Cart</h4>}
              {bucket3 && bucket3.map((item,i)=>{
                return <CheckOut3 key = {i} notify={notify} item={item} bucket3={bucket3} setbucket3={setbucket3} total={total} settotal={settotal} totalItems={totalItems} settotalItems={settotalItems}/>
              })}
            </div>
            
            <div>
              <CheckOutCard totalAmount = {total}/>
            </div>
            
          </div>
        </div>
        <div className='payBodyCont'>
        <h2>You may also like</h2>
             <div className='payContCard'>
             {packs && packs.slice(0, 4).map((data) => { return <PayCard key={data.id} title={data.name} data={data.packages[0]}/>})}
             </div>
             <div className='MobilePayCard'>
               {packs && packs.slice(0, 4).map((data) => {return <PayCardMobile key={data.id} title={data.name} data={data.packages[0]}/>})}
               </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero

