import React, {useEffect, useState} from 'react';

const Comments = () => {
    let [coments,setComents]=useState([])

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value =>{
                setComents(value)
            })
    },[])
    return (
        <div>
            <ul>
                {
                    coments.map(value => <li key = {value.id}> {value.body}  </li>)
                }
            </ul>

        </div>
    );
};

export default Comments;