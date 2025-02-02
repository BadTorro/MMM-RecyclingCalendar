# MMM-RecyclingCalender
This a module for [Magic Mirror²](https://github.com/MichMich/MagicMirror).<br/>
This displays a recycling calendar for the Stadt Zürich, Switzerland, based on [OpenERZ API](https://github.com/metaodi/openerz). 

![Screenshot](screenshot.png?raw=true "Recycling Calendar Screenshot")

## Installation
Clone this repository in your modules folder, and install dependencies:

```
cd ~/MagicMirror/modules 
git clone https://gitlab.com/FatTony404/MMM-RecyclingCalendar.git
cd MMM-RecyclingCalendar
npm install 
```

## Configuration 
Go to the MagicMirror/config directory and edit the config.js file. Add the module to your modules array in your config.js.

```
{
  module: "MMM-RecyclingCalendar",
  position: "top_left",
  header: "Recycling Calendar",
  config: {
    zipCode: 8001, 
    daysToDisplay: 7,
    showStations: true,
    showExplanation: true, 
    showTypes: ['cardboard', 'waste', 'organic'],
    showDate: "daysAndDate",
    showColorIcons: true, 
  }
}
```

## Module configuration 
The following options can be configured for the module. 
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
        <td><code>showTypes</code></td>
        <td>Select one or more recycling types to show.
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
     <tr>
        <td><code>showColorIcons</code></td>
        <td>Shows colored icons instead of grayscale ones 
        <br /><br />
        <strong>Default values: </strong><code>false</code><br />
        <strong>Possible values:</strong><br />
        <code>true</code> - Shows colored icons<br />
        <code>false</code> - Shows grayscale icons<br />
        </td>
    </tr>
    <tr>
        <td><code>limitEntries</code></td>
        <td>Limits the result entries shown in the result table.  
        <br /><br />
        <strong>Default values: </strong><code>50</code><br />
        </td>
    </tr>
    <tr>
        <td><code>showUpdateHint</code></td>
        <td>Shows a small hint at the bottom of list mentioning the last performed update time. 
        <br /><br />
        <strong>Default values: </strong><code>true</code><br />
        <strong>Possible values:</strong>
        <code>true</code>, <code>false</code>
        </td>
    </tr>
    <tr>
        <td><code>pollFrequency</code></td>
        <td>Poll frequency / poll time when an update to the API source should be performed. 
        <br /><br />
        <strong>Default values: </strong><code>10 * 60 * 1000 </code>(10 minutes in miliseconds)<br />
        <strong>Possible values: </strong><code>milliseconds</code>
        </td>
    </tr>
  </tbody>
</table>

## Icons
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

## Notes
The original script is from [MMM-MyWastePickup](https://github.com/jclarke0000/MMM-MyWastePickup) and [MMM-MyGarbage](https://github.com/htilburgs/MMM-MyGarbage), adapted to fit an API and different appearance.
