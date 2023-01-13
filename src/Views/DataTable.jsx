
import React from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/dataTable.css";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const baseUrl = "https://dummyjson.com/products";

const DataTable = (props) => {

    const [items, setItems] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            const products = JSON.stringify(response.data);
            console.log(response.data)
            if(products.length = 10){
                setItems(products)
                
            }
           
        }).catch(error => {
            setError(error);
        });
    },[]);

    if(!items) return null;

    const RegisteredItems = items.map((item) => {
        return(
            <tr>
                 <th scope="row">{item.id}</th>
                 <td>{item.title}</td>
                 <td>{item.description}</td>
                 <td>{item.category}</td>
                 <td>{item.brand}</td>
                 <td>{item.price}</td>
                            
            </tr>
        )
    })

    return ( 
        <div className='main-list'>
            <table class="table">
                        <caption>List of users</caption>
                            <thead>
                                <tr>
                                <th scope="col">#userId</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Category</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                                {/* {RegisteredItems} */}
                               
                            </tbody>
                        </table>
        </div>
     );}
 
export default DataTable;