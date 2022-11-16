import React, { useState, useEffect } from 'react';
import { meditationOptions, fetchData } from '../Utils/fetchData';

function Meditation() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://youtube138.p.rapidapi.com/playlist/videos/?id=PL7by6RYPG3HBIcoBm6vhthBguC5iGKKSl&hl=en&gl=US', meditationOptions)
        .then(response => response.json())
        .then((json) => setData(json['meditations']))
        .catch(err => console.error(err));
    }, []);

    useEffect(() => {}, [data]);

    return (
        <div>
            {console.log({data})}
            {/* {data.map((meditation) => {
                return (
                    <ul key={meditation.id}>
                        <li>{meditation.name}</li>
                    </ul>
                )
            })} */}
        </div>
    );
}
export default Meditation;