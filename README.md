# UFOs

## Overview
### Purpose of Analysis
The purpose of this project is to create a webpage that hosts a listing of suspected UFO sightings. A functionality was then created to allow users to filter the listing to return only sightings that fit certain criteria such as date or location.

## Results
### Searching Process
To perform a search one first needs to access the website, either directly through a browser or optimally via a live server. Once on the website the user will see an introductory statement, explanation of the data, and the actual data listing below that. For each sighting in the listing there is a date, city, state, country, shape, duration, and any additional comments. On the left side of the screen the user will see a list of options to filter the search by. The gray text is just default text to provide an example to users of what text should be entered for a given field.

![image](https://user-images.githubusercontent.com/92831138/152599919-3494eec3-f17e-4d9d-80dd-772752ba780d.png)


Entering information into any of these boxes and then clicking anywhere else on the webpage will filter the data and only return matching results. For instance a search for sightings on 1/4/2010 in California will initially return three results, but further filtering this by specifying the city of San Pablo will return one specific result.

![image](https://user-images.githubusercontent.com/92831138/152600158-86939dc6-dc5e-482b-a023-5c6f22d5a6ae.png)

The filters can be changed at any time to return different results without a need to refresh the webpage, with one exception that will be noted in the summary section.

## Summary

### Recommendation
One recommendation for the webpage in the future would be to add a dropdown functionality via bootstrap to the filter entry fields to allow the user to know what fields are available for each filter. This would prevent any instances of a user putting in a value for a filter that is not currently present on any of the rows in the listing.

Another recommendation would be to standardize the entry of the values in the duration column of the listing. As it is currently it would be incredibly difficult to filter due to the combinations of strings and integers, especially with the varied structure of the strings. An easier solution than attempting to filter the existing data would be to simply create a standardized format for the data entry, modify existing fields, and then ensure new entries are in the correct format. A filter could then be added into the script for the page allowing for users to filter the data by duration as well. 
