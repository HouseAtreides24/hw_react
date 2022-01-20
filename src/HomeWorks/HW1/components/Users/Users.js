import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react'


const Users = () => {

    const [users , setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            //console.log(value)
            setUsers(value)}
        )
        }
        ,[]
    )


    return (
       <div>
           <ul>
               {
                   users.map(value => <li key={value.id}> {value.name}  </li>)
               }
           </ul>
        </div>
    );
};

export default Users;