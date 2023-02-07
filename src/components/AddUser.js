import React from 'react'
import UsersForm from './UsersForm'
import './App.css'


const AddUser = (props) => {
  const {addItem }= props

  const formSubmit=(formData)=>{
    addItem(formData)

  }

  return (
    <div>
      <UsersForm formSubmit={formSubmit}/>

    </div>
  )
}

export default AddUser
