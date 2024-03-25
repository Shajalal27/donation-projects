import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";

  const CardDefault = ({item}) => {
      console.log(item);
      const {id, title, category, images, description, cardBg, categorybg, textColor} = item || {};
    return (
        <Link to={`/donation-details/${id}`}>
            <Card style={{backgroundColor:cardBg}} className="mt-6 overflow-hidde cursor-pointer ">
              <CardHeader color="blue-gray" className="relative  rounded-lg m-0">
                <img className=""
                  src={images}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Button style={{backgroundColor:categorybg, color:textColor}} size="sm" className="mb-4">Read More</Button>
                <Typography style={{color:textColor}} variant="h5" color="blue-gray" className="mb-2">
                {title}
                </Typography>
              </CardBody>
              
            </Card>
        </Link>
    );
};

export default CardDefault;