

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
