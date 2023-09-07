import { BiSolidUser } from "react-icons/bi";

const LocationPin = ({
  gender
}: {
  gender: string;
  lng: number;
  lat: number;
}) => { 
    let color = '';
    switch(gender){
        case 'Male':
            color = "#3B8FE8";
            break;
        case 'Female':
            color = "#FFA6A2";
            break;
        default:
            color = "#9A9ACC";
            break;
    }

    return <BiSolidUser color={color} size={25} 
/> };

export default LocationPin;
