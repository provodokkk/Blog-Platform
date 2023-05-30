const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      username: Joi.string().min(2).max(15),
      email: Joi.string().email(),
      password: Joi.string().regex(
          new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
      confirmPassword: Joi.ref('password')
    })

    const {error, value} = schema.validate(req.body)
    console.log(value) 

    if (error) {
      // const emptyFieldError = 'This field can not be empty'
      const usernameErrorMessage = 'You must provide valid username'
      const emailErrorMessage = 'You must provide valid email'
      const passwordErrorMessage = `The password provided failed to match the following rules:
        <br>
        1. It must contain ONLY the following characters: lower case, upper case, numerics.
        <br>
        2. It must be at least 8 characters in length and not greater than 32 characters in length.
      `
      const confirmPasswordErrorMessage = 'Password does not match'
      const defaultErorMessage = 'Invalid registration information'

      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            usernameError: usernameErrorMessage
          })
          break
        case 'email':
          res.status(400).send({
            emailError: emailErrorMessage
          })
          break
        case 'password':
          res.status(400).send({
            passwordError: passwordErrorMessage
          })
          break
        case 'confirmPassword':
          res.status(400).send({
            confirmPasswordError: confirmPasswordErrorMessage
          })
          break
        default:
          res.status(400).send({
            defaultEror: defaultErorMessage
          })
      }
    } else {
      next()
    }
  }
}