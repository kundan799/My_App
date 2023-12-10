import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/UserDetailsSlice'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate()

    const [users,setUsers]=useState({})
    const updateData=(e)=>{
        setUsers({
            ...users,
            [e.target.name]:e.target.value
        })
      

    }
    // handle form
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createUser(users))
        navigate("/")
        

    }
  return (
    <div>
          <form onSubmit={handleSubmit} className='mx-auto w-50 my-4'>
        <div>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            onChange={updateData}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            onChange={updateData}
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            placeholder="enter age"
            onChange={updateData}
          />
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            // checked={updateData.gender === "Female"}
            value="Male"
            onChange={updateData}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            // checked={this.state.selectedOption === "Female"}
            value="Female"
            onChange={updateData}
          />
          <label>Famale</label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      
    </div>
  )
}

export default Create
