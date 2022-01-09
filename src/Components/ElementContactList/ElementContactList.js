import React from "react";
import PropTypes from "prop-types";


function ElementContactList ({name, number}) {
    return (
        <li><span>{name}</span>: <span>{number}</span></li>
    )
}

ElementContactList.propTypes = {
    name: PropTypes.string,
    number:PropTypes.string,
}

export default ElementContactList;
