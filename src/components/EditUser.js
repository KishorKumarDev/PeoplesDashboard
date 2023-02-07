import React from 'react'
import UsersForm from './UsersForm'

const EditUser = (props) => {
    const {id,firstname,lastname,email,locat,handleToggle,editItem} = props
    
    const formSubmit =(formData)=>{
          editItem(formData)
    }
  return (
    <div>
    <UsersForm id={id}
        firstname={firstname} 
        lastname={lastname} 
        email={email} 
        locat={locat} formSubmit={formSubmit}/>
    <button onClick={handleToggle} >Cancel</button> 
    </div>
  )
}

export default EditUser
