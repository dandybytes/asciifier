import React, {createContext, useState} from "react";

export const Context = createContext();

const ContextProvider = props => {
    const [uploadedImage, setUploadedImage] = useState(null);
    // const [loading, setLoading] = useState(true);

    // if (loading) {
    //     return false;
    // }

    return (
        <Context.Provider value={{uploadedImage, setUploadedImage}}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
