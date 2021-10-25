import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../../redux/actions";

const UpdateLocation = (props) => {

    const [location, setLocation] = useState("");
    const dispatch = useDispatch();
    const isAdded = useSelector((state) => state.contactsReducer.isAdded)

    useEffect(() => {
        if (isAdded && isAdded.status == "200") {
            props.isUpdated();
        }
    }, [isAdded])


    const handleOnChangeLocation = (value) => {
        setLocation(value);
    };
    const updateLocation = () => {
        const requestBody = {
            contactId: props.id,
            location: location
        }
        dispatch(addContact(requestBody,"update"))
      

    }
    return (
        <div>
            <TextField
                onChange={(e) => handleOnChangeLocation(e.target.value)}
                className="txtfields"
                variant="filled"
                label="Enter location"
                type="text"
                value={location}
            />
            <br />
            <br />
            <Button className="loc-btn"
                variant="contained" onClick={() => updateLocation() }>
                Update Location
            </Button>
        </div>);
}

export default UpdateLocation;