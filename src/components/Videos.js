import classes from "../styles/Videos.module.css";
import Video from "./Video.js"

export default function Videos() {
    return (
        <div className={classes.videos}>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    )
}
