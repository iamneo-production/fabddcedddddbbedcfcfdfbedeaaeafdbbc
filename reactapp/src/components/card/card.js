import React,{useState} from 'react';
import Button from '../Button/Button';

const Card=({key, question,correctAnswerMarkUpdate, attempt, options, answers})=> {
    const [state, setSate] = useState(false);
    function disableBtn()
    {
        setSate(true);
    }
}