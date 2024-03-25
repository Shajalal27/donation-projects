
import { Button } from "@material-tailwind/react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import DonationCard from "../../components/DonationCard/DonationCard";
import { useState } from "react";


const Donation = () => {

    const { localData } = useLocalStorage();
    const [showAll, setShowAll] = useState(false);
    // console.log(localData);

    const handleShowAll = () =>{
        setShowAll(!showAll)
    }

    if(localData.length == 0){
        return <p>No Data Found.....</p>
    }

    return (
        <>
             <div className="max-w-7xl mx-auto">Donate Count:<span>{localData.length}</span> </div>
            <div className="mt-12 max-w-7xl mx-auto grid grid-cols-2 gap-8">
            
            {
                localData.slice(0, showAll? localData.length: 4).map( (data) => <DonationCard key={data.id} data={data}/>)
            }
        </div>
            {
              localData.length > 4 ?(
             <div className="text-center mt-8">
                <Button onClick={handleShowAll} color="green">
                    {!showAll? "ShowAll": "ShowLess"}
                </Button>
             </div>
              ) : null  
            }
        </>
    );
};

export default Donation;