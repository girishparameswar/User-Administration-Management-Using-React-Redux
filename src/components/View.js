import React,{ useEffect } from "react";
import { useParams } from "react-router-dom";


let View = ({ onfetch, onUser }) => {
  
    let { id } = useParams();
    let data = onfetch(id);
    console.log('route: ', id)

    useEffect(() => {
      if(!data.length < 0) onfetch(id)
    }, [data])

  return (
    <div className="panel panel-primary">
      <div className="panel-header bg-primary">
        <h2>Selected User</h2>
        <p>Name: {data[0].username}</p>
        <p>Location: {data[0].location}</p>
        <p>Products Purchased: {data[0].products_purchased}</p>
      </div>
      <div className="panel-body">
        {/* <p>{onUser}</p> */}
        <button onClick={() => null}>Get User</button>
      </div>
    </div>
  );
};

export default View;
