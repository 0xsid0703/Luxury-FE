// components/MailchimpPopupTemplate.tsx
"use client";

import { useEffect } from "react";

const MailchimpPopupTemplate = () => {
  useEffect(() => {
    // Ensure the script only loads once, on the first render
    const loadMailchimpScript = () => {
      if (!window._mailchimpLoaded) {
        window._mailchimpLoaded = true; // Prevent the script from loading again

        const script = document.createElement("script");
        script.id = "mcjs";
        script.src = "https://chimpstatic.com/mcjs-connected/js/users/9ae7f4c2cd8fb05a3073a6f81/418afc31df317a39db97f2028.js";
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
          console.log("Mailchimp script loaded");
        };
      }
    };

    // Disable auto-open and load the script only once
    loadMailchimpScript();
    
    const preventMailchimpAutoPopup = () => {
      let originalDojoRequire = window.dojoRequire;1

      Object.defineProperty(window, "dojoRequire", {
        get() {
          return originalDojoRequire;
        },
        set(value) {
          if (value && !window._mcPrevented) {
            window._mcPrevented = true;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value(["mojo/signup-forms/Loader"], function (L: any) {
              const originalStart = L.start;
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              L.start = function (config: any) {
                // Disable auto-open for the popup
                config.autoOpenDisabled = true;
                originalStart.call(this, config);
              };
            });
          }
          originalDojoRequire = value;
        },
      });
    };

    preventMailchimpAutoPopup();
  }, []);

  return null;
};

export default MailchimpPopupTemplate;

