import React from "react";
import PropTypes from "prop-types";

function ElementContactList ({ name, number }) {
    return (
        <li><span><b>{name}</b></span>: <span><b>{number}</b></span></li>
    )
}

ElementContactList.propTypes = {
    name: PropTypes.string,
    number:PropTypes.string,
}

export default ElementContactList;
