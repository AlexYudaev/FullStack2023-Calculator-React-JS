import './Buttons.css'; 

import Button from './Button';

const Buttons = ({onClickButton}) =>{

    return (
        <>
        <Button onClickFunction={onClickButton} value="1" />
          <Button onClickFunction={onClickButton} value="2" />
          <Button onClickFunction={onClickButton} value="3" />
          <Button onClickFunction={onClickButton} value="4" />
          <Button onClickFunction={onClickButton} value="5" />
          <Button onClickFunction={onClickButton} value="6" />
          <Button onClickFunction={onClickButton} value="7" />
          <Button onClickFunction={onClickButton} value="8" />
          <Button onClickFunction={onClickButton} value="9" />
          <Button onClickFunction={onClickButton} value="0" />

          <Button className="sign" onClickFunction={onClickButton} value="+" />
          <Button className="sign" onClickFunction={onClickButton} value="-" />
          <Button className="sign" onClickFunction={onClickButton} value="*" />
          <Button className="sign" onClickFunction={onClickButton} value="/" />
          <Button className="eql" onClickFunction={onClickButton} value="=" />
        </>
    )

}

export default Buttons;