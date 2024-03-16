export const validateName = (input) => {
  const nameRegex = /^[A-Z][a-z\s]*[A-Za-z]$/;
  if (nameRegex.test(input)) {
    return true;
  } else {
    return false;
  }
};

export const validateEmail = (input) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (emailRegex.test(input)) {
    return true;
  } else {
    return false;
  }
};

export const validatePassword = (input) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-\\^$*+?.()|[\]{}#@!%&_=;:`'"\s])[A-Za-z\d-\\^$*+?.()|[\]{}#@!%&_=;:`'"\s]{8,}$/;
  if (passwordRegex.test(input)) {
    return true;
  } else {
    return false;
  }
};

export function validateInteger(input) {
  const number = parseInt(input);
  if (number > 0 && !Number.isNaN(number) && Number.isFinite(number)) {
    return true;
  } else {
    return false;
  }
}
export function validateFloat(input) {
  const number = parseFloat(input);
  if (number > 0 && !Number.isNaN(number) && Number.isFinite(number)) {
    return true;
  } else {
    return false;
  }
}

export function validateDescription(description) {
  if (/^[a-zA-ZñÑáéíóúüÁÉÍÓÚÜ0-9,.?!"'-\s]+$/.test(description)) {
    return true;
  } else {
    return false;
  }
}

export function validatePhone(input) {
  const phoneRegex = /^(\+\d{2,3})?\d{9}$/;
  if (phoneRegex.test(input)) {
    return true;
  } else {
    return false;
  }
}

export function validateWeb(input) {
  const webRegex = /^(http(s)?:\/\/)?[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+([a-zA-Z0-9_-]*)?$/;
  if (webRegex.test(input)) {
    return true;
  } else {
    return false;
  }
}


