import React, { useEffect, useState } from 'react';
import AppPagination from './AppPagination';
import axios from 'axios';


export default function Products(){
    const [products, setProducts] = useState([]);

    useEffect (() => {
        const config = {
            method: 'get',
            url: 'https://00672285.us-south.apigw.appdomain.cloud/demo-gapsi/search?&query=computer&page=1',
            headers: { 
              'X-IBM-Client-Id': 'adb8204d-d574-4394-8c1a-53226a40876e'
            }
          };
          
          axios(config)
          .then(function (response) {
            setProducts(response.data.item.props.pageProps.initialData.searchResult.itemStacks[0].items);
          })
          .catch(function (error) {
            console.log(error);
          });
    }, [])
    return (
        <>  
            <AppPagination products={ products }/>
        </>
    )
}