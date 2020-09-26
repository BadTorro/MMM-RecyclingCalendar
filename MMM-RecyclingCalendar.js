Module.register("MMM-RecyclingCalendar", {
    defaults: {},
    start: function () {},
    getDom: function() {
        var element = document.createElement("div")
        element.className = "myContent"
        element.innerHTML = "Hello, World!"
        return element
      },
    notificationReceived: function() {},
    socketNotificationReceived: function() {},
  })