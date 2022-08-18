import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, TextField } from '@mui/material';


export default function InputField({ label, placeholder, type,}) {
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmedPassword(!showConfirmedPassword);


    if(type === "password"){
        return(
            <div>
            <TextField
              sx={{
                margin: "10px 0",
                width: '100%',
              }}
              // size="small"
              label={label}
              color="secondary"
              placeholder={placeholder}
              size='small'
              type={showConfirmedPassword ? "text" : "password"}
    
              InputProps={{ 
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                    >
                      {showConfirmedPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            </div>
        )
    }
    else if(type === "ConfirmPassword"){
        return(
            <div>
            <TextField
              sx={{
                margin: "10px 0",
                width: '100%'
              }}
              
              label={label}
              color="secondary"
              placeholder={placeholder}
              type={showConfirmedPassword ? "text" : "password"}
              size='small'
              InputProps={{ 
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showConfirmedPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            </div>
        )
    }
    else{
        return (
            <div>
                <TextField
                sx={{
                margin: "10px 0",
                width: '100%'
                }}
                label={label}
                color="secondary"
                size='small'
                placeholder={placeholder}
                
                />
            </div>
          )
    }
}
