'use strict'
/**
 * Handles the ISS UI
 */
class ISSRenderer {
    endpointUrl = 'https://api.wheretheiss.at/v1/satellites/25544';

    constructor(data) {
        this.data = data;
        this.fetchData();
    }

    /**
     * Fetches Json from REST service endpoint url.
     */
    async fetchData() {
        let response = await fetch(this.endpointUrl);
        this.data = await response.json();
        this.updateUI();
    };

    /**
     * Updates related UI components
     */
    updateUI() {
        $('#iss').append(`<div class="col iss"></div>`);
        $("#iss-latitude").text(this.data.latitude);
        $("#iss-longitude").text(this.data.longitude);
        $("#iss-altitude").text(this.data.altitude);
        $("#iss-velocity").text(this.data.velocity);
        $("#iss-visibility").text(this.data.visibility);
        $("#iss-visibility").text(this.data.visibility);
        $("#iss-footprint").text(this.data.footprint);
        $("#iss-daynum").text(this.data.daynum);
        $("#iss-solar-lon").text(this.data.solar_lon);
        $("#iss-solar-lat").text(this.data.solar_lat);
        $("#iss-units").text(this.data.units);
    }
}
var issRenderer = new ISSRenderer();