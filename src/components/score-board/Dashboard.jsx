import { Grid } from "@material-ui/core";
import { AddLocation } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSuccess, getAllContacts } from "../../redux/actions";
import AddNewContact from "./common/AddNewContact";
import ContactsTable from "./common/ContactsTable";
import UpdateLocation from "./common/UpdateLocation";

/**
 * Dashboard component 
 * 
 * 
 */

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactsReducer.allContacts)
  const [userId, setUserId] = useState();
  const [addNew, setAddNew] = useState(false);
  const [contactId, setContactId] = useState();



  useEffect(() => {
    if (userId == null) {
      const params = new URLSearchParams(window.location.search);
      setUserId(params.get("id"))
    }

  }, []);

  useEffect(() => {
    if (userId) {
      localStorage.setItem('userId', userId);
      dispatch(getAllContacts())
    }

  }, [userId]);


  const addSuccess = () => {
    setAddNew(false)
    dispatch(clearSuccess())
  }

  const updateLocation = (id) => {
    setContactId(id)
  }

  return (
    <>
      <Grid className="dashboard-container" container spacing={4}>
        {addNew ?
          <AddNewContact addSuccess={() => addSuccess()} />
          :
          <>
            {contactId  ?
             <UpdateLocation id={contactId} isUpdated ={()=>setContactId()} />
             :
              <>
                <Grid item md={12} >
                  <span>Profile Id : {localStorage.getItem('userId')}</span><br /><br />
                  <Button className="loc-btn" variant="contained" onClick={() => { setAddNew(true) }}>
                    Add new contact
                  </Button> </Grid>
                <Grid item md={12} >  <span className="title"> Meetings </span> </Grid>
                <Grid item md={8} >
                  {contacts && Object.keys(contacts).length > 0 && <ContactsTable update={(value) => updateLocation(value)} rows={contacts} />}
                </Grid>
              </>
            }
          </>
        }
      </Grid>
    </>
  );
};

export default Dashboard;
