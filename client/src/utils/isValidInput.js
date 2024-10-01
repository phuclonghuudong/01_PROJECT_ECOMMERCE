export const isValidEmail = (email) => {
  // Biểu thức chính quy kiểm tra định dạng email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
export const isValidPhone = (phone) => {
  // Biểu thức chính quy kiểm tra định dạng số điện thoại
  const check = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  return check.test(phone);
};

export const isValidPassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,])[A-Za-z\d@$!%*?&.,]{8,}$/;
  return regex.test(password);
};

export const isJsonString = (data) => {
  try {
    JSON.parse(data);
  } catch (error) {
    return false;
  }
  return true;
};
