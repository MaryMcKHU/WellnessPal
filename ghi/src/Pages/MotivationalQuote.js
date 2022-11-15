import React, { useEffect, useState } from 'react';
import { motivationalOptions, fetchData } from '../Utils/fetchData';

function MotivationalQuote() {

    const [data, setData] = useState([])
    
    // useEffect(() => {
    //     axios.request(options).then(function (response) {
    //         setData(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }, []);

    useEffect(() => {
        fetch('https://inspiring-quotes.p.rapidapi.com/random', motivationalOptions)
        .then(response => response.json())
        .then((json) => setData(json['quote']))
	    .catch(err => console.error(err));
    }, []);



    return (
        <div className='font-link' style={{fontStyle:'italic', fontWeight:'bolder', color:'white', textAlign:'center', fontSize:18, marginTop:300}}>
            "{data}"
        </div>
    )
}

export default MotivationalQuote;