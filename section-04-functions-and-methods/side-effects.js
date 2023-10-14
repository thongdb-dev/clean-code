function initApp() {
  const success = connectDatabase();
  if (!success) {
    console.log("Could not connect to database!");
  }
  // ...
}

function connectDatabase() {
  const didConnect = database.connect();
  return didConnect;
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === "unknown") {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

function createUser(email, password) {
  if (!isValid(email, password)) {
    console.log("Invalid input!");
  }
  // ...
}

function isValid(email, password) {
  if (!email.includes("@") || password.length < 7) {
    return false;
  }
  return true;
}
