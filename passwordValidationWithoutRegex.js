function validate(password) {
  return password.length >= 6 
              && password.split('').some(e => e.toLowerCase() == e && isNaN(parseInt(e))) && 
              password.split('').some(e => e.toUpperCase() == e && isNaN(parseInt(e)) ) && 
              password.split('').some(e => '1234567890'.includes(e))
               &&
              password.split('').every(e => ('a'.charCodeAt(0) <= e.toLowerCase().charCodeAt(0) && e.toLowerCase().charCodeAt(0) <= 'z'.charCodeAt(0) || '1234567890'.includes(e)))
}
