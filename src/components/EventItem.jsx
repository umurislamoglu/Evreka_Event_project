import React  from "react";
import { ListItem , TitleInListItem , ListItemDetail} from "../styledComponents/styledComponents";
import { useContext } from "react";
import DataContext from "../context/DataContext";



const EventItem = ({idx  , setCurrent , current , data , unchecked}) => {
const { setSelectedData } = useContext(DataContext);
  
const {details}= data
  const handleClick = () => {
    setCurrent(idx)
    setSelectedData(data)
  }
  return (
    <>
      
      <ListItem unchecked={unchecked}  active={idx === current? true:false}  onClick={handleClick}>
      <ListItemDetail>
            <TitleInListItem>{details[0].title}</TitleInListItem>
            <p>{new Date(details[0].value).toLocaleDateString('en-US')}</p>
          </ListItemDetail>
          <ListItemDetail>
            <TitleInListItem>{details[1].title}</TitleInListItem>
            <p>{details[1].value}</p>
          </ListItemDetail>
          <ListItemDetail>
            <TitleInListItem>{details[3].title}</TitleInListItem>
            <p>{details[3].value}</p>
          </ListItemDetail>
          <ListItemDetail>
            <TitleInListItem>{details[6].title}</TitleInListItem>
            <p>{details[6].value}</p>
          </ListItemDetail>
          <ListItemDetail>
            <TitleInListItem>{details[4].title}</TitleInListItem>
            <p>{details[4].value}</p>
          </ListItemDetail>
      </ListItem>
     
    </>
  );
};

export default EventItem;
