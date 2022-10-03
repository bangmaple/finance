const verifyPassword = (email) => {
  if (!email || email.length < 1 || email === "") {
    return false;
  }
  return true;
};

const verifyEmailAddress = (email) => {
  if (!email || email.length < 1 || email === "") {
    return false;
  }
  return true;
};

const verifyCredentials = (email, password) => {
  return verifyPassword(email) && verifyPassword(password);
}

export const handleFirebaseEmailAndPasswordAuthentication = (email, password) => {
  const isVerified = verifyCredentials(email, password);
  if (!isVerified) {
    return false;
  }
}
