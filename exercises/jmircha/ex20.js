const userRegEx = {
  NAME_REGEX: /^[A-Za-zÁáÉéÍíÓóÚúÑñÜü]+(?:\s[A-Za-zÁáÉéÍíÓóÚúÑñÜü]+)$/,
  //prettier-ignore
  EMAIL_REGEX:/^[A-Za-z0-9?=()-]+(?:.[A-Za-z0-9?=()_-]+)@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?.com$/,
}

export const userValidation = (name, email) => {
  if (!userRegEx.NAME_REGEX.test(name)) return 'Not valid name'
  if (!userRegEx.EMAIL_REGEX.test(email)) return 'Not valid email'

  const validUser = 'User Created Sucessfully.'

  return { name, email, validUser }
}
