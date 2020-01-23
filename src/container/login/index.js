import React, { useState } from "react"
import "Sass/login.scss"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import { validate } from "Utils/validators"
import useForm from "./form"
import Icon from "Components/icon"

const useStyles = makeStyles(theme => ({
  form: {
    "& > .input-field": {
      marginBottom: "40px"
    }
  }
}))

function login() {
  const classes = useStyles()
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(handleLogin, validate)
  const [showPasswordValue, setShowPasswordValue] = useState(false)

  const handleClickShowPassword = () => {
    setShowPasswordValue(!showPasswordValue)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  function handleLogin() {
    console.log("login")
  }

  return (
    <div id="login">
      <div className="logo">
        <Icon name="logo" />
      </div>
      <h2>Global SKU Dashboard</h2>
      <div>
        <form className={classes.form}>
          <TextField
            id="outlined-required"
            className="input-field"
            autoComplete="off"
            error={errors.email ? true : false}
            label="Email"
            name="email"
            onChange={handleChange}
            value={values.email || ""}
            helperText={errors.email ? `* ${errors.email}` : ""}
            variant="outlined"
          />

          <FormControl className={"input-password"} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" className={`${errors.password ? "Mui-error" : undefined}`}>Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPasswordValue ? "text" : "password"}
              name="password"
              autoComplete="off"
              error={errors.password ? true : false}
              onChange={handleChange}
              value={values.password || ""}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPasswordValue ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
            {
              errors.password ?
                <FormHelperText id="outlined-weight-helper-text" className={`${errors.password ? "Mui-error" : ""}`}>*{errors.password}</FormHelperText>
                : ""
            }
          </FormControl>

          <div className="submit">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default login