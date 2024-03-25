/* eslint-disable react/prop-types */
import CardDefault from "../Card/CardDefault";
import CustomSpinner from "../CustomSpinner/CustomSpinner";



const CategoryList = ({ filteredData, loading }) => {

    if(loading){
        return <CustomSpinner/>
    }
    
    // console.log(data);
    return (
        <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto py-4 mt-12">
            {
                filteredData.map((item) =><CardDefault key={item.id} item={item}/>)
            }
        </div>
    );
};

export default CategoryList;