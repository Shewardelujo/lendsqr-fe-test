import "./UserDetails.scss";
import Back from "../../assets/icons/np_back.svg";
import { useEffect } from "react";
import { Box, Rating, Tab, Tabs, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUser } from "./userDetailsSlice";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import UserDetailsSectionedInfo from "../../components/UserDetailsSectionedInfo/UserDetailsSectionedInfo";

//material ui tab
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const UserDetails = () => {
  const { userId } = useParams();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: any) => state.user?.user);
  const status = useAppSelector((state: any) => state.user.status);
  const error = useAppSelector((state: any) => state.user.error);

    useEffect(() => {
      if (status === "idle") {
        dispatch(fetchUser(Number(userId)));
      }
    }, [dispatch, status, userId]);

  // material ui tab
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <>
      {status === "rejected" && (
        <div className="error-message">{error.message}</div>
      )}{" "}
      {status === "succeeded" && (
        <div className="user-container">
          <div className="user-details-first-section">
            <div
              className="d-flex align-items-center mb-4 back-to-users"
              onClick={handleClick}
            >
              <img src={Back} alt="back-icon" />
              <div className="user-details-back-text">Back to Users</div>
            </div>
            <div className="d-md-flex align-items-md-center justify-content-md-between user-details-first-section-details">
              <div className="user-page-title mb-0">User Details</div>
              <div className="user-details-button-wrapper">
                <button className="btn user-details-button blacklist-btn mb-2 mb-md-0">
                  Blacklist User
                </button>
                <button className="btn user-details-button activate-btn">
                  Activate User
                </button>
              </div>
            </div>
          </div>
          <div className="user-details-card-section">
            <div className="d-flex user-details-second-section-top">
              <div className="d-md-flex">
                <div className="d-flex justify-content-between align-items-center user-details-second-section-avatar-section">
                  <div className="user-details-second-section-avatar-container">
                    <img
                      src={user.profile?.avatar}
                      className="user-details-second-section-avatar"
                      alt="avatar"
                    />
                  </div>
                  <div className="user-details-second-section-avatar-details">
                    <div className="user-details-second-section-avatar-details-name">
                      {user.profile?.firstName} {user.profile?.lastName}
                    </div>
                    <div className="user-details-second-section-avatar-details-info">
                      {user.phoneNumber}
                    </div>
                  </div>
                </div>
                <hr className="vertical-line" />

                <div className="user-details-second-section-avatar-section d-flex flex-column justify-content-center">
                  <div className="user-details-second-section-avatar-details-info tier-info">
                    User’s Tier
                  </div>
                  <div className="user-details-second-section-avatar-details-info">
                    <Box
                      sx={{
                        "& > legend": { mt: 2 },
                      }}
                    >
                      <Rating name="read-only" value={2} readOnly max={3} />
                    </Box>
                  </div>
                </div>
                <hr className="vertical-line" />
                <div className="user-details-second-section-avatar-section d-flex flex-column justify-content-center">
                  <div className="user-details-second-section-avatar-details-name">
                    ₦{user.accountBalance}
                  </div>
                  <div className="user-details-second-section-avatar-bank-info">
                    {user.accountNumber}/Providus Bank
                  </div>
                </div>
              </div>
            </div>
            <div className="user-details-second-section-bottom">
              <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="General Details" {...a11yProps(0)} />
                  <Tab label="Documents" {...a11yProps(1)} />
                  <Tab label="Bank Details" {...a11yProps(2)} />
                  <Tab label="Loans" {...a11yProps(3)} />
                  <Tab label="Savings" {...a11yProps(4)} />
                  <Tab label="App and System" {...a11yProps(5)} />
                </Tabs>
              </Box>
            </div>
          </div>
          {/* second card */}
          <TabPanel value={value} index={0}>
            <UserDetailsSectionedInfo />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Documents
          </TabPanel>
          <TabPanel value={value} index={2}>
            Bank Details
          </TabPanel>
          <TabPanel value={value} index={3}>
            Loans
          </TabPanel>
          <TabPanel value={value} index={4}>
            Savings
          </TabPanel>
          <TabPanel value={value} index={5}>
            App and System
          </TabPanel>
        </div>
      )}
    </>
  );
};

export default UserDetails;
