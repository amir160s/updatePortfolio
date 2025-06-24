

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});


// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tab Functionality for Portfolio Section
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');

        // Remove active class from all buttons and contents
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Calculator Functionality
function appendToInput(value) {
    document.getElementById('calcInput').value += value;
}

function clearInput() {
    document.getElementById('calcInput').value = '';
    document.getElementById('calcResult').style.display = 'none';
}

function calculate() {
    const input = document.getElementById('calcInput').value;
    try {
        // Replace × and ÷ with * and / for evaluation
        const expression = input.replace(/×/g, '*').replace(/÷/g, '/');
        const result = eval(expression);
        document.getElementById('calcResult').innerHTML = `<strong>Result:</strong> ${result}`;
        document.getElementById('calcResult').style.display = 'block';
    } catch (e) {
        document.getElementById('calcResult').innerHTML = '<strong>Error:</strong> Invalid expression';
        document.getElementById('calcResult').style.display = 'block';
    }
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to m

    if (isNaN(weight) || isNaN(height) || height === 0) {
        document.getElementById('bmiResult').innerHTML = '<strong>Error:</strong> Please enter valid values';
        document.getElementById('bmiResult').style.display = 'block';
        return;
    }

    const bmi = weight / (height * height);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    document.getElementById('bmiResult').innerHTML = `
                <strong>Your BMI:</strong> ${bmi.toFixed(1)}<br>
                <strong>Category:</strong> ${category}
            `;
    document.getElementById('bmiResult').style.display = 'block';
}

// Matrimonial Biodata Form
document.getElementById('matrimonialForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const height = document.getElementById('height').value;
    const religion = document.getElementById('religion').value;
    const education = document.getElementById('education').value;
    const occupation = document.getElementById('occupation').value;
    const income = document.getElementById('income').value;
    const family = document.getElementById('family').value;
    const hobbies = document.getElementById('hobbies').value;
    const expectations = document.getElementById('expectations').value;

    // Format date
    const formattedDob = dob ? new Date(dob).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : 'Not specified';

    // Generate biodata content
    const biodataContent = `
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Date of Birth:</strong> ${formattedDob}</p>
                <p><strong>Height:</strong> ${height || 'Not specified'}</p>
                <p><strong>Religion:</strong> ${religion || 'Not specified'}</p>
                <p><strong>Education:</strong> ${education || 'Not specified'}</p>
                <p><strong>Occupation:</strong> ${occupation || 'Not specified'}</p>
                <p><strong>Annual Income:</strong> ${income || 'Not specified'}</p>
                <p><strong>Family Background:</strong></p>
                <p>${family || 'Not specified'}</p>
                <p><strong>Hobbies & Interests:</strong></p>
                <p>${hobbies || 'Not specified'}</p>
                <p><strong>Partner Expectations:</strong></p>
                <p>${expectations || 'Not specified'}</p>
            `;

    document.getElementById('biodataContent').innerHTML = biodataContent;
    document.getElementById('biodataResult').style.display = 'block';

    // Scroll to result
    document.getElementById('biodataResult').scrollIntoView({ behavior: 'smooth' });
});

//Sent a Message
function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    Email.send({
        SecureToken: "YOUR_SECURE_TOKEN_HERE",  // Replace with token from smtpjs.com
        To: 'receiver@email.com',
        From: "sender@email.com",
        Subject: "New Contact Form Message",
        Body: `
            <b>Name:</b> ${name}<br>
            <b>Email:</b> ${email}<br>
            <b>Message:</b><br>${message}
        `,
    })
    .then(function(response) {
        alert("Message sent successfully!");
    })
    .catch(function(error) {
        alert("Error: " + error);
    });
}

//Subscribsion

function handleSubscribe(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const email = document.getElementById("subscriberEmail").value;

    if (email) {
        alert("Thank you for subscribing with: " + email);
        // Optionally, you can clear the field:
        // document.getElementById("subscriberEmail").value = '';
    } else {
        alert("Please enter a valid email address.");
    }
}
// Download Biodata as PDF (simulated)
document.getElementById('downloadBiodata').addEventListener('click', function () {
    alert('In a real implementation, this would generate and download a PDF of your biodata.');
});