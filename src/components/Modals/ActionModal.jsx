import React, { useState } from "react";
import SelectActionComponent from "./ModalComponents/SelectActionComponent";
import {
  Button,
  ActionModalDiv,
  ActionModalHeader,
  ActionModalHeaderItem,
  ModalButtonContainer,
} from "./../../styledComponents/styledComponents";
import TakeActionComponent from "./ModalComponents/TakeActionComponent";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const ActionModal = ({setIsOpen}) => {
  const { evrekaData , setEvrekaData, selectedData, setSelectedData } = useContext(DataContext);

  const [modalAction, setModalAction] = useState(false);
  const [modalOptionTitle, setModalOptionTitle] = useState("");
  const [modalOptionDescription, setModalOptionDescription] = useState("");
  const [textAreaDescription, setTextAreaDescription] = useState("");

  function dataReplace(datasArr, obj) {
    datasArr.forEach((data) => {
      if (data.id === obj.id) {
        data = obj;
      }
    });
    return datasArr;
  }

  const onNextClick = () => {
    if (modalOptionTitle !== "" && modalOptionDescription !== "") {
      setModalAction(true);
    }
  };

  const onBackClick = () => {
    setModalAction(false);
  };

  const onTakeActionClick = () => {
      if(textAreaDescription !== ""){
        let obj = selectedData;
        obj.details[4].value = modalOptionTitle;
        setSelectedData(obj);
        let newArr = dataReplace(evrekaData, obj);
        setEvrekaData(newArr);
        setIsOpen(false);
      }
   
  }

  return (
    <ActionModalDiv>
      <ActionModalHeader>
        <ActionModalHeaderItem active={modalAction === false ? true : false}>
          SELECT ACTION
        </ActionModalHeaderItem>
        <ActionModalHeaderItem active={modalAction === true ? true : false}>
          TAKE ACTION
        </ActionModalHeaderItem>
      </ActionModalHeader>
      {modalAction === false ? (
        <SelectActionComponent
          setModalOptionDescription={setModalOptionDescription}
          setModalOptionTitle={setModalOptionTitle}
          modalOptionTitle={modalOptionTitle}
        />
      ) : (
        <TakeActionComponent
          modalOptionDescription={modalOptionDescription}
          modalOptionTitle={modalOptionTitle}
          setTextAreaDescription={setTextAreaDescription}
        />
      )}
      {modalAction === false ? (
        <ModalButtonContainer>
          <Button green onClick={onNextClick}>
            Next
          </Button>
        </ModalButtonContainer>
      ) : (
        <ModalButtonContainer>
          <Button onClick={onBackClick}>Back</Button>
          <Button green onClick={onTakeActionClick}>
            Take Action
          </Button>
        </ModalButtonContainer>
      )}
    </ActionModalDiv>
  );
};

export default ActionModal;
