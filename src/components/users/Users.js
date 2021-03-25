import React  from 'react';
import UserItem from './UserItem'
import PropTypes from 'prop-types'
import {Spinner} from '../layout/Spinner'


const gridStyle={
    display:"grid",
    gridTemplateColumns:"repeat(3,1fr)",
    gridGap:'1rem'
}

function Users({users,isLoading}){

    if(isLoading){
        return (<Spinner/>)
    }else{
        return (
            <div className='container'>
               <div style={gridStyle}>
                   {users.map(user=>{
                       return <UserItem key={user.login} user={user} />
                   })}
               </div>
           </div>
       );
    }
}


Users.propTypes={
    users:PropTypes.array.isRequired,
    isLoading:PropTypes.bool.isRequired
}




export default Users;