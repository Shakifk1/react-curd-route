
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from './DataContext';
import "./App.css"

const handleAdd = ()=>
{
    console.log("Add called")
}

function Table() {
  const context = useContext(DataContext);
  // context is the value that we have provided
  console.log(context);
  return (
    <>

    <h1>Student Details</h1>
   <Link to="/addStudent"><div className='btn-div'>
   <button className='btn' onClick={handleAdd}>Add New Student</button>
   </div></Link>
        <div style={{backgroundColor:"yellow",}} className='tab-flex'>
          <div className='tab-box'>Name</div>
          <div className='tab-box'>Age</div>
          <div className='tab-box'>Course</div>
          <div className='tab-box'>Batch</div>
          <div className='tab-box'>Change</div>
          
        </div>
      
        {
        context.entries.map((item,index) => (
          // each item is an object
            <div className='tab-flex' key={index}>
            <div className='tab-box'>{item.name}</div>
            <div className='tab-box'>{item.age}</div>
            <div className='tab-box'>{item.course}</div>
            <div className='tab-box'>{item.batch}</div>
            <div className='tab-box'>
              {/* Pass the ID of the row to fetch the data in the edit compoennt */}
                {console.log("Item.id : " + item.id)}
                <Link to='./editStudent' state={{data:index}}>
                    Edit
                </Link> 
            </div>
          </div>
        ))}
      
    </>
  );
}

export default Table;