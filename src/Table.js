import React, {useState} from 'react';
import {DataGrid} from "@mui/x-data-grid";
import {Button, useMediaQuery} from '@mui/material';

function Table() {
    const links= localStorage.getItem("link")?localStorage.getItem("link"):[];
    const arr = links.length>0?links.split(/,\s*(?=\[)/):""
    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const handleDelete = (id) => {
        const updatedRows = rows.filter((row) => row.id !== id);
        localStorage.setItem("link",updatedRows.map((item)=>`[${item.link}, ${item.type}]`))
        window.location.reload()
    };


    const handleDeleteSelected = () => {
        const updatedRows = rows.filter((row) => !rowSelectionModel.includes(row.id));
        localStorage.setItem("link",updatedRows.map((item)=>`[${item.link}, ${item.type}]`))
        window.location.reload()
    }

    const columns = [
        { field: 'id', headerName: 'Id', width:50 },
        { field: 'link', headerName: 'Link', width: 300 },
        { field: 'type', headerName: 'Tip', width: 100 },
        {
            field: 'delete',
            headerName: 'Sil',
            width: 100,
            renderCell: (params) => (
                <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={() => handleDelete(params.row.id)}
                >
                    Sil
                </Button>
            ),
        },
    ]

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
                onRowSelectionModelChange={(newRowSelectionModel) => {
                setRowSelectionModel(newRowSelectionModel);
            }}
                rowSelectionModel={rowSelectionModel}
            />
                <div className="justify-content-center d-flex mt-5 gap-2">
                    <button className="btn btn-warning" onClick={()=>{handleDeleteSelected()}}>Seçilileri Sil</button>
                    <button className="btn btn-danger" onClick={()=>{localStorage.removeItem("link");window.location.reload()}}>Tümünü Sil</button>
                </div>

        </div>
        </div>
    );
}

export default Table;