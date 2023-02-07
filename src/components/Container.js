import React,{useEffect} from 'react'
import UsersList from './UsersList'
import AddUser from './AddUser'
import './Container.css'

const Container = (props) => {
    const [users,setUsers] = React.useState([])

   const addItem=(user)=>{
        setUsers([user,...users]) 
    }

     const editItem = (user)=>{
      const result = users.map((u)=>{
        if(u.id === user.id){
          return {...u , ...user}
        }else {
          return{...u}
        } 
      })
      setUsers(result)

    }

    const removeItem =(id) =>{
      const result =  users.filter((user)=>{
        return user.id !== id
      })
      setUsers(result)
    }

  useEffect(()=>{
  const result =JSON.parse(localStorage.getItem('users'))
  setUsers(result)
  },[])

  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(users))
  },[users])
    
  return (
    <div className='container'>
    <div className='right-item'>
    <AddUser addItem={addItem} /> 
    </div>
    <div className='left-item'>
    <UsersList users={users}  removeItem={removeItem} editItem={editItem}/> 
    </div>  
    </div>
  )
}

export default Container
