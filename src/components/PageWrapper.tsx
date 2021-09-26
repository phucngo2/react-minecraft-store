import React from "react";

type Props = {
    className: string;
};

const PageWrapper: React.FC<Props> = ({ children, className }) => {
    return (
        <div
            className={`text-center ${className}`}
            style={{ paddingTop: "5rem", minHeight: "100vh" }}
        >
            {children}
        </div>
    );
};

export default PageWrapper;
