import React, { useState } from 'react';
import icon from './assets/icon.jpg';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { AlertColor } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { tiposDeConexao, classesDeConsumo, modalidadesTarifarias } from './models/tipos'
import { Copyright } from './common';
import axios from 'axios';

const theme = createTheme();

export default function SignUp() {
  const api = axios.create({ baseURL: 'https://lemon-backend-gjs.herokuapp.com' });

  const [loading, setLoading] = useState(false);
  const [inputNumero, setInputNumero] = useState('');
  const [inputTipoDeConexao, setInputTipoDeConexao] = useState('');
  const [inputClasseDeConsumo, setInputClasseDeConsumo] = useState('');
  const [inputModalidadeTarifaria, setInputModalidadeTarifaria] = useState('');
  const [formValues, setFormValues] = useState([""])
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<AlertColor | undefined>('success');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    if (formValues.length < 3) {
      setMessageType('error');
      setMessage(`Por favor, preencha o valor de ao menos 3 contas de luz`);
      return;
    }
    setLoading(true);
    const body = {
      numeroDoDocumento: inputNumero,
      tipoDeConexao: inputTipoDeConexao,
      classeDeConsumo: inputClasseDeConsumo,
      modalidadeTarifaria: inputModalidadeTarifaria,
      historicoDeConsumo: formValues.map((values) => parseFloat(values))
    }
    await api.post('/elegibilidade', body).then((response) => {
      if (response.data.elegivel) {
        setMessageType('success');
        setMessage(`Parabéns, você foi aceito para ser um cliente Lemon!\nVocê economizará por volta de ${response.data.economiaAnualDeCO2} de CO2 anualmente!`);
      } else {
        setMessageType('error');
        setMessage(response.data.razoesDeInelegibilidade.map((razoes: string) => {
          return razoes + `\n`;
        }));
      }
      setLoading(false);
    }).catch((error) => {
      setMessageType('error');
      setMessage(error.message);
      setLoading(false);
    })
  };

  let handleChange = (i: any, e: any) => {
    let newFormValues: any[] = [...formValues];
    newFormValues[i] = e.target.value;
    setFormValues(newFormValues);
  }

  let addFormFields = () => {
    setFormValues([...formValues, ""])
  }

  let removeFormFields = (i: number) => {
    let newFormValues = [...formValues];
    console.log(i)
    console.log(newFormValues)
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar alt="Lemon Energy" src={icon} />
          <Typography component="h1" variant="h5" style={{ textAlign: 'center' }}>Sua conta de luz pode redefinir o futuro.</Typography>
          Descubra uma nova forma de consumir energia
          {loading ? <CircularProgress color="success" /> : null}
          {message ? <Alert style={{ whiteSpace: 'pre-line' }} severity={messageType}>{message}</Alert> : null}

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="numeroDoDocumento"
                  required
                  fullWidth
                  id="numeroDoDocumento"
                  label="Número do CPF/CNPJ"
                  value={inputNumero}
                  onChange={(e) => { setInputNumero(e.target.value) }}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="inputTipoDeConexao">Tipo de conexão</InputLabel>
                  <Select
                    labelId="inputTipoDeConexao"
                    id="inputTipoDeConexao"
                    value={inputTipoDeConexao}
                    label="inputTipoDeConexao"
                    required
                    onChange={(e: any) => setInputTipoDeConexao(e.target.value)}
                  >
                    {tiposDeConexao.map((item) => {
                      return (
                        <MenuItem key={item.key} value={item.key}>{item.value}</MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="inputClasseDeConsumo">Classe de consumo</InputLabel>
                  <Select
                    labelId="inputClasseDeConsumo"
                    id="inputClasseDeConsumo"
                    value={inputClasseDeConsumo}
                    label="inputClasseDeConsumo"
                    required
                    onChange={(e: any) => setInputClasseDeConsumo(e.target.value)}
                  >
                    {classesDeConsumo.map((item) => {
                      return (
                        <MenuItem key={item.key} value={item.key}>{item.value}</MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="inputModalidadeTarifaria">Modalidade Tarifária</InputLabel>
                  <Select
                    labelId="inputModalidadeTarifaria"
                    id="inputModalidadeTarifaria"
                    value={inputModalidadeTarifaria}
                    label="inputModalidadeTarifaria"
                    required
                    onChange={(e: any) => setInputModalidadeTarifaria(e.target.value)}
                  >
                    {modalidadesTarifarias.map((item) => {
                      return (
                        <MenuItem key={item.key} value={item.key}>{item.value}</MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
              </Grid>
              {formValues.map((element, index) => {
                return (
                  <Grid item xs={12} key={index}>
                    <TextField
                      required
                      fullWidth
                      label={index == 0 ? "Valor da tarifa do mês atual" : `Valor da tarifa de ${index} meses atrás`}
                      name={`value`}
                      value={element || ""}
                      onChange={e => handleChange(index, e)}
                      InputProps={index + 1 == formValues.length && index <= 10 ? {
                        endAdornment:
                          <Button
                            onClick={() => { if (index <= 10) addFormFields() }}
                            variant="contained"
                          >
                            Adicionar
                          </Button>
                      } : index + 2 == formValues.length ? {
                        endAdornment: <Button
                          color="error"
                          onClick={() => { removeFormFields(index) }}
                          variant="contained"
                        >
                          Remover
                        </Button>
                      } : { endAdornment: null }}
                    />
                  </Grid>
                );
              })}

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}