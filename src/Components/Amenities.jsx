import style from './Amenities.module.css';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PowerIcon from '@mui/icons-material/Power';
import PersonIcon from '@mui/icons-material/Person';
import DeckIcon from '@mui/icons-material/Deck';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Groups2Icon from '@mui/icons-material/Groups2';
import AccessibleIcon from '@mui/icons-material/Accessible';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

const Amenities = ()=>{
    return <div class={`container-fluid text-center pt-4 px-5  m-0 pb-5 text-secondary `}>
      <h4 className='mb-5 text-secondary'>Amenities</h4>
    <div class={`row row-cols-auto gap-4 justify-content-center`} >
      <div class="col py-2 px-3 border rounded-4 shadow-sm"><div className={`${style.items}`}><LocalParkingIcon style={{fontSize:"20px"}}/>  <span style={{marginLeft:"8px"}}>Inhouse Parking </span></div></div>
      <div class="col py-2 px-3 border rounded-4 shadow-sm"><div className={`${style.items}`}><NetworkWifiIcon style={{fontSize:"20px"}}/> <span style={{marginLeft:"8px"}}>Free Wifi</span></div></div>
      <div class="col py-2 px-3 border rounded-4 shadow-sm"><div className={`${style.items}`}><RoomServiceIcon style={{fontSize:"20px"}}/> <span style={{marginLeft:"8px"}}>Room Service</span></div></div>
      <div class="col py-2 px-3 border rounded-4 shadow-sm"><div className={`${style.items}`}><SportsTennisIcon style={{fontSize:"20px"}}/>  <span style={{marginLeft:"8px"}}>Games Room</span></div></div>
      <div class="col py-2 px-3 border rounded-4 shadow-sm"><div className={`${style.items}`}><AcUnitIcon style={{fontSize:"20px"}}/>  <span style={{marginLeft:"8px"}}>Air Conditioning</span></div></div>
      <div class="col py-2 px-3 border rounded-4 shadow-sm"><div className={`${style.items}`}><PowerIcon style={{fontSize:"20px"}}/>  <span style={{marginLeft:"8px"}}>Power Backup</span></div></div>
      <div class="col py-2 px-3 border rounded-4 shadow-sm"><div className={`${style.items}`}><PersonIcon style={{fontSize:"20px"}}/>  <span style={{marginLeft:"8px"}}>24/7 Front Desk</span></div></div>
      <div class="col py-2 px-3 border rounded-4 shadow-sm"><div className={`${style.items}`}><DeckIcon style={{fontSize:"20px"}}/>  <span style={{marginLeft:"8px"}}>Rooftop Terrace</span></div></div>
      <div class="col py-2 px-3 border rounded-4 shadow-sm"><div className={`${style.items}`}><MeetingRoomIcon style={{fontSize:"20px"}}/>  <span style={{marginLeft:"8px"}}>Banquet Hall</span></div></div>
      <div class="col py-2 px-3 border rounded-4 shadow-sm"><div className={`${style.items}`}><Groups2Icon style={{fontSize:"20px"}}/>  <span style={{marginLeft:"8px"}}>Multilingual Staff</span></div></div>
      <div class="col py-2 px-3 border rounded-4 shadow-sm"><div className={`${style.items}`}><AccessibleIcon style={{fontSize:"20px"}}/>  <span style={{marginLeft:"8px"}}>Accessible</span></div></div>
      <div class="col py-2 px-3 border rounded-4 shadow-sm"><div className={`${style.items}`}><CreditCardIcon style={{fontSize:"20px"}}/>  <span style={{marginLeft:"8px"}}>International Cards</span></div></div>
      <div class="col py-2 px-3 border rounded-4 shadow-sm"><div className={`${style.items}`}><ConnectedTvIcon style={{fontSize:"20px"}}/>  <span style={{marginLeft:"8px"}}>Flat Screen TV</span></div></div>
      <div class="col py-2 px-3 border rounded-4 shadow-sm"><div className={`${style.items}`}><VideoCameraFrontIcon style={{fontSize:"20px"}}/>  <span style={{marginLeft:"8px"}}>24 Hours Security</span></div></div>
    </div>
  </div>
}

export default Amenities;