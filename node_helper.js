var NodeHelper = require("node_helper");
var { DateTime } = require('luxon');

module.exports = NodeHelper.create({
  start: function() {
    console.log("Starting node_helper.js for module: "+this.name);
  },

  getData: function(data){
    // result = data + "die maus";
    // this.sendSocketNotification('CALENDAR_RESULT', result);

    // var dt = DateTime.local();
    // var startdate = dt.toISODate();
    
    var startdate = DateTime.local().toISODate();
    var enddate = DateTime.local().plus({ days: 7}).toISODate();

    // console.log("DATE " + dt);

    // var startdate = DateTime.local();
    // result = startdate; 
    result = startdate;
    console.log("Startdate: " + result);
    result = enddate; 
    console.log("Enddate "+result);
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