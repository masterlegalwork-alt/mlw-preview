/* Master Legal Work site settings. ONE-TIME STEPS: fill these in, then rebuild/redeploy.
   appsScriptUrl    = Google Apps Script web-app URL (tools/apps-script/Code.gs) -> Google Sheet client database + emails
   bookingUrl       = Google Calendar appointment schedule (normal slots) booking page, legalcarepro
   urgentBookingUrl = separate urgent appointment schedule (from 1:30 PM)
   cashfreeUrl      = Cashfree payment link once the account is active                                   */
window.MLW_CONFIG = { appsScriptUrl: "", bookingUrl: "", urgentBookingUrl: "", cashfreeUrl: "", email: "masterlegalwork@gmail.com", base: "/mlw-preview", preview: true, serviceFees: { "Written document review & opinion (48 hours)": 0, "Drafting: legal notice": 0, "Drafting: reply to legal notice": 0, "Agreement / contract review": 0 } };
