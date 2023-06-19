import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Linker from './Linker';
import {createTheme, ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
    // Your theme configuration goes here
});
root.render(
    <ThemeProvider theme={theme}>
        <Linker/>
    </ThemeProvider>

);
