import React, { useState } from "react";
import {
  Title,
  Button,
  EventDetailContainer,
  ButtonsContainer,
  TabsContainer,
  Tab,
} from "../styledComponents/styledComponents";
import Details from "./../components/eventDetailcomponents/Details";
import Location from "./../components/eventDetailcomponents/Location";
import Media from "./../components/eventDetailcomponents/Media";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import Modal from "react-modal";
import ActionModal from "../components/Modals/ActionModal";

const EventDetails = () => {
  const { evrekaData, setEvrekaData, selectedData, setSelectedData } =
    useContext(DataContext);

  const { details, media, location } = selectedData;

  const [currentTab, setCurrentTab] = useState("details");
  const [modalIsOpen, setIsOpen] = useState(false);

  Modal.setAppElement(document.getElementById("root"));

  const customModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function dataReplace(datasArr, obj) {
    datasArr.forEach((data) => {
      if (data.id === obj.id) {
        data = obj;
      }
    });
    return datasArr;
  }

  const handleTabClick = (e) => {
    let tabName = e.target.innerHTML.toLowerCase();
    setCurrentTab(tabName);
  };

  const onNoActionClick = () => {
    let obj = selectedData;
    obj.details[4].value = "Aksiyon Gerekmiyor";
    console.log(obj);
    setSelectedData(obj);
    let newArr = dataReplace(evrekaData, obj);
    setEvrekaData(newArr);
    console.log(evrekaData);
  };
  const onTakeActionClick = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {selectedData && (
        <>
          <Title>EVENT DETAILS</Title>
          <EventDetailContainer>
            {selectedData.details && (
              <ButtonsContainer
                actionNeeded={
                  selectedData.details[4].value === "Aksiyon Gerekmiyor" || selectedData.details[4].value === "Mark As Resolved" || selectedData.details[4].value === "Change Asset"
                    ? false
                    : true
                }
              >
                <Button onClick={onNoActionClick}>NO ACTION NEEDED</Button>
                <Button green onClick={onTakeActionClick}>
                  TAKE ACTION
                </Button>
              </ButtonsContainer>
            )}

            <TabsContainer>
              <Tab
                active={currentTab === "details" ? true : false}
                onClick={handleTabClick}
              >
                DETAILS
              </Tab>
              <Tab
                active={currentTab === "location" ? true : false}
                onClick={handleTabClick}
              >
                LOCATION
              </Tab>
              <Tab
                active={currentTab === "media" ? true : false}
                onClick={handleTabClick}
              >
                MEDIA
              </Tab>
            </TabsContainer>
            {currentTab === "details" ? (
              <Details details={details} />
            ) : currentTab === "location" ? (
              <Location location={location} />
            ) : (
              <Media media={media} />
            )}
          </EventDetailContainer>
        </>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Action Modal"
      >
        <ActionModal setIsOpen={setIsOpen}/>
      </Modal>
    </div>
  );
};

export default EventDetails;
