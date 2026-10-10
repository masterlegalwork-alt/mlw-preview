/* Master Legal Work site settings. ONE-TIME STEPS: fill these in, then rebuild/redeploy.
   appsScriptUrl    = Google Apps Script web-app URL (tools/apps-script/Code.gs) -> Google Sheet client database + emails
   bookingUrl       = Google Calendar appointment schedule (normal slots) booking page, legalcarepro
   urgentBookingUrl = separate urgent appointment schedule (from 1:30 PM)
   cashfreeUrl      = Cashfree payment link once the account is active                                   */
window.MLW_CONFIG = { appsScriptUrl: "", bookingUrl: "", urgentBookingUrl: "", cashfreeUrl: "", email: "masterlegalwork@gmail.com", base: "/mlw-preview", preview: true, serviceFees: { "Written document review & opinion (48 hours)": {amt: 11000, from: false}, "Drafting: legal notice": {amt: 5500, from: false}, "Drafting: reply to legal notice": {amt: 7500, from: false}, "Agreement / contract review": {amt: 11000, from: true, note: "by length"} } };
