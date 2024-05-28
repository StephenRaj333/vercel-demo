import { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState({
    title: "",
    desc: ""
  });
  const [tableData, setTableData] = useState([]);    

  const handleChange = (e) => { 
    setData({...data, [e.target.name]: e.target.value});  
  } 

  const handleSubmit = (e) => {   
    e.preventDefault();     
    const newData = {...data,id: tableData.length + 1};  
    Axios.post("https://vercel-demo-git-main-stephenraj333s-projects.vercel.app/post",newData). 
    then((res) => console.log(res.data)). 
    catch((err) => console.log(err)); 
  }   

  return (
    <>
      <div className='App'>
        <h5>Form Container</h5> 
          <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" className='form-control' name='title' value={data.title} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <input type="text" className='form-control' name='desc' value={data.desc} onChange={handleChange} />  
            </div>
            <button className='btn btn-primary w-25 mt-4'>Submit</button>   
          </form> 
          </div>
          <div className='table-container mt-5'>    
              <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Titlte</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData?.map((item,index) => {
                      return (  
                        <tr key={index}>    
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                        </tr>  
                      )
                    })}
                  </tbody>
              </table>
          </div>
      </div>
    </>
  )
}

export default App
