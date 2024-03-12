import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends(){
    const [friends, setFriends] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setFriends(data);
        }
        fetchData();
    },)
    return (
        <div>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(singleFriend => <Friend friend={singleFriend}></Friend>)
            }
        </div>
    )
}