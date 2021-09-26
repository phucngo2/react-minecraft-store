import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const Icon: React.FC<any> = (props) => {
    return <FontAwesomeIcon {...props} />;
};

export default Icon;
