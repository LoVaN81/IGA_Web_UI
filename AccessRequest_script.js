// System List
let systems = [
    { name: "Active Directory", logo: "images/activedirectory.png" },
    { name: "MyAccess", logo: "images/myaccess.png" },
    { name: "Privileged Access Management", logo: "images/pam.png" }
];

// Department List
let department = [
    { name: "Digital Technology Infrastructure"},
    { name: "Digital Technology Security"},
    { name: "Digital Technology All"}
];

// Get input and container
const systemInput = document.getElementById("system");
const departmentInput = document.getElementById("department");
const suggestionsContainerSystem = document.querySelector(".suggestions-container-system");
const suggestionsContainerDepartment = document.querySelector(".suggestions-container-department");

// Handle input changes
systemInput.addEventListener("input", function () {
    const query = systemInput.value.toLowerCase();
    suggestionsContainerSystem.innerHTML = ""; // Clear previous suggestions

    if (query) {
        // Filter systems by the query
        const filteredSystems = systems.filter(system =>
            system.name.toLowerCase().includes(query)
        );

        // Populate suggestions
        filteredSystems.forEach(system => {
            const suggestion = document.createElement("div");
            suggestion.classList.add("suggestion-item");

            // Add logo and system name
            suggestion.innerHTML = `
                <img src="${system.logo}" alt="${system.name}" />
                <span>${system.name}</span>
            `;

            // Set input value on click
            suggestion.addEventListener("click", () => {
                systemInput.value = system.name;
                suggestionsContainerSystem.innerHTML = ""; // Clear suggestions
            });

            suggestionsContainerSystem.appendChild(suggestion);
        });
    }
});

departmentInput.addEventListener("input", function () {
    const query = departmentInput.value.toLowerCase();
    suggestionsContainerDepartment.innerHTML = ""; // Clear previous suggestions

    if (query) {
        // Filter systems by the query
        const filteredDepartments = department.filter(department =>
            department.name.toLowerCase().includes(query)
        );

        // Populate suggestions
        filteredDepartments.forEach(department => {
            const suggestion = document.createElement("div");
            suggestion.classList.add("suggestion-item");

            // Add logo and department name
            suggestion.innerHTML = `
                <span>${department.name}</span>
            `;

            // Set input value on click
            suggestion.addEventListener("click", () => {
                departmentInput.value = department.name;
                suggestionsContainerDepartment.innerHTML = ""; // Clear suggestions
            });

            suggestionsContainerDepartment.appendChild(suggestion);
        });
    }
});
