import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const SideHeader = ({ collapsed }) => (
  <>
    <div style={{ padding: collapsed ? 8 : 16, transition: "0.3s", textAlign: 'center' }}>
    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 16 }}>
        <Avatar
            src="https://i.imgur.com/LS0EYuR.png"
            style={{
            width: collapsed ? 150 : 150,
            height: collapsed ? 150 : 150,
            transition: "0.3s"
            }}
        />
    </div>
    <Typography variant={"h6"} noWrap>
        Jeffrey Paul Sullivan
    </Typography>
    <Typography color={"textSecondary"} noWrap gutterBottom>
        Software Engineer
    </Typography>
        </div>
    <Divider />
  </>
);

SideHeader.propTypes = {
  collapsed: PropTypes.bool
};
SideHeader.defaultProps = {
  collapsed: false
};

export default SideHeader;
