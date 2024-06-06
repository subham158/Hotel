import { useContext } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { AppContext } from "../../Store/BookingContext";
 


const GuestAndRoomsModal = ()=>{

  const {guestAndRoomsNumber, handleAddMinusBtnClicked} = useContext(AppContext);
 
   function handleBtnClick(value){
    handleAddMinusBtnClicked(value)
   }
  
 
    return <>
   <form action="" className="rounded">
    <div className="form-control p-3">
      {/* ...........ADULTS............... */}
      <div className="row  text-center ">
        <div className="col-8 themed-grid-col">
          <div className="row">
            <div className="col-md-12 themed-grid-col">
              <h5 className="fs-6 text-start m-0">Adults</h5>
            </div>
            <div className="col-md-12 themed-grid-col">
              <p className="text-start text-secondary m-0 fs-6">
                Age 13 or above
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 align-items-center justify-content-center text-center p-0 themed-grid-col">
          <div className="d-flex align-items-center gap-3 justify-content-center h-100 ">
            <RemoveCircleIcon className="text-primary" onClick={()=>handleBtnClick("AdultMinus")} />
            <span>{guestAndRoomsNumber.AdultCount}</span> 
            <AddCircleIcon className="text-primary"  onClick={()=>handleBtnClick("AdultAdd")} />
          </div>
        </div>
      </div>
      <hr />
      {/* ............CHILDS................ */}
      <div className="row  text-center">
        <div className="col-8 themed-grid-col">
          <div className="row">
            <div className="col-md-12 themed-grid-col">
              <h5 className="fs-6 text-start m-0">Child</h5>
            </div>
            <div className="col-md-12 themed-grid-col">
              <p className="text-start m-0 fs-6 text-secondary ">
                Ages below 13
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 align-items-center justify-content-center text-center p-0 themed-grid-col">
          <div className="d-flex align-items-center gap-3 justify-content-center h-100 ">
           <RemoveCircleIcon className="text-primary"  onClick={()=>handleBtnClick("ChildMinus")} />
            <span>{guestAndRoomsNumber.ChildCount}</span>
           <AddCircleIcon className="text-primary"  onClick={()=>handleBtnClick("ChildAdd")}/>
          </div>
        </div>
      </div>
      <hr />
      {/* .................ROOMS..................... */}
      <div className="row  text-center">
        <div className="col-8 themed-grid-col">
          <div className="row">
            <div className="col-md-12 themed-grid-col">
              <h5 className="fs-6 text-start m-0">Rooms</h5>
            </div>
            <div className="col-md-12 themed-grid-col">
              <p className="text-start m-0 fs-6 text-secondary ">
                Max Rooms 20
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 align-items-center justify-content-center text-center p-0 themed-grid-col">
          <div className="d-flex align-items-center gap-3 justify-content-center h-100 ">
            <RemoveCircleIcon className="text-primary"  onClick={()=>handleBtnClick("RoomMinus")}  />
            <span>{guestAndRoomsNumber.RoomCount}</span>
            <AddCircleIcon className="text-primary"  onClick={()=>handleBtnClick("RoomAdd")}/>
          </div>
        </div>
      </div>
      {/* ...................... */}
    </div>
  </form>
  </>
}
export default GuestAndRoomsModal;