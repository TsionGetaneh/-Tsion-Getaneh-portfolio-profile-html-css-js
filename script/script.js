// Select the hamburger menu and the navigation menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Add click event listener to toggle the menu
hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked!"); 
  menu.classList.toggle("active"); // Toggle the 'active' class
  console.log("Menu classes:", menu.classList);
  console.log("Menu element styles:", getComputedStyle(menu));
});





// Select elements
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submit-btn");

// Form submission handler
submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  // Basic validation
  if (!subject) {
    alert("Please enter a subject.");
    subjectInput.focus();
    return;
  }

  if (!message) {
    alert("Please enter a message.");
    messageInput.focus();
    return;
  }

  // Simulate form submission
  console.log("Form submitted!");
  console.log("Subject:", subject);
  console.log("Message:", message);

  // Optionally, clear the form after submission
  subjectInput.value = "";
  messageInput.value = "";

  alert("Thank you for your message!");
});

