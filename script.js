document.querySelector('form').addEventListener('submit', function(e) {
            let valid = true;
            let fname = document.getElementById('fname').value.trim();
            let lname = document.getElementById('lname').value.trim();
            let email = document.getElementById('email').value.trim();
            let password = document.getElementById('password').value;
            let mobnum = document.getElementById('mobnum').value.trim();

            // Name validation: only letters, at least 2 chars
            if (!/^[A-Za-z]{2,}$/.test(fname)) {
                alert('First name must be at least 2 letters and contain only alphabets.');
                valid = false;
            }
            if (!/^[A-Za-z]{2,}$/.test(lname)) {
                alert('Last name must be at least 2 letters and contain only alphabets.');
                valid = false;
            }
            // Email validation: HTML5 handles basic, but let's check format
            if (!/^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email)) {
                alert('Please enter a valid email address.');
                valid = false;
            }
            // Password validation: at least 6 chars
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                valid = false;
            }
            // Mobile number: 10 digits
            if (!/^\d{10}$/.test(mobnum)) {
                alert('Mobile number must be exactly 10 digits.');
                valid = false;
            }
            if (!valid) e.preventDefault();
        });