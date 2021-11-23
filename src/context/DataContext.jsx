import { createContext , useState } from "react";
import { data } from './../data/data';


const DataContext = createContext();





export const DataProvider = ({children}) => {


    const [evrekaData, setEvrekaData] = useState(data.data)
    const [selectedData, setSelectedData] = useState({})

    const values = {
        evrekaData,
        selectedData,
        setSelectedData,
        setEvrekaData
}

    return (
        <DataContext.Provider value={values}>{children}</DataContext.Provider>
    )

}

export default DataContext;