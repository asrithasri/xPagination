import Table from './Table';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import Pagination from './Pagination';

function App() {

  const [employees,setEmployees] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [totalPages,setTotalPages] = useState(1);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    try{
      const res = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
      setEmployees(res.data);
      setTotalPages(Math.ceil(res.data.length /10));

    }
    catch(error){
      console.log('Error fetching data',error);
    }
  };

  

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  return (
    <div className="App">
      <h1>Employee Data Table</h1>

          <Table employees={employees} currentPage={currentPage}/>

          <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              />
    </div>
  );
}

export default App;
