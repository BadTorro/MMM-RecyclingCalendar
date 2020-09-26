Module.register("MMM-RecyclingCalendar", {
    defaults: {
        foo: "I'm alive!"
      },
    start: function (){ // is executed when module is loaded successfully 
        Log.info('Starting module: ' + this.name);

        this.test = "aus";
        
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
        return wrapper;
      },

      getTestFunction: function(){
        this.sendSocketNotification('CALENDAR_GET', this.test);
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
          var elem = document.getElementById("COUNT")
          elem.innerHTML = payload;
        }

        // switch(notification) {
        //   case "I_DID":
        //     var elem = document.getElementById("COUNT")
        //     elem.innerHTML = payload;
        //     break
        // }
      },
  })