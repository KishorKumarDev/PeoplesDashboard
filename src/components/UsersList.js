import React from 'react'
import UserData from './UserData'
import './List.css'

const UsersList = (props) => {
    const {users,removeItem,editItem} = props
    
  return (
     <div className='container'>
    {
        users.length === 0 ? (
            <div>
                <h2>Please do Register for Login Credentials</h2>
            </div>

        ) : (
            <div className='box'>
             <h3>Total users - {users.length}</h3>
                  {
                    users.map((user)=>{
                        return <UserData key = {user.id} {...user} removeItem={removeItem} editItem={editItem}/>
                    })
                  }
            </div>
        )
    }
      
    </div>
  )
}

export default UsersList
