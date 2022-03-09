// from data.js
const tableData = data;
// get table references
var tbody = d3.select("tbody");
// build table
function buildTable(data) {
  tbody.html("");
  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}
var filters = {};
// update filters
function updateFilters() {
  let changedElement = d3.select(this);
  let elementValue = changedElement.property('value');
  let filterId = changedElement.attr('id');
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }
  filterTable();
}
// filter table
function filterTable() {
  let filteredData = tableData;
  Object.entries(filters).forEach(([key, value])=>{
    filteredData = filteredData.filter(row => row[key] === value);
  });
  buildTable(filteredData);
}
// event listener
d3.selectAll("input").on("change", updateFilters);
// build table
buildTable(tableData);