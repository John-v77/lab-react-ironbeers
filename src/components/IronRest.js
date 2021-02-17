import React, {useState} from 'react';
import axios from 'axios';

function IronRest(props) {

    let[song, setSong] = useState('')

    const postIt = (event) => {
        event.preventDefault()
        console.log('post it ', song)
        let res = axios.post(`https://ironrest.herokuapp.com/favoriteTunes`, {name : song})
        console.log(res)
    }

    console.log(song)
    return (
        <div>
            <form onSubmit={postIt}>
                <input onChange={(event) => setSong(event.target.value)} type="text" placeholder="favorite song?" />
                <button>Submit</button>
            </form>

            {/* https://ironrest.herokuapp.com/ */}
        </div>
    );
}

export default IronRest;