import React from 'react';
import {DataGrid} from "@mui/x-data-grid";
import { useMediaQuery } from '@mui/material';

function Table() {
    const links= localStorage.getItem("link")?localStorage.getItem("link"):[];
    const arr = links.length>0?links.split(/,\s*(?=\[)/):""

    const columns = [
        { field: 'id', headerName: 'Id', width:50 },
        { field: 'link', headerName: 'Link', width: 300 },
        { field: 'type', headerName: 'Tip', width: 100 }]

    const rows = arr.length>0?arr.map((item,index)=>{
        return {
            id:index+1,
            link:item.split(",")[0].split("[")[1],
            type:item.split(",")[1].split("]")[0]
        }
    },[]):[]

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
const width = isMobile ? 350 : 500;
    const mobileColumns = isMobile ? columns.filter((column) => column.field === 'link') : columns;


    return (
        <div>
            <div style={{ height: 400, width: width }}>
            <DataGrid
                rows={rows}
                columns={mobileColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                sx={{ bgcolor: 'white' }}
            />
                <div className=" justify-content-center d-flex mt-5">
                    <button className="btn btn-danger" onClick={()=>{localStorage.removeItem("link");window.location.reload()}}>Temizle</button>
                </div>

        </div>
        </div>
    );
}

export default Table;