// -------------------------- first aproach ------------------------

// let searchData = [];

// function uploadCSV() {
//     const fileInput = document.getElementById('csvFile');
//     const file = fileInput.files[0];

//     if (file) {
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             const csvData = e.target.result;
//             processData(csvData);
//         };

//         reader.readAsText(file);
//     }
// }

// function processData(csvData) {
//     // Parse CSV data and store it in searchData array
//     // This depends on the structure of your CSV file
//     // Example assumes CSV has a header row and columns are comma-separated
//     searchData = csvData.split('\n').map(row => row.split(','));

//     // You may want to preprocess the data based on your requirements
// }

// function search() {
//     const query = document.getElementById('searchInput').value.toLowerCase();
//     const searchResults = searchData.filter(row => row.some(cell => cell.toLowerCase().includes(query)));

//     displayResults(searchResults);
// }

// function displayResults(results) {
//     const resultsContainer = document.getElementById('searchResults');
//     resultsContainer.innerHTML = '';

//     if (results.length === 0) {
//         resultsContainer.innerHTML = 'No results found.';
//         return;
//     }

//     const table = document.createElement('table');
//     table.border = '1';

//     results.forEach(rowData => {
//         const row = table.insertRow();
//         rowData.forEach(cellData => {
//             const cell = row.insertCell();
//             cell.textContent = cellData;
//         });
//     });

//     resultsContainer.appendChild(table);
// }

// ----------------------- 2nd aproach ---------------------

let searchData = [];

function uploadCSV() {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const csvData = e.target.result;
            processData(csvData);
            saveDataToLocalStorage();
        };

        reader.readAsText(file);
    }
}

function processData(csvData) {
    // Parse CSV data and store it in searchData array
    // This depends on the structure of your CSV file
    // Example assumes CSV has a header row and columns are comma-separated
    searchData = csvData.split('\n').map(row => row.split(','));

    // You may want to preprocess the data based on your requirements
}

function search() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = searchData.filter(row => row.some(cell => cell.toLowerCase().includes(query)));

    displayResults(searchResults);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = 'No results found.';
        return;
    }

    const table = document.createElement('table');
    table.border = '2';

    results.forEach(rowData => {
        const row = table.insertRow();
        rowData.forEach(cellData => {
            const cell = row.insertCell();
            cell.textContent = cellData;
        });
    });

    resultsContainer.appendChild(table);
}

function saveDataToLocalStorage() {
    // Save searchData to local storage
    localStorage.setItem('searchData', JSON.stringify(searchData));
}

function loadDataFromLocalStorage() {
    // Load searchData from local storage
    const savedData = localStorage.getItem('searchData');
    if (savedData) {
        searchData = JSON.parse(savedData);
    }
}

// Load data from local storage when the page loads
loadDataFromLocalStorage();


// -----------  3rd approach -----------------


// let searchData = [];

// function uploadCSV() {
//     const fileInput = document.getElementById('csvFiles');
//     const files = fileInput.files;

//     for (let i = 0; i < files.length; i++) {
//         const file = files[i];
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             const csvData = e.target.result;
//             processData(csvData);
//             saveDataToLocalStorage();
//         };

//         reader.readAsText(file);
//     }
// }

// function processData(csvData) {
//     // Parse CSV data and store it in searchData array
//     // This depends on the structure of your CSV file
//     // Example assumes CSV has a header row and columns are comma-separated
//     const newDataSet = csvData.split('\n').map(row => row.split(','));
//     searchData.push(newDataSet);

//     // You may want to preprocess the data based on your requirements
// }

// function search() {
//     const query = document.getElementById('searchInput').value.toLowerCase();
//     const searchResults = [];

//     // Search through all datasets
//     for (let i = 0; i < searchData.length; i++) {
//         const dataSet = searchData[i];
//         const result = dataSet.filter(row => row.some(cell => cell.toLowerCase().includes(query)));
//         searchResults.push(result);
//     }

//     displayResults(searchResults);
// }

// function displayResults(results) {
//     const resultsContainer = document.getElementById('searchResults');
//     resultsContainer.innerHTML = '';

//     if (results.length === 0) {
//         resultsContainer.innerHTML = 'No results found.';
//         return;
//     }

//     for (let i = 0; i < results.length; i++) {
//         const result = results[i];

//         const table = document.createElement('table');
//         table.border = '1';

//         result.forEach(rowData => {
//             const row = table.insertRow();
//             rowData.forEach(cellData => {
//                 const cell = row.insertCell();
//                 cell.textContent = cellData;
//             });
//         });

//         resultsContainer.appendChild(table);
//         resultsContainer.appendChild(document.createElement('hr'));
//     }
// }

// function saveDataToLocalStorage() {
//     // Save searchData to local storage
//     localStorage.setItem('searchData', JSON.stringify(searchData));
// }

// function loadDataFromLocalStorage() {
//     // Load searchData from local storage
//     const savedData = localStorage.getItem('searchData');
//     if (savedData) {
//         searchData = JSON.parse(savedData);
//     }
// }

// // Load data from local storage when the page loads
// loadDataFromLocalStorage();
