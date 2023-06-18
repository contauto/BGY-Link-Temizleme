import React from 'react';
import {DataGrid} from "@mui/x-data-grid";

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

    return (
        <div>
            <div style={{ height: 400, width: 400 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                sx={{ bgcolor: 'white' }}
            />
        </div>
        </div>
    );
}

export default Table;