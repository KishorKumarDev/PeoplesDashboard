import React from 'react'
import {v4 as uuidv4} from 'uuid'
import './Form.css'

const UsersForm = (props) => {
  const {formSubmit,handleToggle ,id:slno,firstname:fname,lastname:lname,email:mail,locat:loca} =props
  const[id,setId]=React.useState(slno?slno:uuidv4())
    const [firstname,setFirstName] = React.useState(fname?fname:'')
    const [lastname,setLastName] = React.useState(lname?lname:'')
    const [email,setEmail] = React.useState(mail?mail:'')
    const [locat,setLocat] = React.useState(loca?loca:'')

    const handleSubmit = (e) => {
         e.preventDefault()
         const formData = {
             id: id,
            firstname:firstname,
            lastname:lastname,
            email:email,
            locat:locat
         }
         formSubmit(formData)
         if(handleToggle){
           handleToggle()
         }
         //Reset Form
        setId(uuidv4())
        setFirstName('')
        setLastName('')
        setEmail('')
        setLocat('')
     }
    const handleNameChange = (e) =>{
        setFirstName(e.target.value)
    }
     const handlelastNameChange = (e) =>{
        setLastName(e.target.value)
    }
     const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }
    const handleLocatChange =(e) => {
        setLocat(e.target.value)
    }
  return (
    <div>
    <h3>Register</h3>
     <form onSubmit={handleSubmit} className='form'>
    
    <input type="text"  value={firstname} placeholder="FirstName" onChange={handleNameChange}/><br/>

    
    <input type="text"  value={lastname} placeholder="LastName" onChange={handlelastNameChange}/><br/>

    
    <input type="text"  value ={email} placeholder="abc@gmail.com" onChange={handleEmailChange}/><br/>

    <input type="text"  value ={locat} placeholder="ex:-Tirupati" onChange={handleLocatChange}/><br/>

     <input  class="btn btn-primary" type='submit' value='Register'/> 
    </form>
      
    </div>
  )
}

export default UsersForm
