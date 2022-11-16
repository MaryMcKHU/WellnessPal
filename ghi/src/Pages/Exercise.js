import React, { useEffect, useState } from 'react';
// import { exerciseOptions, fetchData } from '../Utils/fetchData';

function Exercise() {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://exerciseapi3.p.rapidapi.com/search/muscles/', exerciseOptions)
    //     .then(response => response.json())
    //     .then((json) => setData(json['exercise']))
    //     .catch(err => console.error(err));
    // }, []);
    
    return (
        <div>
            {/* {data.map((muscle) => {
                return(
                    <ul key={muscle.id}>
                        <li>{muscle.name}</li>
                    </ul>
                )
            })} */}
        </div>
    );
}
export default Exercise;