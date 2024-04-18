import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMaxSizeValidateInput } from '../../hooks/inputHook';
import { useQuillInput } from '../../hooks/quillHook';

function BoardPage(props) {
    const navigate = useNavigate();

    const [ inputValue, handleInputChagnge ] = useMaxSizeValidateInput(20);
    const [ quillvalue, handleQuillValueChange ] = useQuillInput();
    
    const handleSubmitClick = () => {
        let newBoardList = [];

        for(let i = 0; i < 203; i++)
    }

    return (
        <div>
            
        </div>
    );
}

export default BoardPage;