import React, {useState, useEffect} from 'react';
import axios from 'axios';

function NewBeer(props) {

    // const[name, setName] = useState('')
    // console.log('name', name)
    return (
        <div>
           <form>
                <label for="name">Name</label>
                <input type="text" id="name"></input>


           </form>
        </div>
    );
}

export default NewBeer;