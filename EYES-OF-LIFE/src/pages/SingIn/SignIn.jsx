import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CardContent } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { login } from '../../services/authService'
import { useState } from "react"
import { useNavigate } from "react-router-dom"



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        EYES OF LIFE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      const response = await login({email, password})
      localStorage.setItem('token', response.data.token)
			localStorage.setItem('role', response.data.role)
      navigate('/profile-photographer')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <CardContent>
            <TextField
             onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            </CardContent>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordar Contraseña"
            />
            <Button
              onClick={ handleClick }
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/register" >
                  ¿Olvidaste la Contraseña?
                </Link>
              </Grid>
            </Grid>
          </Box>
       
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default LoginCard
