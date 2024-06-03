import { useState, useEffect } from "react";
import Request from "../helpers/request";
import { ToastContainer, toast } from "react-toastify";

const RecordLift = () => {

    const[liftState, setLiftState] = useState({
        date: '0000-00-00',
        weight:0,
        reps:0,
    })

    const notify = () => {toast("toasted")}

    

    const handleDate = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget){
            const newLift = {...liftState}
            newLift.date = event.currentTarget.value
            setLiftState(newLift)
        }
    }

    const handleWeight = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget){
            const newLift = {...liftState}
            newLift.weight = parseInt(event.currentTarget.value)
            setLiftState(newLift)
        }
    }

    const handleReps = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget){
            const newLift = {...liftState}
            newLift.reps = parseInt(event.currentTarget.value)
            setLiftState(newLift)
        }
    }

    const handleSubmit = () => {
      const request = new Request ();
      request.post("http://localhost:9000/api/lifts", liftState)
      .then(() => {
        console.log(liftState)
        notify();
      })
    }

    return (
        <div>
            <form className="RecordLift" onSubmit={handleSubmit}>
            <label htmlFor="date">Date of Lift</label>
            <input type="date" name="date" onChange= {handleDate}/>
            <label htmlFor ="distance">Weight(kg):</label>
            <input type="number" name="distance" onChange={handleWeight}/>
            <label htmlFor="time">Reps</label>
            <input type="number" name="time" onChange={handleReps}/>
 
            <button type ="submit">Record</button>
            </form>
            <ToastContainer/>
        </div>
      );
}
 
export default RecordLift;