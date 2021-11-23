import React from 'react'
import { SelectOptionDiv ,SelectOptionHeader} from '../../../styledComponents/styledComponents'


const SelectOption = ({title, description ,  setModalOptionTitle , modalOptionTitle , setModalOptionDescription}) => {
  
    
   const  onOptionClick = () => {
    setModalOptionTitle(title)
    setModalOptionDescription(description)
   }
    return (
                
        <SelectOptionDiv active={modalOptionTitle===title ? true: false} onClick={onOptionClick}>
            <SelectOptionHeader>{title}</SelectOptionHeader>
            <p>{description}</p>
        </SelectOptionDiv>
    )
}

export default SelectOption
