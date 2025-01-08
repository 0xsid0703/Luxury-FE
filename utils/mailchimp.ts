export const loadMailchimpPopup = () => {
    const initializePopup = () => {
      if (window.dojoRequire) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.dojoRequire(["mojo/signup-forms/Loader"], function (L: any) {
          L.start({
            baseUrl: "mc.us12.list-manage.com",
            uuid: "9ae7f4c2cd8fb05a3073a6f81",
            lid: "418afc31df317a39db97f2028",
            autoOpenDisabled: true,
          });
        });
      } else {
        console.error("Mailchimp script not loaded properly.");
      }
    };
  
    const interval = setInterval(() => {
      console.log("Checking for Mailchimp script...", window.dojoRequire);
      if (window.dojoRequire) {
        clearInterval(interval);
        initializePopup();
      }
    }, 500);
  
    setTimeout(() => clearInterval(interval), 10000);
  };
  
  export const resetMailchimpPopup = () => {
    document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "MCPopupShown=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("mcPopupState");
  };