import User from '../models/user-model'

export const validateEmailAccessibility = (email) => {
  return User.findOne({email: email}).then(result => {
    return result !== null
  })
}