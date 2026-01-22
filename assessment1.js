function validate(userRole, isAuthenticated, useAge) {
  if (isAuthenticated == false) {
    console.log("please login");
    return;
  }

  if (userRole === "admin") {
    console.log("Welcome, Admin!");
  } else if (userRole === "editor") {
    console.log("Welcome, Editor!");
  } else if (userRole === "guest") {
    console.log("Welcome, User!");
  } else {
    console.log("Access Denied");
  }
}

validate("admin", true, 25); // Output: Welcome, Admin!
