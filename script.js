// Form submission handler
document.getElementById("customerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const entry = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    goal: document.getElementById("goal").value,
    message: document.getElementById("message").value,
  };

  // Store in localStorage
  let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  submissions.push(entry);
  localStorage.setItem("submissions", JSON.stringify(submissions));

  alert("Thank you! We'll contact you soon.");
  document.getElementById("customerForm").reset();
});

// Admin panel display
function showAdminPanel() {
  const password = prompt("Enter admin password:");
  if (password !== "fitfusion123") {
    alert("Access denied");
    return;
  }

  const panel = document.getElementById("adminPanel");
  const submissionList = document.getElementById("submissionList");
  submissionList.innerHTML = ""; // Clear old data

  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  if (submissions.length === 0) {
    submissionList.innerHTML = "<p>No submissions yet.</p>";
  } else {
    submissions.forEach((entry, index) => {
      submissionList.innerHTML += `
        <div>
          <strong>${index + 1}. ${entry.name}</strong><br/>
          Email: ${entry.email}<br/>
          Phone: ${entry.phone}<br/>
          Goal: ${entry.goal}<br/>
          Message: ${entry.message}<br/><hr/>
        </div>
      `;
    });
  }

  panel.style.display = "block";
}
