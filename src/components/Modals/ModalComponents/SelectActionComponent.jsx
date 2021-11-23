import React from "react";
import SelectOption from "./SelectOption";

const SelectActionComponent = ({
  setModalOptionTitle,
  modalOptionTitle,
  setModalOptionDescription,
}) => {
  return (
    <div>
      <SelectOption
        setModalOptionDescription={setModalOptionDescription}
        setModalOptionTitle={setModalOptionTitle}
        modalOptionTitle={modalOptionTitle}
        title="Mark As Resolved"
        description="Mark this event as resolved and enter the details of the resolution."
      />
      <SelectOption
        setModalOptionDescription={setModalOptionDescription}
        setModalOptionTitle={setModalOptionTitle}
        modalOptionTitle={modalOptionTitle}
        title="Change Asset"
        description="Change the asset with another one."
      />
    </div>
  );
};

export default SelectActionComponent;
