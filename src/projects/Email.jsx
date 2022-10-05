import React from "react";


export default function Email ({ visible, onClose }) {

    if (!visible) return null;

    const handleOnClose = (e) => {
        if(e.target.id === "emailcontainer") onClose()
    };

    return (
        <div
            id="emailcontainer"
        onClick={handleOnClose} 
        className="fixed top-0 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center cursor-pointer"> 
            <div className="bg-gray-800/[.5] text-white  text-4xl lowercase p-5">
                <p>cjguad@gmail.com</p>
            </div>
        </div>
    );
}