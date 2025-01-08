"use client"
import React, { PropsWithChildren, useEffect } from 'react'

const preventMailchimpAutoPopup = () => {
    let originalDojoRequire = window.dojoRequire;

    Object.defineProperty(window, "dojoRequire", {
        get() {
            return originalDojoRequire;
        },
        set(value) {
            if (value && !window._mcPrevented) {
                window._mcPrevented = true;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                value(["mojo/signup-forms/Loader"], function (L: any) {
                    // Override the loader to prevent auto-popup
                    const originalStart = L.start;
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    L.start = function (config: any) {
                        if (!config.autoOpenDisabled) {
                            config.autoOpenDisabled = true; // Prevent auto-popup
                        }
                        originalStart.call(this, config);
                    };
                });
            }
            originalDojoRequire = value;
        },
    });
};


const RootTemplate = ({ children }: PropsWithChildren) => {
    useEffect(() => {
        preventMailchimpAutoPopup();
    }, []);
    return (
        <div>{children}</div>
    )
}

export default RootTemplate