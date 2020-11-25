//eslint-disable-next-line
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/

export const passwordRules = [
  { message: "At least 1 number", short: "1 number", regex: /[0-9]+/ },
  { message: "At least 8 characters", short: "8 characters", regex: /.{8,}/ },
  { message: '1 lower case', short: "1 lower", regex: /[a-z]+/ },
  { message: "1 upper case", short: "1 upper", regex: /[A-Z]+/ }
];