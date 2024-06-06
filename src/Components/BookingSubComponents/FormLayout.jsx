import { useContext } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { AppContext } from "../../Store/BookingContext.jsx";

const FormLayout = () => {
  const { date, guestAndRoomsNumber } = useContext(AppContext);
  return (
    <form className="rounded-4  p-2  p-sm-1 mt-4">
      <div className="row align-items-center m-auto ">
        {/* ---Check In - Check out Calander layout----*/}
        <section
          className="col-sm-4 px-2 py-2  "
          data-bs-toggle="modal"
          data-bs-target="#CheckInDateModal"
        >
          <div className="d-flex justify-content-center align-items-center  rounded-3 text-secondary py-2 px-3 border shadow">
            <CalendarMonthIcon className="me-2" />

            <p className="fw-small me-3">
              {date.checkInDay} {date.checkInMonth}
            </p>
            <HorizontalRuleIcon className="me-3" />
            <p className="fw-small">
              {date.checkOutDay} {date.checkOutMonth}
            </p>
          </div>
        </section>
        {/* ---Room and Guest Layout--- */}
        <section
          className="col-sm-4 px-2 py-2 "
          data-bs-target="#SelectRooms&Guest"
          data-bs-toggle="modal"
        >
          <div className="d-flex justify-content-center align-items-center gap-2 rounded-3 text-secondary py-2 px-3 border shadow">
            <p className="me-3">{guestAndRoomsNumber.RoomCount} Room</p>
            <HorizontalRuleIcon className="me-3" />
            <p className="fw-small">{guestAndRoomsNumber.AdultCount} guests</p>
          </div>
        </section>

        <section className="col-sm-4  px-3 py-2 d-flex justify-content-center justify-content-sm-end">
          <button className="btn btn-light py-2 shadow text-secondary" type="button">
            Reserve Now
          </button>
        </section>
      </div>
    </form>
  );
};

export default FormLayout;
