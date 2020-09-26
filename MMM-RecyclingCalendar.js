Module.register("MMM-RecyclingCalendar", {
    defaults: {
        foo: "I'm alive!"
      },
    start: function (){ // is executed when module is loaded successfully 
        Log.info('Starting module: ' + this.name);
        
        // this.getTestFunction();

        // this.count = 0
        // var timer = setInterval(()=>{
        //   this.updateDom()
        //   this.count++
        // }, 1000)
      },
      getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.config.foo;
        return wrapper;
      },

      getTestFunction: function(){
        this.sendSocketNotification('MMM-RECYCLINGCALENDAR-GET', this.config);
      },
      
      notificationReceived: function(notification, payload, sender) {
        if (sender) {
          Log.log(this.name + " received a module notification: " + notification + " from sender: " + sender.name);
        } else {
          Log.log(this.name + " received a system notification: " + notification);
        }

        if(notification == "DOM_OBJECTS_CREATED"){
          this.getTestFunction();
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

        // switch(notification) {
        //   case "I_DID":
        //     var elem = document.getElementById("COUNT")
        //     elem.innerHTML = payload;
        //     break
        // }
      },
  })