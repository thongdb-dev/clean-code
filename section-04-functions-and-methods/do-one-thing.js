function handleCreateUserRequest(request) {
  try {
    createUser("test@test.com", "testers");
  } catch (error) {
    showErrorMessage(error.message);
  }
}

function createUser(email, password) {
  validateInput(email, password);
  saveUser(email, password);
}

function createSupportChannel(email) {
  if (!emailIsValid(email)) {
    showErrorMessage("Invalid email - could not create channel");
  }
  // ...
}

function validateInput() {
  if (!inputIsValid(email, password)) {
    throw new Error("Invalid input");
  }
}

function inputIsValid(email, password) {
  return emailIsValid(email) && passwordIsValid(password);
}

function emailIsValid(email) {
  return email && email.includes("@");
}

function passwordIsValid(password) {
  return password && password.trim() !== "";
}

function showErrorMessage(message) {
  console.log(message);
}

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  save() {
    database.insert(this);
  }
}

function saveUser(email, password) {
  const user = new User(email, password);

  user.save();
}
