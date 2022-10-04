const verifyPassword = (email) => {
  return !(!email || email.length < 1 || email === "");

};

const verifyEmailAddress = (email) => {
  return !(!email || email.length < 1 || email === "");

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
