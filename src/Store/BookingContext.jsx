import dayjs from "dayjs";
import { createContext, useReducer} from "react";

const constexDefaultValue = {};
export const AppContext = createContext(constexDefaultValue);

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
   
const checkInCheckOutMethod = (currState, action) => {
  if (action.type === "CHECK_IN_CHANGE") {
    return {
      ...currState,
      checkInValue: action.payload.checkInValue,
      checkOutValue:action.payload.checkOutValue,
      checkInDay: action.payload.checkInDay,
      checkInMonth: action.payload.checkInMonth,
      checkOutDay: action.payload.checkOutDay,
      checkOutMonth: action.payload.checkOutMonth,
    };
  } else if (action.type === "CHECK_OUT_CHANGE") {
    return {
      ...currState,
      checkOutValue: action.payload.checkOutValue,
      checkOutDay: action.payload.checkOutDay,
      checkOutMonth: action.payload.checkOutMonth,
    };
  }
};




const AppContextProvider = ({ children }) => {

  const [date, checkInCheckOutdispatch] = useReducer(checkInCheckOutMethod, {
    checkInValue: dayjs(),
    checkOutValue: dayjs().add(1,'day'),
    checkInDay: dayjs().date(),
    checkInMonth: monthNames[dayjs().month()],
    checkOutDay: dayjs().date() + 1,
    checkOutMonth: monthNames[dayjs().month()],
  });
  
  function handleCheckInChange(newValue) {
    checkInCheckOutdispatch({
      type: "CHECK_IN_CHANGE",
      payload: {
        checkInValue: newValue,
        checkOutValue: newValue.add(1, 'day'),
        checkInDay: newValue.date(),
        checkInMonth: monthNames[newValue.month()],
        checkOutDay: newValue.date() + 1,
        checkOutMonth: monthNames[newValue.month()],
      },
    });

  }

  function handleCheckOutChange(newValue) {
    checkInCheckOutdispatch({
      type: "CHECK_OUT_CHANGE",
      payload: {
        checkOutValue: newValue,
        checkOutDay: newValue.date(),
        checkOutMonth: monthNames[newValue.month()],
      },
    });
  }
// -----------Handling Add & Minus button function of Rooms & Guest Modal ---------------------

  const [guestAndRoomsNumber , guestAndRoomsNumberDispatch] = useReducer((currState,action)=> {
    return {
     ...currState,
     AdultCount:action.payload.AdultCount,
     ChildCount:action.payload.ChildCount,
     RoomCount:action.payload.RoomCount
    }
  }, {
    AdultCount:2,
    ChildCount:0,
    RoomCount:1
  })

  function handleAddMinusBtnClicked(newValue){
    if (newValue === "AdultMinus" && guestAndRoomsNumber.AdultCount > 1){
      guestAndRoomsNumberDispatch({
        payload:{
          AdultCount: guestAndRoomsNumber.AdultCount-1,
          ChildCount:guestAndRoomsNumber.ChildCount,
          RoomCount:guestAndRoomsNumber.RoomCount,
        }
      })
    } else if (newValue === "AdultAdd"){
      guestAndRoomsNumberDispatch({
        payload:{
          AdultCount: guestAndRoomsNumber.AdultCount+1,
          ChildCount:guestAndRoomsNumber.ChildCount,
          RoomCount:guestAndRoomsNumber.RoomCount,
        }
      })
    } else if (newValue === "ChildMinus" && guestAndRoomsNumber.ChildCount > 0){
      guestAndRoomsNumberDispatch({
        payload:{
          AdultCount: guestAndRoomsNumber.AdultCount,
          ChildCount:guestAndRoomsNumber.ChildCount-1,
          RoomCount:guestAndRoomsNumber.RoomCount,
        }
      })
    } else if (newValue === "ChildAdd"){
      guestAndRoomsNumberDispatch({
        payload:{
          AdultCount: guestAndRoomsNumber.AdultCount,
          ChildCount:guestAndRoomsNumber.ChildCount+1,
          RoomCount:guestAndRoomsNumber.RoomCount,
        }
      })
    } else if (newValue === "RoomMinus" && guestAndRoomsNumber.RoomCount >1){
      guestAndRoomsNumberDispatch({
        payload:{
          AdultCount: guestAndRoomsNumber.AdultCount,
          ChildCount:guestAndRoomsNumber.ChildCount,
          RoomCount:guestAndRoomsNumber.RoomCount-1,
        }
      })
    } else if (newValue === "RoomAdd"){
      guestAndRoomsNumberDispatch({
        payload:{
          AdultCount: guestAndRoomsNumber.AdultCount,
          ChildCount:guestAndRoomsNumber.ChildCount,
          RoomCount:guestAndRoomsNumber.RoomCount+1,
        }
      })
    }
   
  }
  
   
  return (
    <AppContext.Provider
      value={{ date, handleCheckInChange, handleCheckOutChange, guestAndRoomsNumber, handleAddMinusBtnClicked  }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
