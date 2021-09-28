import classes from '../styles/TextInput.module.css';

export default function TextInput({icon, ...rest}) {
  <div className={classes.textInput}>
    <input {...rest} />
    <span className="material-icons-outlined">{icon}</span>
  </div>;
}
