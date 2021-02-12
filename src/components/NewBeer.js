import React, {useState, useEffect} from 'react';
import axios from 'axios';

function NewBeer(props) {

    let [newBeer, setNewBeer] = useState([])

    axios.get('url')
    .then(dataBeer1 =>{setNewBeer(dataBeer1.data.name)})
    
    return (
        <div>
            {newBeer}
        </div>
    );
}

export default NewBeer;