import React, {useState} from 'react';

export function DogeButton() {
    const [doges, setDoges] = useState(0);
    return (<div>
        <h2>Doges <span>{doges}</span></h2>
    <button onClick={()=> setDoges(doges+1)}>Collect Doge</button>
    </div>)
}
export default DogeButton;
