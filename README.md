# MMM-RecyclingCalender
Recycling calender for stadt zuerich

## Installation
1. Navigate into your MagicMirror `modules` folder and execute<br>
`git clone https://github.com/FatTony123/MMM-RecyclingCalendar.git`.


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

## Configuration options
<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td><code>zipCode</code></td>
        <td>Enter the zipCode of Zurich region you want to display 
        <br /><br />
        <strong>Default values: </strong><code>4 digit zip code</code><br />
        <strong>Possible values:</strong>
        <code>numbers</code>
        </td>
    </tr>
    <tr>
        <td><code>daysToDisplay</code></td>
        <td>Enter the number of days recycling dates should be shown. 
        <br /><br />
        <strong>Default values: </strong><code>7</code><br />
        <strong>Possible values:</strong>
        <code>numbers</code>
        </td>
    </tr>
    <tr>
        <td><code>showDate</code></td>
        <td>Select the type of how the dates should be shown.
        <br /><br />
        <strong>Default values: </strong><code>daysAndDate</code><br />
        <strong>Possible values: <br /></strong>
        <code>daysAndDate</code> - Shows recycling dates in format, e.g. Tuesday, DD.MM.YYYY<br />
        <code>inDays</code> - Shows recycling dates in days, e.g. Tuesday<br />
        <code>shortDate</code> - Shows recycling dates in format DD.MM.YYYY<br />
        </td>
    </tr>
    <tr>
        <td><code>showType</code></td>
        <td>Select the type of recycling setting to show.
        <br /><br />
        <strong>Default values: </strong><code>  </code> (empty, none)<br />
        <strong>Possible values: <br /></strong>
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
    <tr>
        <td><code>showLocations</code></td>
        <td>Shows the location of tram recycling stations (cargotrams & etrams)  
        <br /><br />
        <strong>Default values: </strong><code>false</code><br />
        <strong>Possible values:</strong><br />
        <code>true</code> - Shows locations where given<br />
        <code>false</code> - Does not show any location details<br />
        </td>
    </tr>
     <tr>
        <td><code>showExplanation</code></td>
        <td>Shows the explanation of symbols
        <br /><br />
        <strong>Default values: </strong><code>false</code><br />
        <strong>Possible values:</strong><br />
        <code>true</code> - Shows explanations to recycling symbols<br />
        <code>false</code> - Does not show any explanation details<br />
        </td>
    </tr>
  </tbody>
</table>

## Icons: 
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

## Open Todos: 
- add color icons
- show explanation for symbols 
- more sophisticated error handling? 
- add sort possiblities --> Currently sort by date 