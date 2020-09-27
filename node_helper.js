var NodeHelper = require("node_helper");
var { DateTime } = require('luxon');

module.exports = NodeHelper.create({
  start: function() {
    console.log("Starting node_helper.js for module: "+this.name);
  },

  getCalendarData: function(payload){
    // result = data + "die maus";
    // this.sendSocketNotification('CALENDAR_RESULT', result);

    // var dt = DateTime.local();
    // var startdate = dt.toISODate();
    
    // console.log("Data: " + data.daysToDisplay);

    var startdate = DateTime.local().toISODate();
    var enddate = DateTime.local().plus({ days: payload.daysToDisplay }).toISODate();

    fetch(payloard.url)
    .then(function(response){
      return response.json();
    })
    .then(function(myJson){
      console.log(myJson);
    });

    this.sendSocketNotification('CALENDAR_RESULT', result);

  },

  socketNotificationReceived: function(notification, payload) {
    console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);


    if(notification === "CALENDAR_GET"){
      this.getCalendarData(payload);
    }

    // switch(notification) {
    //   case "DO_YOUR_JOB":
    //     this.sendSocketNotification("I_DID", (this.countDown - payload))
    //     break
    // }
  },
})