export default function Friend({friend}){
    const {id,name,username,email} = friend
    return(
        <div>
            <h3>Id: {id}</h3>
            <h4>Name: {name}</h4>
            <p>User-Name: {username}</p>
            <p>Email: {email}</p>
        </div>
    )
}