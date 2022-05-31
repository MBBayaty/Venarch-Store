export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "ایمیل نمی تواند خالی باشد";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "ایمیل معتبر وارد نمایید";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "رمز عبور خود را وارد نمایید";
  } else if (data.password.length < 6) {
    errors.password = "رمز عبور باید بیشتر از ۶ کاراکتر باشد";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "نام کاربری نمی تواند خالی باشد";
    } else {
      delete errors.name;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "ٰرمز عبور را مجددا وارد نمایید";
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "تکرار رمز عبور یکسان نیست";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "موافقت خود را با قوانین اعلام فرمایید";
    }
  }

  return errors;
};
