const databaseURL = "https://testing-e6d4b-default-rtdb.firebaseio.com"; // Update with your URL

// Define the endpoint to fetch data
const endpoint = `${databaseURL}/EmployeeSet.json`; // Adjust path as necessary

// Fetch data from the server
fetch(endpoint)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
    })
    .then((data) => {
        // Convert object to array using Object.values()
        let arr = Object.values(data);
        console.log("Database content:", arr);


        // You can also process the data if needed
        let clutter = ''
        let productContainer = document.querySelector('.product-container')
        arr.forEach((item) => {
            console.log(item);
            clutter += `<div class="card">
                <h1>Name : ${item.nameofemployee.firstName}</h1>
              <h2>LastName: ${item.nameofemployee.lastName}</h2>
              <h3>Department: ${item.department}</h3>
              </div>`
        });
        productContainer.innerHTML = clutter
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });