import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import CategoryList from "../../components/CategoryList/CategoryList";
import useDonationData from "../../Hooks/useDonationData";


const Home = () => {
    const [value, setValue] = useState("");
    const{data, loading} = useDonationData();
    const [filteredData, setFilteredData] = useState([]);
    // console.log(value);


    useEffect( () =>{
        setFilteredData(data);
    },[data])

    const handleSearch = () =>{
        if(value.trim() != ""){
            const filtered = data.filter((item) => item.category.toLowerCase().includes(value.toLowerCase())
            );
            console.log(filtered);
            setFilteredData(filtered);
        }
        else{
            setFilteredData(data);
        }
    }

    return (
        <div>
           <Banner value={value} setValue={setValue} handleSearch={handleSearch}/>
           <CategoryList loading={loading} filteredData={filteredData}/>
        </div>
    );
};

export default Home;