import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../features/UserDetailsSlice'
import { Link } from 'react-router-dom'

const Read = () => {
    const dispatch=useDispatch()

    const {users,loading}=useSelector((state)=>state.app)

    console.log("users",users)

    useEffect(() => {
        dispatch(showUser());
      }, []);
  return (
    <div>
        <h5 className="text-center my-4">All Data</h5>
        
    {users && users.map((ele)=>(
         <div key={ele.id} className="card w-50 mx-auto my-2">
         <div className="card-body">
           <h5 className="card-title">{ele.name}</h5>
           <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
           <h6 className="card-subtitle mb-2 text-muted">{ele.gender}</h6>
           <button
             type="button"
             class="btn btn-primary"
             //onClick={() => setId(ele.id) && handleShow()}
             // onClick={() => [setId(ele.id), handleShow(true)]}
           >
             View
           </button>
           <Link
             onClick={() => dispatch(deleteUser(ele.id))}
             className="card-link mx-2"
           >
             Delete
           </Link>
           <Link to={`/edit/${ele.id}`}>
             <span className="card-link mx-2">Edit</span>
           </Link>
         </div>
       </div>

    ))}
       
      
    </div>
  )
}

export default Read
