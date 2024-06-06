import GuestAndRoomsModal from "./Guest&RoomsModal.jsx";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useContext } from "react";
import { AppContext } from "../../Store/BookingContext.jsx";

const Modal = () => {
  const { date, handleCheckInChange, handleCheckOutChange } =
    useContext(AppContext);
  return (
    <>
      <div
        className="modal fade"
        id="CheckInDateModal"
        tabIndex="-1"
        aria-labelledby="CheckInDate"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="CheckInDate">
                Select Check In Date
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <DateCalendar
                value={date.checkInValue}
                onChange={handleCheckInChange}
                shouldDisableDate={(date) => date < new Date()}
              />

              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  data-bs-target="#CheckOutDateModal"
                  data-bs-toggle="modal"
                >
                  Select Check Out Date
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------CHECK OUT DATE------------------- */}
      <div
        className="modal fade"
        id="CheckOutDateModal"
        aria-hidden="true"
        aria-labelledby="CheckOutDate"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="CheckOutDate">
                Select Check Out Date
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <DateCalendar
                value={date.checkOutValue}
                onChange={handleCheckOutChange}
                shouldDisableDate={(date) => date < new Date()}
              />
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#SelectRooms&Guest"
                data-bs-toggle="modal"
              >
                Select Rooms & Guests
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* --------------ROOMS AND GUESTS--------------------- */}
      <div
        className="modal fade"
        id="SelectRooms&Guest"
        aria-hidden="true"
        aria-labelledby="SelectRooms&Guest"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="SelectRooms&Guest">
                Select Rooms & Guests
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <h3 className="fs-6 text-center mb-3">2 Guests 1 Room</h3>
              <GuestAndRoomsModal />
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
