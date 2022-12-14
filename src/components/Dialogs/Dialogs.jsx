import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css"

const Dialogs = (props) => {



    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />)



    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs;