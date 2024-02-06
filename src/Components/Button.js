import './Button.css'; 

const Button = ({className, value, onClickFunction}) =>{

    const btnClasses = className ? 'button ' + className : 'button';

    return (
        <button className={btnClasses} onClick={ () => onClickFunction(value) }>
            {value}
        </button>
    )

}

export default Button;