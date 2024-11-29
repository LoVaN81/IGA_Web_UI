document.addEventListener('DOMContentLoaded', () => {
    const systems = [
        { id: "pam", name: "Privileged Access Management", logo: "images/cyberark-logo.png" },
        { id: "myaccess", name: "MyAccess", logo: "images/omada-logo.png" },
        { id: "ad", name: "Microsoft Active Directory", logo: "images/ad-logo.png" },
        { id: "sap", name: "SAP System", logo: "images/sap-logo.png" },
        { id: "oracle", name: "Oracle Database", logo: "images/oracle-logo.png" },
        { id: "salesforce", name: "Salesforce", logo: "images/salesforce-logo.png" },
        { id: "jira", name: "Jira", logo: "images/jira-logo.png" },
        { id: "zoom", name: "Zoom", logo: "images/zoom-logo.png" },
        { id: "slack", name: "Slack", logo: "images/slack-logo.png" }
    ];

    const departments = [
        "IT", "HR", "Finance", "Marketing", "Operations"
    ];

    const systemSearch = document.getElementById('systemSearch');
    const departmentSearch = document.getElementById('departmentSearch');
    const dropdownList = document.getElementById('dropdownList');
    const departmentList = document.getElementById('departmentList');
    const roleSelect = document.getElementById('role');
    const submitBtn = document.getElementById('submitBtn');
    const statusMessage = document.getElementById('statusMessage');
    let selectedSystem = null;
    let selectedDepartment = null;

    // Filter systems based on search input
    function filterSystems(query) {
        const filteredSystems = systems.filter(system => system.name.toLowerCase().includes(query.toLowerCase()));
        displayDropdown(filteredSystems, 'system');
    }

    // Filter departments based on search input
    function filterDepartments(query) {
        const filteredDepartments = departments.filter(department => department.toLowerCase().includes(query.toLowerCase()));
        displayDropdown(filteredDepartments, 'department');
    }

    // Display dropdown for systems or departments
    function displayDropdown(filteredItems, type) {
        const list = type === 'system' ? dropdownList : departmentList;
        list.innerHTML = ''; // Clear the current list
        if (filteredItems.length === 0) {
            list.style.display = 'none';
            return;
        }
        filteredItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('dropdown-item');
            if (type === 'system') {
                itemDiv.innerHTML = `<img src="${item.logo}" alt="${item.name} logo" />${item.name}`;
                itemDiv.onclick = () => selectSystem(item);
            } else {
                itemDiv.textContent = item;
                itemDiv.onclick = () => selectDepartment(item);
            }
            list.appendChild(itemDiv);
        });
        list.style.display = 'block';
    }

    // Select a system
    function selectSystem(system) {
        systemSearch.value = system.name;
        selectedSystem = system;
        dropdownList.style.display = 'none';
        updateRoles();
    }

    // Select a department
    function selectDepartment(department) {
        departmentSearch.value = department;
        selectedDepartment = department;
        departmentList.style.display = 'none';
        updateRoles();
    }

    // Update roles based on the selected system and department
    function updateRoles() {
        roleSelect.innerHTML = '<option value="">Select a role</option>';
        roleSelect.disabled = true;

        if (!selectedSystem || !selectedDepartment) return;

        let roles = [];
        if (selectedDepartment === "IT") {
            roles = ["Admin", "User", "Viewer"];
        } else if (selectedDepartment === "HR") {
            roles = ["Employee", "Manager"];
        } // Add more roles for other departments

        roles.forEach(role => {
            const option = document.createElement('option');
            option.value = role;
            option.textContent = role;
            roleSelect.appendChild(option);
        });
        roleSelect.disabled = false;
    }

    // Event listeners for search inputs
    systemSearch.addEventListener
