import React, { useState } from 'react';

const PopUpSDK: React.FC = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const buttonStyle: React.CSSProperties = {
        padding: '10px 20px',
        backgroundColor: '#008CBA',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    };

    const popupStyle: React.CSSProperties = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'white',
        padding: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
    };

    const closeButtonStyle: React.CSSProperties = {
        marginTop: '10px',
        padding: '5px 10px',
    };

    const showPopup = () => {
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div>
            <button onClick={showPopup} style={buttonStyle}>Click Me</button>
            {isPopupVisible && (
                <div style={popupStyle} className="popup">
                    <p>This is a popup in React!</p>
                    <button onClick={closePopup} style={closeButtonStyle}>Close</button>
                </div>
            )}
        </div>
    );
};

export default PopUpSDK;
