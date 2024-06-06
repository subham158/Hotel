// import BookingContainer from "./components/BookingContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AppContextProvider from "./Store/BookingContext.jsx";
import Main from "./Components/Main";
import CTA from "./Components/CTA";
import Amenities from "./Components/Amenities.jsx";
import Rooms from "./Components/Rooms.jsx";

export default function App() {
  return (
    <AppContextProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <>
          <Main />
          <CTA />
          <Amenities />
          <Rooms />
        </>
      </LocalizationProvider>
    </AppContextProvider>
  );
}
