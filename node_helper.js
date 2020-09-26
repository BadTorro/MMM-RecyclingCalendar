var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
  start: function() {
    console.log("Starting node_helper.js for module: "+this.name);
  },

  getData: function(data){
    result = data + "die maus";
    this.sendSocketNotification('CALENDAR_RESULT', result);
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