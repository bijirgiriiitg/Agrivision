import Layout from "../../components/Testseries/TestSeriesSpecific/TestseriesPageLayout";
// import Layout from "../../components/Testseries/TestseriesPageLayout";

import {Redirect} from "react-router-dom" 
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../Loader";
import { baseURL } from "../../Apis";

function TestseriesSpecific(props) {
    const [items, setItems] = useState(1)
    const testSeriesId = props.match.params.id;
    useEffect(() => {
      const fun = async (e) => {
        const response = await fetch(
          `${baseURL}/testseries/${testSeriesId}?queryParam=1`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const json = await response.json();
        if(json.isSubscribed===true){
          setItems(2);
        }
        else
        {
          setItems(3);
        }
      };
      fun();
      // eslint-disable-next-line
    },[]);

  return (
    <>
      {items===2 ? <>
      <Layout testSeriesId={testSeriesId}/></>
      :items===3 ? <Redirect to={`/payment?tId=${testSeriesId}`}/>:<Loader></Loader>}
    </>
  );
}

export default TestseriesSpecific;
