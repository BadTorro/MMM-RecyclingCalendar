const NodeHelper = require("node_helper");
const moment = require("moment");
// const { DateTime } = require('luxon');
const fetch = require('node-fetch');

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

    var startdate = moment().format('YYYY-MM-DD');
    var enddate = moment(startdate, 'YYYY-MM-DD').add(payload.daysToDisplay, 'days');

    // var startdate = DateTime.local().toISODate();
    // var enddate = DateTime.local().plus({ days: payload.daysToDisplay }).toISODate();

    var url = new URL(payload.url);

    var params = new URLSearchParams();
    params.append('zip', payload.zipCode);
    params.append('start', startdate);
    params.append('end', enddate);

    url.search = params.toString();

    (async () => {
      try {
        var response = await fetch(url, {
          method: 'GET', 
          headers: {'Content-Type': 'application/json'}, 
        });
  
        var json = await response.json();
      } catch (error){
        console.log(error);
      }
         
      // console.log(json); 
      this.sendSocketNotification('CALENDAR_RESULT', json);

    })();


  },



  socketNotificationReceived: function(notification, payload) {
    console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);


    if(notification == "CALENDAR_GET"){
      this.getCalendarData(payload);
    }

    // switch(notification) {
    //   case "DO_YOUR_JOB":
    //     this.sendSocketNotification("I_DID", (this.countDown - payload))
    //     break
    // }
  },
})