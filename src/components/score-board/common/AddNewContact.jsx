import { PinDropSharp } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../../redux/actions";

const AddNewContact = (props) => {
    const [contactName, setContactName] = useState("");
    const [date, setDate] = useState();
    const [formatDate, setFormatDate] = useState();

    const [location, setLocation] = useState("");
    const dispatch = useDispatch();
    const isAdded = useSelector((state) => state.contactsReducer.isAdded)

    useEffect(() => {
        if (isAdded && isAdded.status == "200") {
            props.addSuccess()
        }
    }, [isAdded])
    const handleOnChangeContactName = (value) => {
        setContactName(value);
    };

    const handleOnChangeDate = (value) => {
        const formattedDate = moment(value).format('DD/MM/YYYY');
        setDate(value);
        setFormatDate(formattedDate)
    };

    const handleOnChangeLocation = (value) => {
        setLocation(value);
    };
    const addNewContact = () => {
        const requestBody = {
            contactName: contactName,
            date: formatDate,
            userId: localStorage.getItem('userId'),
            ...(location && { location: location })
        }
        dispatch(addContact(requestBody,"add"))

    }
    return (
        <div>
            <TextField
                onChange={(e) => handleOnChangeContactName(e.target.value)}
                className="txtfields"
                variant="filled"
                label="Enter contact name"
                type="text"
                value={contactName}
            />
            <br />
            <TextField
                onChange={(e) => handleOnChangeDate(e.target.value)}
                className="txtfields"
                variant="filled"
                label="Select date"
                type="date"
                value={date}
                InputLabelProps={{ shrink: true }} 
            />

            <br />
            <TextField
                onChange={(e) => handleOnChangeLocation(e.target.value)}
                className="txtfields"
                variant="filled"
                label="Enter location"
                type="text"
                value={location}
            />
            <br />

            <Button className="loc-btn"
                variant="contained" onClick={() => { addNewContact() }}>
                Add contact
            </Button>
        </div>);
}

export default AddNewContact;