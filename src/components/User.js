const User = (props) =>{
    const {name,location} = props
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <h2>{location}</h2>
        </div>
    )
}

export default User;