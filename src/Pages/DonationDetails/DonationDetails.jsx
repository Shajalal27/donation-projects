import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    
  } from "@material-tailwind/react";

import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";
import { saveToLocalStorage } from "../../Utils/localStorage";


const DonationDetails = () => {

    const [singleData, setSingleData] = useState({});
    const {id} = useParams();
    const {data, loading} = useDonationData()

    const handleDonate = () =>{
        saveToLocalStorage(singleData)
    }

    console.log(typeof id, singleData);

    useEffect( () =>{
        if(data){
            const singleData = data.find(item =>item.id == id);
            console.log(singleData);
            setSingleData(singleData);

        }
    }, [data, id])

    const { title, price, images, description,  textColor} = singleData || {};

    return (
        <Card className="mt-12 w-full shadow-none rounded-md overflow-hidden lg:px-20">
            <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
            >
            <img className="w-full rounded-md h-[500px] relative"
                src={images}
                alt="ui/ux review check"
            />
            <div className="absolute bottom-0 w-full h-28 pl-8 opacity-65 bg-black">
            <Button onClick={handleDonate}
            style={{backgroundColor:textColor}} className="mt-8 rounded-sm capitalize text-xl " size="md">Donate {price}</Button>
            </div>
            </CardHeader>
            <CardBody>
            <Typography variant="h2" color="blue-gray">
                {title}
            </Typography>
            <Typography variant="lead" color="gray" className="mt-3 font-normal">
                {description}
            </Typography>
            </CardBody>
            
        </Card>
  
    );
};

export default DonationDetails;