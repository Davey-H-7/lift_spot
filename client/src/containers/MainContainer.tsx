import {Route, Routes} from 'react-router-dom'
import RecordLift from '../components/RecordLift';
import DisplayLifts from '../components/DisplayLifts';
import Request from '../helpers/request';
import { useState, useEffect } from 'react';

const MainContainer  = () => {

    const [recordedLifts, setRecordedLifts] = useState([]);
    

    useEffect(() => {
        const request = new Request();
        request.get("http://localhost:9000/api/lifts")
        .then((res) => setRecordedLifts(res))
    }, [])
    
    return(
        <div className="MainContainer">
        <Routes>
            <Route path ="/record" element ={<RecordLift/>} /> 
            <Route path ="/display" element ={<DisplayLifts/>}/>
        </Routes>
        </div>
    )
};


export default MainContainer;