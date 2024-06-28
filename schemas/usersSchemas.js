import Joi from "joi";

export const signupSchema = Joi.object({
  name: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9 _-]{3,15}$/))
    .required()
    .error(
      (errors) =>
        new Error(
          "The name must be from 3 to 15 characters of lowercase, uppercase letters, numbers and '-', '_'."
        )
    ),
  email: Joi.string()
    .email()
    .required()
    .error(
      (errors) =>
        new Error("Invalid email address. Please enter a valid email address.")
    ),
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
      )
    )
    .required()
    .error(
      (errors) =>
        new Error(
          "The password may contain at least one upper case, lower case English letter, digit, and special character or space and have a length of at least 8 characters"
        )
    ),
  phone: Joi.string()
    .pattern(
      new RegExp(
        /^[\+]?[(]?[[0-9]{1,3}]?[)]?[(]?[0-9]{2,3}[)]?[s]?[0-9]{3}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}$/
      )
    )
    .required()
    .error(
      (errors) =>
        new Error(
          "The phone number must be in the following format '+(123)(222) 123-45-67' with or '+' without '+', parentheses, spaces and hyphens"
          // "Invalid phone number. Please enter a valid phone number"
        )
    ),
});

export const signinSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .error(
      (errors) =>
        new Error("Invalid email address. Please enter a valid email address.")
    ),
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
      )
    )
    .required()
    .error(
      (errors) =>
        new Error(
          "The password may contain at least one upper case, lower case English letter, digit, and special character or space and have a length of at least 8 characters"
        )
    ),
});

export const verifySchema = Joi.object({
  email: Joi.string().email().required(),
});
