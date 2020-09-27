const NodeHelper = require("node_helper");
const { DateTime } = require('luxon');
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

    var startdate = DateTime.local().toISODate();
    var enddate = DateTime.local().plus({ days: payload.daysToDisplay }).toISODate();

    http://openerz.metaodi.ch/api/calendar.json?zip=8047&start=2020-09-27&end=2020-10-04&offset=0&limit=0

    var params = new URLSearchParams();
    params.append('zip', payload.zipCode);
    params.append('start', startdate);
    params.append('end', enddate);

    // fetch(payload.url)
    // .then(function(response){
    //   return response.json();
    // })
    // .then(function(myJson){
    //   console.log(myJson);
    // });

    (async () => {
      var response = await fetch(payload.url, {method: 'GET', body: params});
      var json = await response.json();
    
      console.log(json);
    })();

    result = "temp result";
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