import React from 'react'
import { SelectOptionDiv ,SelectOptionHeader} from '../../../styledComponents/styledComponents'


const TakeActionOption = ({modalOptionTitle , modalOptionDescription}) => {
    return (
        <SelectOptionDiv>
            <SelectOptionHeader>{modalOptionTitle}</SelectOptionHeader>
            <p>{modalOptionDescription}</p>
        </SelectOptionDiv>
    )
}

export default TakeActionOption
