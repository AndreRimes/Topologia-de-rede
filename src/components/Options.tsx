"use client";
import React from 'react';

const Radio = ({isPing, setIsPing}: {isPing: boolean, setIsPing: React.Dispatch<React.SetStateAction<boolean>>}) => {

    return (
        <div className="wrapper">
            <div className="option">
                <div className={`btn cursor-pointer`}
                    onClick={() => setIsPing(true)}
                    style={{
                        backgroundColor: !isPing ? "#FFFFFF" : "#000000",
                        color: !isPing ? "#000000" : "#FFFFFF",
                    }}  
                >
                    <span className="span">Ping</span>
                </div>
            </div>
            <div className="option">
                <div className={`btn cursor-pointer`}
                    onClick={() => setIsPing(false)}
                    style={{
                        backgroundColor: !isPing ? "#000000" : "#FFFFFF",
                        color: !isPing ? "#FFFFFF" : "#000000",
                    }}
                >
                    <span className="span">TraceRouter</span>
                </div></div>
        </div>
    );
}



export default Radio;
