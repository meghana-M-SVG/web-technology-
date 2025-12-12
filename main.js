document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission action
    event.preventDefault();

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic client-side validation and handling
    if (username && password) {
        console.log('Login attempt successful!');
        console.log('Username:', username);
        console.log('Password:', password);
        
        // In a real application, you would send this data to a backend server
        // using fetch() or XMLHttpRequest.
        alert('Login successful! Check the console for details.');
        
        // You can redirect the user after a successful login
        // window.location.href = 'dashboard.html'; 
    } else {
        alert('Please enter both username and password.');
    }
});
