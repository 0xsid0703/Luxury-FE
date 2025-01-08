// components/MailchimpPopupTemplate.tsx
"use client";

import { useEffect } from "react";

const MailchimpPopupTemplate = () => {
  useEffect(() => {
    // Function to disable auto-opening of the popup and initialize it
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
              const originalStart = L.start;
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              L.start = function (config: any) {
                // Disable auto open
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

  return (
    <head>
      <script
        id="mcjs"
        async
        defer
        src="https://chimpstatic.com/mcjs-connected/js/users/9ae7f4c2cd8fb05a3073a6f81/418afc31df317a39db97f2028.js"
      ></script>
    </head>
  );
};

export default MailchimpPopupTemplate;
