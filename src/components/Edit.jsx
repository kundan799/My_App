import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/UserDetailsSlice';

const Edit = () => {
    const dispatch=useDispatch();
    const navigate =useNavigate()
    const {id}= useParams();
    console.log("id",id);

    const [updatedData ,setUpdatedData]=useState();
    const {users , loading} =useSelector((state)=>state.app)

    useEffect(()=>{
        const data=users.filter((ele)=>ele.id ===id);
        setUpdatedData(data[0]);

    },[])

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(updateUser(updatedData))
        navigate("/")


    }

    const updateData=(e)=>{
        setUpdatedData({...updatedData,[e.target.name ]:e.target.value})


    }
   // console.log("updatedData",updatedData)
  return (
    <div>
    <form onSubmit={handleSubmit} className='mx-auto w-50 my-4'>
  <div>
    <input
      type="text"
      name="name"
      placeholder="enter name"
      value={updatedData && updatedData.name}
      onChange={updateData}
    />
  </div>
  <div>
    <input
      type="email"
      name="email"
      placeholder="enter email"
      value={updatedData && updatedData.email}
      onChange={updateData}
    />
  </div>
  <div>
    <input
      type="number"
      name="age"
      placeholder="enter age"
      value={updatedData && updatedData.age}
      onChange={updateData}
    />
  </div>
  <div>
    <input
      type="radio"
      name="gender"
      checked={updatedData && updatedData.gender === "Male"}
      value="Male"
      onChange={updateData}
    />
    <label>Male</label>
    <input
      type="radio"
      name="gender"
      checked={updatedData && updatedData.gender === "Female"}
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

export default Edit
