import useDonationData from "../../Hooks/useDonationData";
import CardDefault from "../Card/CardDefault";



const CategoryList = () => {
    const{data, loading} = useDonationData();
    console.log(data);
    return (
        <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto py-4 mt-12">
            {
                data.map((item) =><CardDefault key={item.id} item={item}/>)
            }
        </div>
    );
};

export default CategoryList;