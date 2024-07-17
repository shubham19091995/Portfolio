import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { hover } from '@testing-library/user-event/dist/hover';
import '../Css/Document.css'
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'documentName',
    headerName: 'Document Name',
    width: 250,
    editable: false,
  },
  {
    field: 'uploadDate',
    headerName: 'Document Upload Date',
    width: 250,
    editable: false,
  },
  {
    field: 'Token',
    headerName: 'Token',
    width: 500,
    editable: true,
  },
];


const rows = [
  { id: 1, documentName: '10th Marksheet', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 2, documentName: '12th Marksheet', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 3, documentName: '1st Semester Marksheet', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 4, documentName: '2nd Semester Marksheet', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 5, documentName: '3rd Semester Marksheet', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 6, documentName: '4th Semester Marksheet', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 7, documentName: '5th Semester Marksheet', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 8, documentName: '6th Semester Marksheet', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 9, documentName: '7th Semester Marksheet', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 10, documentName: '8th Semester Marksheet', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 11, documentName: 'EEE Degree', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 12, documentName: 'EEE All Consolidated Marksheet', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 13, documentName: 'Character Certificate', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 14, documentName: 'Cognizant Offer Letter', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 15, documentName: 'Accenture Offer Letter', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 16, documentName: 'KYC', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 17, documentName: 'Form 16 Cerificate', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 18, documentName: 'Experience Certificate', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 19, documentName: 'AWS Solution Architect Certificate', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 20, documentName: 'AADHAR Card', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 21, documentName: 'Driving Licence', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 22, documentName: 'PAN Card', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },
  { id: 23, documentName: 'Passport', uploadDate: '6th July 2024', Token: "Provide Token , Then you can download ." },


];



function Documents() {
  const [selectedItems,setSelectedItems]= React.useState([]);

  return (
    
    <div style={{marginTop:'100px'}} >
<Box >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}  
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={(datas)=>{
          setSelectedItems(datas)
        }}
        editable={(val)=>console.log(val)}
      />
    </Box>
      <div style={{display:'flex',justifyContent:'center'}}>  <button className='sampleButton'  onClick={()=>{console.log(selectedItems)}}> Download Files</button>  </div>  
    <h1>Mail me at sr1226035@gmail.com for token , If you need document .</h1>
    </div>
  );
}

export default Documents