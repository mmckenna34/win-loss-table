# win-loss-table
Given a json file that includes each team's Win-Loss records versus opponents, provide a code sample of how you would build a table displaying a matrix of head-to-head records.

<a href="https://imgbb.com/"><img src="https://i.ibb.co/vVX1Hbr/Screenshot-2023-01-19-at-5-19-54-PM.png" alt="Win-Loss Table" border="0"></a>

For this solution, I used a React component along with HTML to replicate the table. Rather than creating a JSON file for the example data, I created a JavaScript object which I passed into the React component; if this was data coming from an API, I would implement JSON.parse() to turn the JSON string into an object. I started by using the Object.keys() method to save an array of team names as the 'teams' variable, and I also created an empty object, 'rowData', that will hold key-value pairs of each team along with their respective wins against every other team. I used a for loop to iterate through every team, and implemented a second, nested for loop iterating through each team's win/loss data. I used a temporary array to hold the wins data in the correct order. In order to account for the cells in the matrix where a team would be matched up with itself, I pushed dashes into the array at the appropriate index. Once the loop completed, I added each team's name to the front of their row data array and saved that array to the corresponding team key in the 'rowData' object. Once the 'rowData' object is completed, I used array mapping to fill in the data within the table HTML element. I used the same code for the table header and footer because the data is identical. For basic styling, I used a basic template called MVP.css. 

To run this code, I used webpack-dev-server to utilize hot reloading functionality. If you would like to check it out for yourself, run 'yarn dev' in the terminal.

Tech Stack: JavaScript, React, CSS, Babel, Webpack
