# MMM-RecyclingCalender
Recycling calender for stadt zuerich

## App to show recycling data of city zuerich 
- https://data.stadt-zuerich.ch/dataset?q=entsorgung
- https://www.stadt-zuerich.ch/portal/de/index/ogd/anwendungen/2019/open_erz_api.html
- http://openerz.metaodi.ch/documentation#/api/getApiCalendarCardboardformat

## Similar module to: 
- https://forum.magicmirror.builders/topic/2731/mmm-mywastepickup-toronto-waste-collection-schedule
- https://github.com/htilburgs/MMM-MyGarbage


## Useful links for learing: 
- https://github.com/mykle1/MMM-UFO
- https://github.com/htilburgs/MMM-MyGarbage
- https://docs.magicmirror.builders/development/core-module-file.html#module-instance-methods
- https://github.com/jclarke0000/MMM-MyWastePickup


## Content of app  
- Shows recycling entries for current week 
- Default value of weeks to show: weeksToDisplay 
- Show each day with recycling activity within those 7 days 

## Types of waste to show 
<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>collectionCalendar</code></td>
      <td><strong>REQUIRED</strong> The schedule for your curbside pickup, as dertmined above.<br><br><strong>String</strong> <code>Array</code><br />Valid values are <code>MondayNight</code>, <code>Tuesday1</code>, <code>Tuesday2</code>, <code>Wednesday1</code>, <code>Wednesday2</code>, <code>Thursday1</code>, <code>Thursday2</code>, <code>Friday1</code>, or <code>Friday2</code>.<br />It is also possible to specify <code>Custom</code> in case you want to use your own custom pickup schedule.  See below for more information about using your own schedule.<br /><br />Any other value will be ignored and the module will default to <code>Tuesday1</code>.</td>
    </tr>
    <tr>
      <td><code>weeksToDisplay</code></td>
      <td>How many weeks into the future to show collection dates.<br /><br /><strong>Number</strong><br />Default: <code>2</code>.</td>
    </tr>
    <tr>
      <td><code>limitTo</code></td>
      <td>Limit the display to the spcified number of pickups.<br /><br /><strong>Number</strong><br />Default: <code>99</code>.</td>
    </tr>
    <tr>
        <td><code>showType</code></td>
        <td>Select the type of recycling setting to show.
        <br /><br />
        <strong>Possible values:<br /></strong>
        <code>general</code> - Shows any recycling for given date period<br />
        <code>cardboard</code> - Shows cardboard recycling for given date period<br />
        <code>cargotram</code> - Shows cargotram recycling for given date period<br />
        <code>etram</code> - Shows etram recycling for given date period<br />
        <code>metal</code> - Shows metal recycling for given date period<br />
        <code>organic</code> - Shows organic recycling for given date period<br />
        <code>paper</code> - Shows paper recycling for given date period<br />
        <code>special</code> - Shows special recycling for given date period<br />
        <code>textile</code> - Shows textile recycling for given date period<br />
        <code>waste</code> - Shows waste recycling for given date period<br />
        </td>
    </tr>
  </tbody>
</table>
