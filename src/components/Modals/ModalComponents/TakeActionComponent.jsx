import React from 'react'
import TakeActionOption from './TakeActionOption';
import { ModalTextArea , SelectOptionHeader} from '../../../styledComponents/styledComponents';

const TakeActionComponent = ({ modalOptionDescription , modalOptionTitle , setTextAreaDescription}) => {

    const onTextAreaChange = (e)=> {
        setTextAreaDescription(e.target.value)
    
    }

    return (
        <div>
            <TakeActionOption modalOptionTitle={modalOptionTitle} modalOptionDescription={modalOptionDescription}/>
            {/* <SelectOptionHeader>Resolution Detail*</SelectOptionHeader> */}
            <ModalTextArea type="text" rows="4" cols="79" maxlength="300" onChange={onTextAreaChange}/>

        </div>
    )
}

export default TakeActionComponent
