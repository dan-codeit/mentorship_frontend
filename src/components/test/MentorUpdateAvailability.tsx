import { useState, type ChangeEvent } from "react";


const MentorUpdateAvailability = () => {
const [isAvailable, setIsavailable] = useState<boolean>(false)
const [isLoading, setIsloading] = useState<boolean>(true)
const [isUpdating, setIsupdating] = useState<boolean>(false)
const [error, setError] = useState<string | null>("")



const handleUpdateAvailability = ()=> {
setIsavailable(true)
}


const handleChange = (e:ChangeEvent)=> {
    e.target.value
}


  return (
    <div>
<input type="checkbox" name="isAvailable" onChange={}/>

    </div>
  );
};

export default MentorUpdateAvailability;