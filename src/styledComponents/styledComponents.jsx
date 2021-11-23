import styled from "styled-components";

export const Title = styled.h1`
  font-size: 25px;
  color: #172c49;
  font-weight: bold;
  padding: 10px;
`;

export const TitleInListItem = styled.h1`
  font-size: 19px;
  color: #172c49;
  font-weight: bold;
`;

export const ListItemDetail = styled.div`
  width: 20%;
  padding-left: 10px;
`;

export const Button = styled.button`
  margin: 10px;
  padding: 0.5em 2em;
  border: 1px solid ${(props) => (props.green ? "#3BA935" : "#535A72")};
  background: ${(props) => (props.green ? "#3BA935" : "#535A72")};
  border-radius: 3px;
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;

export const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 60px;
  align-items: center;
  background-color: ${(props) => (props.active ? "#FBF5D6" : "#fff")};
  margin: 10px 0;
  padding: 10px 0;
  border-left: ${(props) => (props.unchecked ? "7px solid #E9CF30" : "none")};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 3px;
  cursor: pointer;
`;

export const EventDetailContainer = styled.div`
  background-color: #fff;
  margin: 10px;
  padding: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 3px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  display: ${(props) => (props.actionNeeded? "" : "none")};
`;
export const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  border-bottom: 2px solid #172c49;
`;

export const Tab = styled.div`
  color: ${(props) => (props.active ? "172c49" : "#EBECEF")};
  font-weight: 700;
  padding: 5px 20px;
  border-bottom: ${(props) => (props.active ? "3px solid #3BA935" : "")};
  cursor: pointer;
`;

export const DetailsDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const DetailMetricDiv = styled.div`
  margin-right: 30px;
  margin-top: 20px;

`;

export const DetailMetricHeader = styled.h3`
  font-size: 19px;
  color: #172c49;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
width:100%;
height: 300px;
display:flex;
justify-content:center;
align-items:center;
`;
export const Image = styled.img`
height: 250px;
`;

export const ImagePlaceholder = styled.div`
height: 250px;
width: 100%;
display:flex;
align-items:center;
justify-content:center;
background-color:#EBECEF;
`;

export const IconSpan  = styled.span`
position:absolute;
    right: 1em;
    bottom: 1em;
    color: #fff;
    cursor: pointer;
}
`; 

export const ActionModalHeader = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
width:100%;
border-bottom: 2px solid #172C49;

`;

export const ActionModalHeaderItem = styled.h3`
font-weight:bold;
font-family: 'Open Sans', sans-serif;
color:#172C49;
margin-right: 30px;
border-bottom: ${(props) => (props.active ? "3px solid #3BA935" : "")};
margin-bottom:5px;
`;

export const SelectOptionDiv = styled.div`
width:600px;
font-family: 'Open Sans', sans-serif;
color:${(props) => (props.active?"#fff":"#172C49")};
background-color:${(props)=>(props.active?"#172C49":"#ebecef")};
padding:15px;
margin: 10px 0 ;
border:none;
border-radius:5px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
cursor:pointer;
`;

export const ActionModalDiv = styled.div`
padding:20px;
`;

export const SelectOptionHeader = styled.h6`
font-weight:bold;
margin-bottom:10px;
`;

export const ModalButtonContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
width:100%;
`;

export const ModalTextArea = styled.textarea`
resize: none;
margin-top:20px;
border:1px solid #172C49;
border-radius:5px;
`;