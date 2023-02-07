import React from 'react'
import EditUser from './EditUser'

const UserData = (props) => {
    const {id,firstname,lastname,email,locat,removeItem,editItem} = props
    const [toggle, setToggle]=React.useState(false)
    
    const handleRemove = ()=>{
        const confirmRemove = window.confirm("Are you sure ?")
        if(confirmRemove){
             removeItem(id)
        } 
    }
    const handleToggle = ()=>{
      setToggle(!toggle)
    }

  return (
     <div>
         {
          toggle ?(
            <div>
            <EditUser
            id={id} 
            firstname={firstname} 
            lastname={lastname} 
            email={email} 
            locat={locat} 
            editItem={editItem}
             handleToggle={handleToggle}/>
            </div>
           
          ):(
             <div className='details'>
          <table className=" table table-danger">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              {/* <th>Gender</th>
              <th>Date of Birth</th> */}
              <th>Location</th>
              <th>Update</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr key={id}>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{email}</td>
            {/* <td>{}</td>
            <td>{}</td> */}
            <td>{locat}</td>
            <td><button  onClick={handleToggle} className="btn btn-warning">Edit</button></td>
            <td><button onClick={handleRemove} className="btn btn-danger">Remove</button></td>
            </tr>
            
          </tbody>
          </table>
          </div>
          )
         }     
    </div>  
  )
}

export default UserData
