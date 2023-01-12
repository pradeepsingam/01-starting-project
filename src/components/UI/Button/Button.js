import Styles from './Button.module.css';


const Button = props => {
  return (
    <div>
      <button type={props.type} className={Styles.button} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
