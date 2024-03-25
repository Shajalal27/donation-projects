export const saveToLocalStorage = (data) =>{
    const savedData = JSON.parse(localStorage.getItem("donate")) || [];

    const existedData = savedData.find((item) => item.id == data.id);
    if(!existedData){
        savedData.push(data);
        localStorage.setItem("donate", JSON.stringify(savedData));
        alert("Added successfully to local storage...");
    }
    else{
        alert("already donate exists");
    } 
}

export const getFromLocalStorage = () =>{
    const data = JSON.parse(localStorage.getItem("donate")) || [];
    console.log("local", data);
    return data;
};