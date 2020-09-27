var NodeHelper = require("node_helper");
var { DateTime } = require('luxon');

module.exports = NodeHelper.create({
  start: function() {
    console.log("Starting node_helper.js for module: "+this.name);
  },

  getData: function(data){
    // result = data + "die maus";
    // this.sendSocketNotification('CALENDAR_RESULT', result);

    var now = DateTime.local().toString();
    // console.log("DATE " + dt);

    // var startdate = DateTime.local();
    // result = startdate; 
    result = now;
    console.log("RESULT: " + result);
    this.sendSocketNotification('CALENDAR_RESULT', result);
    // set start date = today 
    // set end date = today + 7 days 

  },

  socketNotificationReceived: function(notification, payload) {
    console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);


    if(notification === "CALENDAR_GET"){
      this.getData(payload);
    }

    // switch(notification) {
    //   case "DO_YOUR_JOB":
    //     this.sendSocketNotification("I_DID", (this.countDown - payload))
    //     break
    // }
  },
})