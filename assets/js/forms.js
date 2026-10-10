/* Subscribe + enquiry forms. Sends to the Apps Script backend (Google Sheet + email) when configured,
   otherwise to FormSubmit's AJAX endpoint (email only). Shows truthful success / error messages. */
(function () {
  "use strict";
  var C = window.MLW_CONFIG || {};
  Array.prototype.forEach.call(document.querySelectorAll("form[data-mlw-form]"), function (f) {
    var msg = f.querySelector(".mf-msg"), btn = f.querySelector("button[type=submit]");
    var say = function (t, ok) { msg.textContent = t; msg.hidden = false; msg.className = "mf-msg " + (ok ? "ok" : "bad"); };
    f.addEventListener("submit", function (e) {
      e.preventDefault(); msg.hidden = true;
      var bad = Array.prototype.find.call(f.querySelectorAll("[required]"), function (el) { return !el.checkValidity(); });
      if (bad) { bad.focus(); return say("Please complete the required fields" + (bad.type === "checkbox" ? " and tick the consent box." : "."), false); }
      if (f.querySelector('[name="_honey"]').value) return say("Thank you.", true);
      if (C.preview) return say("Preview only: forms are switched off on this preview site.", false);
      var data = { _form: f.getAttribute("data-mlw-form") };
      Array.prototype.forEach.call(f.elements, function (el) { if (!el.name || el.name === "_honey") return; if ((el.type === "checkbox" || el.type === "radio") && !el.checked) return; data[el.name] = el.value; });
      data["Page"] = location.pathname; data["Submitted (browser time)"] = new Date().toString();
      var url, opts;
      if (C.appsScriptUrl) { url = C.appsScriptUrl; opts = { method: "POST", body: JSON.stringify(data) }; }
      else {
        url = "https://formsubmit.co/ajax/" + (C.email || "masterlegalwork@gmail.com");
        data._subject = ({subscribe: "Legal updates subscription: ", retainer: "Corporate retainer enquiry: ", product: "Product order: "}[data._form] || "Website enquiry: ") + (data.Company || data.Name || data.email || "");
        data._template = "table"; data._captcha = "false";
        opts = { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(data) };
      }
      btn.disabled = true;
      fetch(url, opts).then(function (r) { return r.json(); }).then(function (j) {
        if (j && (j.ok || j.success === true || j.success === "true")) { f.reset(); say(data._form === "subscribe" ? "Thank you. You are subscribed. You can unsubscribe at any time by writing to masterlegalwork@gmail.com." : "Thank you. Your enquiry has been sent to the chambers.", true); }
        else throw new Error("not ok");
      }).catch(function () { say("Sorry, this could not be sent just now. Please email masterlegalwork@gmail.com or WhatsApp +91 9872206969.", false); })
        .then(function () { btn.disabled = false; });
    });
  });
})();
