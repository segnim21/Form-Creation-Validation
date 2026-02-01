async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

try {
    const response  = await fetch(apiUrl);
    
    const users = await response.json();

    dataContainer.innerHTML = '';
    const userList = document.getElementById('ul');
    users.forEach(user => {
        const li = document.getElementById('li');
        li.textContent = user.name
        userList.appendChild(li);

    });
    dataContainer.appendChild(userList);
} 
catch (error) {
    dataContainer.innerHTML = 'Failed to load user data';
    console.error('Error fetching users:', error);
} }
document.getElementById('DOMContentLoaded', fetchUserData);