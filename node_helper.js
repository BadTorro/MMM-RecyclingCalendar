var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
  start: function() {
    console.log("Starting node_helper.js for module: "+this.name);

    this.countDown = 10000000
  },

  socketNotificationReceived: function(notification, payload) {
    Log.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);


    if(notification == "MMM-RECYCLINGCALENDAR-CONFIG"){
      this.countDown = "rest call done"; 
      payload = this.countDown;
      this.sendSocketNotification("I_DID", this.countDown);
    }


    // switch(notification) {
    //   case "DO_YOUR_JOB":
    //     this.sendSocketNotification("I_DID", (this.countDown - payload))
    //     break
    // }
  },
})