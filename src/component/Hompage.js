import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";
export default function Homepage() {
  const [state, setState] = useState();
  const getApi = async () => {
    const response = await axios.get(
      "https://60ef36aaf587af00179d3969.mockapi.io/fitbots/interview/shop"
    );
    console.log(response.data);
    setState(response.data);
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className="homepage">
      <div className="container">
        {}
        {state && state.map((ele, index) => <Product ele={ele} />)}=
      </div>
      <div></div>
    </div>
  );
}
