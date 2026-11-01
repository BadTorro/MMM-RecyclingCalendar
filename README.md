# MMM-RecyclingCalendar
This is a module for [MagicMirror²](https://github.com/MichMich/MagicMirror) that displays recycling collection dates from the [OpenERZ API](https://github.com/metaodi/openerz). It can filter collections by region or postal code.

![Screenshot](screenshot.png?raw=true "Recycling Calendar Screenshot")

## Installation
Clone this repository into your modules folder, and install dependencies:

```
cd ~/MagicMirror/modules
git clone https://github.com/BadTorro/MMM-RecyclingCalendar.git
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
    region: "zurich",
    daysToDisplay: 7,
    showStations: true,
    showExplanation: true, 
    showDate: "daysAndDate",
    showColorIcons: true,
  }
}
```

## Module configuration
The module displays a loading message while the first calendar request is pending. The following options can be configured; values shown as defaults match the module configuration.
<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td><code>region</code></td>
        <td>OpenERZ region slug to request. For example, set this to <code>zurich</code> for the city of Zürich. When set, the API filters by region instead of postal code.
        <br /><br />
        <strong>Default value: </strong><code>""</code> (use <code>zipCode</code>)
        </td>
    </tr>
    <tr>
        <td><code>language</code></td>
        <td>Language passed to OpenERZ for localized collection descriptions.
        <br /><br />
        <strong>Default value: </strong><code>de</code><br />
        <strong>Possible values:</strong> <code>de</code>, <code>en</code>
        </td>
    </tr>
    <tr>
        <td><code>zipCode</code></td>
        <td>Postal code used when <code>region</code> is empty. Set the postal code for your area; for example, use <code>8001</code> for postal-code filtering in Zürich.
        <br /><br />
        <strong>Default value: </strong><code>8942</code>
        </td>
    </tr>
    <tr>
        <td><code>daysToDisplay</code></td>
        <td>Number of days added to today to set the end date of the API request.
        <br /><br />
        <strong>Default value: </strong><code>7</code>
        </td>
    </tr>
    <tr>
        <td><code>showDate</code></td>
        <td>Select how collection dates should be shown.
        <br /><br />
       <strong>Default value: </strong><code>daysAndDate</code><br />
       <strong>Possible values:</strong><br />
       <code>daysAndDate</code> - Shows recycling dates in format, e.g. Tuesday, DD.MM.YYYY<br />
       <code>inDays</code> - Shows recycling dates in days, e.g. Tuesday<br />
       <code>shortDate</code> - Shows recycling dates in format DD.MM.YYYY<br />
       </td>
    </tr>
    <tr>
       <td><code>showTypes</code></td>
       <td>Optionally set an array of recycling types to show. Leave empty to show all types returned for the selected region. Types include <code>cardboard</code>, <code>cargotram</code>, <code>etram</code>, <code>metal</code>, <code>organic</code>, <code>paper</code>, <code>special</code>, <code>textile</code>, <code>waste</code>, and <code>chipping_service</code>.
       <br /><br />
       <strong>Default value: </strong>empty (all types)
       </td>
    </tr>
    <tr>
       <td><code>showStations</code></td>
       <td>Shows the station name for collections when the API provides one.
       <br /><br />
       <strong>Default value: </strong><code>false</code>
       </td>
    </tr>
    <tr>
       <td><code>showExplanation</code></td>
       <td>Shows a translated collection type next to its icon.
       <br /><br />
       <strong>Default value: </strong><code>false</code>
       </td>
    </tr>
    <tr>
       <td><code>showColorIcons</code></td>
       <td>Shows colored icons instead of grayscale ones.
       <br /><br />
       <strong>Default value: </strong><code>false</code>
       </td>
    </tr>
    <tr>
       <td><code>limitEntries</code></td>
       <td>Maximum number of calendar entries requested from the API.
       <br /><br />
       <strong>Default value: </strong><code>50</code>
       </td>
    </tr>
    <tr>
       <td><code>showUpdateHint</code></td>
       <td>Shows the time the module last initiated a scheduled refresh at the bottom of the list.
       <br /><br />
       <strong>Default value: </strong><code>true</code>
       </td>
    </tr>
    <tr>
       <td><code>pollFrequency</code></td>
       <td>How often the module refreshes calendar data from the API, in milliseconds.
       <br /><br />
       <strong>Default value: </strong><code>24 * 60 * 60 * 1000</code> (24 hours in milliseconds)<br />
       </td>
    </tr>
    <tr>
       <td><code>url</code></td>
       <td>OpenERZ calendar API endpoint.
       <br /><br />
       <strong>Default value: </strong><code>https://openerz.metaodi.ch/api/calendar.json</code>
       </td>
    </tr>
    <tr>
       <td><code>sort</code></td>
       <td>Sort order passed to the OpenERZ API.
       <br /><br />
       <strong>Default value: </strong><code>date:asc</code>
       </td>
    </tr>
  </tbody>
</table>

## Icons
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

## Notes
The original script is from [MMM-MyWastePickup](https://github.com/jclarke0000/MMM-MyWastePickup) and [MMM-MyGarbage](https://github.com/htilburgs/MMM-MyGarbage), adapted to fit an API and different appearance.
