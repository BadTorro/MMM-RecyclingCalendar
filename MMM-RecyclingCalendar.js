Module.register("MMM-RecyclingCalendar", {
    
  defaults: {
        foo: "I'm alive!",
        zipCode: 8047, 
        daysToDisplay: 7,  
        url: "http://openerz.metaodi.ch/api/calendar.json",
      },

    start: function (){ // is executed when module is loaded successfully 
        Log.info('Starting module: ' + this.name);

        // this.test = "aus ";

        this.calendarData = [];

        
        this.getTestFunction();


        // this.count = 0
        // var timer = setInterval(()=>{
        //   this.updateDom()
        //   this.count++
        // }, 1000)
      },

      getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.config.foo;
        var subElement = document.createElement("p");
        subElement.id = "COUNT";
        wrapper.appendChild(subElement);
        // return wrapper;

        for(var i = 0; i<this.calendarData.length; i++){
          var entry = this.calendarData[i];

          var entriesContainer = document.createElement("div");

          var listEntry = document.createElement("span");
          listEntry.innerHTML = entry['type'];

          entriesContainer.appendChild(listEntry);

          wrapper.appendChild(entriesContainer);
        }

        return wrapper; 

      },

      getTestFunction: function(){
        this.sendSocketNotification('CALENDAR_GET', this.config);
      },
      
      notificationReceived: function(notification, payload, sender) {
        if (sender) {
          Log.log(this.name + " received a module notification: " + notification + " from sender: " + sender.name);
        } else {
          Log.log(this.name + " received a system notification: " + notification);
        }

        
        // switch(notification) {
        //   case "DOM_OBJECTS_CREATED":
        //     var timer = setInterval(()=>{
        //       this.sendSocketNotification("MMM-RECYCLINGCALENDAR-CONFIG", this.count)
        //       this.count++
        //     }, 1000)
        //     break
        // }
      },

      socketNotificationReceived: function(notification, payload) {
        Log.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);

        if(notification === "CALENDAR_RESULT"){
          // var elem = document.getElementById("COUNT")
          // elem.innerHTML = payload;
          console.log(payload);
          this.calendarData = payload;
          this.updateDom();
        }

        // switch(notification) {
        //   case "I_DID":
        //     var elem = document.getElementById("COUNT")
        //     elem.innerHTML = payload;
        //     break
        // }
      },
  })