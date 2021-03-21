import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import DatePicker from "react-datepicker";
import 'moment/locale/it.js';
import './Destination.css';
import "react-datepicker/dist/react-datepicker.css";
import { Button, IconButton } from '@material-ui/core';
import fakeData from '../../fakeData/fakedata.json'


import Ride from '../Ride/Ride';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));


const Destination = () => {
    const classes = useStyles();
    const [destinationTo, setDestinationTo] = React.useState({});
    const [destinationFrom, setDestinationFrom] = React.useState({});
    const [startDate, setStartDate] = useState(new Date());
    

    
    const handleChangeTo = (event) => {
        setDestinationTo(event.target.value);
    };
    const handleChangeFrom = (event) => {
        setDestinationFrom(event.target.value);
    };
    
    const [rideData, setRideData] = useState([]);
    useEffect(()=>{
        setRideData(fakeData);
        console.log(rideData)
    },[rideData])
    const handleSearch = () => {
        
          
    }
        

    return (
        <div>
            <FormControl className={classes.margin}>
                <h4>Pick From</h4>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={destinationTo}
                    onChange={handleChangeTo}
                    input={<BootstrapInput />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="mirpur" >Mirpur</MenuItem>
                    <MenuItem value ="badda">Badda</MenuItem>
                    <MenuItem value ="farmgate">Farmgate</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.margin}>
                <h4>Pick To</h4>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={destinationFrom}
                    onChange={handleChangeFrom}
                    input={<BootstrapInput />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value ="shahbag" >Shahbag</MenuItem>
                    <MenuItem value="Mohakhali" >Mohakhali</MenuItem>
                    <MenuItem value="Eskaton">Eskaton</MenuItem>
                </Select>

            </FormControl>
            <br></br>
            <div styles={{margin:"10%" }}>
                
                <h6>Select Date</h6>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </div>
            <br></br>
            <Button variant="contained" color="primary" onClick={handleSearch} >
                Search
                
               
            </Button>
            { rideData.map(rides => <Ride ride={rides} ></Ride>)}
            
        </div>
    );
};

export default Destination;