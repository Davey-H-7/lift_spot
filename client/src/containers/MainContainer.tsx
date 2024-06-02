import {Route, Routes} from 'react-router-dom'
import RecordLift from '../components/RecordLift';
import DisplayLifts from '../components/DisplayLifts';

const MainContainer  = () => {

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