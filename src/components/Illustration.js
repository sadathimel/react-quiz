import classes from '../styles/Illustration.module.css'
import image from '../../src/assets/images/signup.svg'
export default function Illustration(){
    return(
        <div className={classes.illustration}>
            <img src={image} alt="Signup" />
          </div>
    );
}