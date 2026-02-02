import React, { useEffect, useState } from "react";


export default function useCurrencyinfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/7fd237cdb96fcd818def483a/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res.conversion_rates || {});
        })
        .catch(() => setData({}));

    },[currency]);
    return data;
}