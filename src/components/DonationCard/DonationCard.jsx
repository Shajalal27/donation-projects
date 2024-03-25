/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

const DonationCard = ({ data }) => {
    // eslint-disable-next-line no-unused-vars
    const {id, title, category, images, price, cardBg, categorybg, textColor} = data || {};
    return (
        <Card style={{backgroundColor:cardBg}} className="w-full max-w-[48rem] flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                src={images}
                alt="card-image"
                className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
            <Button style={{backgroundColor:categorybg, color:textColor}} size="sm" className="mb-4">{category}</Button>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                {title}
                </Typography>
                <Typography style={{color:textColor}} color="gray" className="mb-8 font-normal">
                    {price}
                </Typography>
                <Button style={{backgroundColor:categorybg, color:textColor}} size="lg" className="mb-4 text-lg font-semibold">View Details</Button>
            </CardBody>
        </Card>
    );
};

export default DonationCard;