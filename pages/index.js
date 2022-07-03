import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Alert, Box, Button, CircularProgress, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react'

export default function Home() {

  const imagenes = {
    ele: {
      blanco: '/imgs/ele/ele-blanco.png',
      gris: '/imgs/ele/ele-gris.png',
      negro: '/imgs/ele/ele-negro.png'
    },
    isla: {
      blanco: '/imgs/isla/isla-blanco.png',
      gris: '/imgs/isla/isla-gris.png',
      negro: '/imgs/isla/isla-negro.png'
    },
    lineal: {
      blanco: '/imgs/lineal/lineal-blanco.png',
      gris: '/imgs/lineal/lineal-gris.png',
      negro: '/imgs/lineal/lineal-negro.png'
    }
  }

  const imagenes_web = {
    ele: {
      blanco: 'https://kitchenitza.com.mx/wp-content/uploads/2022/06/L-BLANCO.png',
      gris: 'https://kitchenitza.com.mx/wp-content/uploads/2022/06/L-GRIS.png',
      negro: 'https://kitchenitza.com.mx/wp-content/uploads/2022/06/L-NEGRO.png'
    },
    isla: {
      blanco: 'https://kitchenitza.com.mx/wp-content/uploads/2022/06/I-BLANCO.png',
      gris: 'https://kitchenitza.com.mx/wp-content/uploads/2022/06/I-GRIS.png',
      negro: 'https://kitchenitza.com.mx/wp-content/uploads/2022/06/I-NEGRO.png'
    },
    lineal: {
      blanco: 'https://kitchenitza.com.mx/wp-content/uploads/2022/06/F-BLANCO.png',
      gris: 'https://kitchenitza.com.mx/wp-content/uploads/2022/06/F-GRIS.png',
      negro: 'https://kitchenitza.com.mx/wp-content/uploads/2022/06/F-NEGRO.png'
    }
  }

  const [imagen_actual, setImagen_actual] = useState("/imgs/banners/inicial.jpg")
  const [imagen_color, setImagenColor] = useState({
    blanco: 'https://kitchenitza.com.mx/wp-content/uploads/2022/06/L-BLANCO.png',
    gris: 'https://kitchenitza.com.mx/wp-content/uploads/2022/06/L-GRIS.png',
    negro: 'https://kitchenitza.com.mx/wp-content/uploads/2022/06/L-NEGRO.png'
  })

  const [mostrarPaso1, setMostrarPaso1] = useState(true)
  const [mostrarPaso2, setMostrarPaso2] = useState(false)
  const [mostrarPaso3, setMostrarPaso3] = useState(false)
  const [mostrarPaso4, setMostrarPaso4] = useState(false)
  const [mostrarPaso5, setMostrarPaso5] = useState(false)
  const [mostrarPaso6, setMostrarPaso6] = useState(false)
  const [mostrarPaso7, setMostrarPaso7] = useState(false)

  const [mostrarEnviar, setEnviar] = useState(false)

  const [ loading, setLoading ] = useState(false)

  const [data, setData] = useState({
    "cliente_nombre": "",
    "cliente_telefono": "",
    "cliente_correo": "",
    "cocina_foto": "",
    "cocina_estilo": "",
    "cocina_medidas": "",
    "cocina_largo": "",
    "cocina_ancho": "0",
    "cocina_color": "",
    "cocina_material_cubierta": "",
    "cocina_material_frente": "",
    "cocina_costo": ""
  });

  const [error, setError] = useState({
    "cliente_nombre": false,
    "cliente_telefono": false,
    "cliente_correo": false,
    "cocina_foto": false,
    "cocina_estilo": false,
    "cocina_medidas": false,
    "cocina_largo": false,
    "cocina_ancho": false,
    "cocina_color": false,
    "cocina_material_cubierta": false,
    "cocina_material_frente": false,
    "cocina_costo": false
  })

  function imagenSegunFormaYColor(color) {
    if (color == "blanco" && data.cocina_estilo == "lineal") {
      setImagen_actual(imagenes_web.lineal.blanco)
      setData({ ...data, "cocina_foto": imagenes_web.lineal.blanco, "cocina_color": "blanco" })
    } else if (color == "gris" && data.cocina_estilo == "lineal") {
      setImagen_actual(imagenes_web.lineal.gris)
      setData({ ...data, "cocina_foto": imagenes_web.lineal.gris, "cocina_color": "gris" })
    } else if (color == "negro" && data.cocina_estilo == "lineal") {
      setImagen_actual(imagenes_web.lineal.negro)
      setData({ ...data, "cocina_foto": imagenes_web.lineal.negro, "cocina_color": "negro" })
    }

    if (color == "blanco" && data.cocina_estilo == "ele") {
      setImagen_actual(imagenes_web.ele.blanco)
      setData({ ...data, "cocina_foto": imagenes_web.ele.blanco, "cocina_color": "blanco" })
    } else if (color == "gris" && data.cocina_estilo == "ele") {
      setImagen_actual(imagenes_web.ele.gris)
      setData({ ...data, "cocina_foto": imagenes_web.ele.gris, "cocina_color": "gris" })
    } else if (color == "negro" && data.cocina_estilo == "ele") {
      setImagen_actual(imagenes_web.ele.negro)
      setData({ ...data, "cocina_foto": imagenes_web.ele.negro, "cocina_color": "negro" })
    }

    if (color == "blanco" && data.cocina_estilo == "isla") {
      setImagen_actual(imagenes_web.isla.blanco)
      setData({ ...data, "cocina_foto": imagenes_web.isla.blanco, "cocina_color": "blanco" })
    } else if (color == "gris" && data.cocina_estilo == "isla") {
      setImagen_actual(imagenes_web.isla.gris)
      setData({ ...data, "cocina_foto": imagenes_web.isla.gris, "cocina_color": "gris" })
    } else if (color == "negro" && data.cocina_estilo == "isla") {
      setImagen_actual(imagenes_web.isla.negro)
      setData({ ...data, "cocina_foto": imagenes_web.isla.negro, "cocina_color": "negro" })
    }

  }

  function calcularPrecio() {
    var largo = parseFloat( data.cocina_largo )
    var ancho = parseFloat( data.cocina_ancho )

    var medidas = largo + ancho

    var precio = 0

    if (data.cocina_material_cubierta == "HPL") {
      precio = precio + (medidas * 2149)
    } else if (data.cocina_material_cubierta == "Granito") {
      precio = precio + (medidas * 5429)
    } else if (data.cocina_material_cubierta == "Cuarzo") {
      precio = precio + (medidas * 9199)
    } else if (data.cocina_material_cubierta == "Piedra Sinterizada") {
      precio = precio + (medidas * 10399)
    }

    if (data.cocina_material_frente == "Alto brillo") {
      precio = precio + (medidas * 13499)
    } else if (data.cocina_material_frente == "Súper mate") {
      precio = precio + (medidas * 13499)
    } else if (data.cocina_material_frente == "Texturas sincronizadas") {
      precio = precio + (medidas * 12150)
    }

    var medidas_preformateado

    if( ancho > 0 ) {
      medidas_preformateado = largo + " x " + ancho
    } else {
      medidas_preformateado = largo
    }

    // Dar formato a el precio
    var precio_formateado = "$" + precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

    setData({ ...data, "cocina_costo": precio_formateado, "cocina_medidas": medidas_preformateado })
  }

  function validarData() {

    if (data.cliente_nombre === "" || data.cliente_nombre === null) {
      setError({
        ...data,
        "cliente_nombre": true
      })

      return false
    }

    if (data.cliente_telefono === "" || data.cliente_telefono === null) {
      setError({
        ...data,
        "cliente_telefono": true
      })

      return false
    }

    if (data.cliente_correo === "" || data.cliente_correo === null) {
      setError({
        ...data,
        "cliente_correo": true
      })

      return false
    }

    if (data.cocina_estilo === "" || data.cocina_estilo === null) {
      setError({
        ...data,
        "cocina_estilo": true
      })

      return false
    }

    if (data.cocina_medidas === "" || data.cocina_medidas === null) {
      setError({
        ...data,
        "cocina_medidas": true
      })

      return false
    }

    if (data.cocina_largo === "" || data.cocina_largo === null) {
      setError({
        ...data,
        "cocina_largo": true
      })

      return false
    }

    if (data.cocina_material_cubierta === "" || data.cocina_material_cubierta === null) {
      setError({
        ...data,
        "cocina_material_cubierta": true
      })

      return false
    }

    if (data.cocina_material_frente === "" || data.cocina_material_frente === null) {
      setError({
        ...data,
        "cocina_material_frente": true
      })

      return false
    }

    if (data.cocina_color === "" || data.cocina_color === null) {
      setError({
        ...data,
        "cocina_color": true
      })

      return false
    }

    return true
  }

  async function enviarData() {

    setLoading(true)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    if ( validarData() ) {
      const response = await fetch('/api/registrar', requestOptions).then(response => response.json());

      if (response.status == "success") {
        alert("Se ha enviado su solicitud correctamente")
        window.location.href = "/"
      } else {
        alert("Ha ocurrido un error, por favor intente de nuevo")
      }
    } else {
      setLoading(false)
      alert("Por favor complete todos los campos")
    }
  }

  return (
    <div>
      <Head>
        <title>Cotizador Kithen Itzá</title>
        <meta name="description" content="Cotiza tu futura cocina fácilmente con nuestro configurador en línea" />
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <main>
        <Container maxWidth="lg">
          <Box my={4} style={{ textAlign: 'center' }}>
            <a href="https://kitchenitza.com.mx/" target="_blank" rel="noopener noreferrer">
              <Image src="https://kitchenitza.com.mx/wp-content/uploads/2022/06/cropped-Diseño-sin-título-1.png" alt="Kitchen Itza" height={82} width={287} style={{ alignContent: 'center' }} />
            </a>
          </Box>
          <Typography variant="h3" component="h1" gutterBottom style={{ textAlign: 'center' }}>
            Cotizador online
          </Typography>
          <Typography variant="body1" component="p" gutterBottom style={{ textAlign: 'center' }}>
            Da el primer paso para tu futura cocina con nuestro configurador
          </Typography>

          <Grid container marginTop={5}>
            <Grid item xs={12}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Image src={imagen_actual} alt="Kitchen Itza" width={800} height="450" style={{ borderRadius: "15px" }} />
              </Box>

              <Typography variant="h4" component="h4" gutterBottom style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>
                Previsualización
              </Typography>
            </Grid>

            <Grid item xs={12}>
              {mostrarPaso1 &&
                <FormControl component="fieldset" style={{ width: '100%', backgroundColor: "#282828", padding: "5%", borderRadius: "15px", marginBottom: "5px", marginTop: "5%" }}>
                  <FormLabel style={{ color: 'white', fontSize: '24px', fontWeight: "bold", textAlign: "center", marginBottom: "3%" }}>1.- Selecciona un estilo</FormLabel>
                  <FormGroup>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={4}>
                        <FormControlLabel
                          control={
                            <Button onClick={() => {
                              setImagen_actual(imagenes.ele.blanco)
                              setData({
                                ...data,
                                "cocina_estilo": "ele",
                                "cocina_foto": imagenes_web.ele.blanco
                              })

                              setImagenColor({
                                blanco: imagenes.ele.blanco,
                                gris: imagenes.ele.gris,
                                negro: imagenes.lineal.negro
                              })
                            }}>
                              <Image src={imagenes.ele.blanco} alt="Ele" height={135} width={240} />
                            </Button>
                          }
                          label="En L"
                        />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <FormControlLabel
                          control={
                            <Button onClick={() => {
                              setImagen_actual(imagenes.isla.blanco)
                              setData({
                                ...data,
                                "cocina_estilo": "isla",
                                "cocina_foto": imagenes_web.isla.blanco
                              })

                              setImagenColor({
                                blanco: imagenes.isla.blanco,
                                gris: imagenes.isla.gris,
                                negro: imagenes.isla.negro
                              })
                            }}>
                              <Image src={imagenes.isla.blanco} alt="Isla" height={135} width={240} />
                            </Button>
                          }
                          label="Isla"
                        />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <FormControlLabel
                          control={
                            <Button onClick={() => {
                              setImagen_actual(imagenes.lineal.blanco)
                              setData({
                                ...data,
                                "cocina_estilo": "lineal",
                                "cocina_foto": imagenes_web.lineal.blanco
                              })

                              setImagenColor({
                                blanco: imagenes.lineal.blanco,
                                gris: imagenes.lineal.gris,
                                negro: imagenes.lineal.negro
                              })

                            }}>
                              <Image src={imagenes.lineal.blanco} alt="Isla" height={135} width={240} />
                            </Button>
                          }
                          label="Lineal"
                        />
                      </Grid>

                    </Grid>
                  </FormGroup>
                </FormControl>
              }

              {mostrarPaso2 &&
                <FormControl component="fieldset" style={{ width: '100%', backgroundColor: "#282828", padding: "5%", borderRadius: "15px", marginBottom: "5px", marginTop: "5%" }}>
                  <FormLabel style={{ color: 'white', fontSize: '24px', fontWeight: "bold", textAlign: "center", marginBottom: "3%" }}>2.- Selecciona un color</FormLabel>
                  <FormGroup>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={4}>
                        <FormControlLabel
                          control={
                            <Button onClick={() => { imagenSegunFormaYColor("blanco") }}>
                              <Image src={imagen_color.blanco} alt="Ele" height={135} width={240} />
                            </Button>
                          }
                          label="Blanco"
                        />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <FormControlLabel
                          control={
                            <Button onClick={() => { imagenSegunFormaYColor("gris") }}>
                              <Image src={imagen_color.gris} alt="Ele" height={135} width={240} />
                            </Button>
                          }
                          label="Gris"
                        />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <FormControlLabel
                          control={
                            <Button onClick={() => { imagenSegunFormaYColor("negro") }}>
                              <Image src={imagen_color.negro} alt="Ele" height={135} width={240} />
                            </Button>
                          }
                          label="Negro"
                        />
                      </Grid>
                    </Grid>
                  </FormGroup>
                </FormControl>
              }

              {mostrarPaso3 &&
                <FormControl component="fieldset" style={{ width: '100%', backgroundColor: "#282828", padding: "5%", borderRadius: "15px", marginBottom: "5px", marginTop: "5%" }}>
                  <FormLabel style={{ color: 'white', fontSize: '24px', fontWeight: "bold", textAlign: "center", marginBottom: "3%" }}>3.- Selecciona un material de cubierta</FormLabel>
                  <FormGroup>
                    <Grid container spacing={3}>
                      <Grid item xs={6} sm={4}>
                        <FormControlLabel
                          control={
                            <Button onClick={() => {
                              setData({
                                ...data,
                                "cocina_material_cubierta": "HPL"
                              })
                            }
                            }>
                              <Image src={imagen_color.negro} alt="Ele" height={135} width={135} style={{ borderRadius: "100%" }} />
                            </Button>
                          }
                          label="HPL"
                        />
                      </Grid>

                      <Grid item xs={6} sm={4}>
                        <FormControlLabel
                          control={
                            <Button onClick={() => {
                              setData({
                                ...data,
                                "cocina_material_cubierta": "Granito"
                              })
                            }
                            }>
                              <Image src={imagen_color.negro} alt="Ele" height={135} width={135} style={{ borderRadius: "100%" }} />
                            </Button>
                          }
                          label="Granito"
                        />
                      </Grid>

                      <Grid item xs={6} sm={4}>
                        <FormControlLabel
                          control={
                            <Button onClick={() => {
                              setData({
                                ...data,
                                "cocina_material_cubierta": "Cuarzo"
                              })
                            }
                            }>
                              <Image src={imagen_color.negro} alt="Ele" height={135} width={135} style={{ borderRadius: "100%" }} />
                            </Button>
                          }
                          label="Cuarzo"
                        />
                      </Grid>

                      <Grid item xs={6} sm={4}>
                        <FormControlLabel
                          control={
                            <Button onClick={() => {
                              setData({
                                ...data,
                                "cocina_material_cubierta": "Piedra Sinterizada"
                              })
                            }
                            }>
                              <Image src={imagen_color.negro} alt="Ele" height={135} width={135} style={{ borderRadius: "100%" }} />
                            </Button>
                          }
                          label="Piedra Sinterizada"
                        />
                      </Grid>

                    </Grid>
                  </FormGroup>
                </FormControl>
              }

              {mostrarPaso4 &&
                <FormControl component="fieldset" style={{ width: '100%', backgroundColor: "#282828", padding: "5%", borderRadius: "15px", marginBottom: "5px", marginTop: "5%" }}>
                  <FormLabel style={{ color: 'white', fontSize: '24px', fontWeight: "bold", textAlign: "center", marginBottom: "3%" }}>4.- Selecciona un material para frentes</FormLabel>
                  <FormGroup>
                    <Grid container spacing={3}>
                      <Grid item xs={6} sm={4}>
                        <FormControlLabel
                          control={
                            <Button onClick={() => {
                              setData({
                                ...data,
                                "cocina_material_frente": "Alto brillo"
                              })
                            }
                            }>
                              <Image src={imagen_color.negro} alt="Ele" height={135} width={135} style={{ borderRadius: "100%" }} />
                            </Button>
                          }
                          label="Alto brillo"
                        />
                      </Grid>

                      <Grid item xs={6} sm={4}>
                        <FormControlLabel
                          control={
                            <Button onClick={() => {
                              setData({
                                ...data,
                                "cocina_material_frente": "Súper mate"
                              })
                            }
                            }>
                              <Image src={imagen_color.negro} alt="Ele" height={135} width={135} style={{ borderRadius: "100%" }} />
                            </Button>
                          }
                          label="Súper mate"
                        />
                      </Grid>

                      <Grid item xs={6} sm={4}>
                        <FormControlLabel
                          control={
                            <Button onClick={() => {
                              setData({
                                ...data,
                                "cocina_material_frente": "Texturas sincronizadas"
                              })
                            }
                            }>
                              <Image src={imagen_color.negro} alt="Ele" height={135} width={135} style={{ borderRadius: "100%" }} />
                            </Button>
                          }
                          label="Texturas sincronizadas"
                        />
                      </Grid>

                    </Grid>
                  </FormGroup>
                </FormControl>
              }

              {mostrarPaso5 &&
                <FormControl component="fieldset" style={{ width: '100%', backgroundColor: "#282828", padding: "5%", borderRadius: "15px", marginBottom: "5px", marginTop: "5%" }}>
                  <FormLabel style={{ color: 'white', fontSize: '24px', fontWeight: "bold", textAlign: "center", marginBottom: "3%" }}>5.- Ingrese las medidas solicitadas </FormLabel>

                  {data.cocina_estilo === "ele" && <>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "3%" }}>
                      <Image src={imagen_color.negro} alt="Ele" height={135} width={240} />
                    </div>


                    <FormGroup>
                      <Grid container spacing={3}>
                        <Grid item xs={6} sm={4}>
                          <TextField type="number" label="Largo" variant="outlined" style={{ width: "100%", backgroundColor: "#282828", color: "white", borderRadius: "15px", marginBottom: "5px", marginTop: "5%" }} onChange={(e) => {
                            setData({
                              ...data,
                              "cocina_largo": e.target.value
                            })
                          }
                          } inputProps={{
                            min: "0",
                            max: "20",
                            step: "0.1"
                          }}
                            helperText="metros"
                          />
                        </Grid>

                        <Grid item xs={6} sm={4}>
                          <TextField type="number" label="Ancho" variant="outlined" style={{ width: "100%", backgroundColor: "#282828", color: "white", borderRadius: "15px", marginBottom: "5px", marginTop: "5%" }} onChange={(e) => {
                            setData({
                              ...data,
                              "cocina_ancho": e.target.value
                            })
                          }
                          } inputProps={{
                            min: "0",
                            max: "20",
                            step: "0.1"
                          }}
                            helperText="metros"
                          />
                        </Grid>
                      </Grid>
                    </FormGroup>
                  </>
                  }

                  {data.cocina_estilo !== "ele" && <>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "3%" }}>
                      <Image src={imagen_color.negro} alt="Ele" height={135} width={240} />
                    </div>

                    <FormGroup>
                      <Grid container spacing={3}>
                        <Grid item xs={6} sm={4}>
                          <TextField type="number" label="Largo" variant="outlined" style={{ width: "100%", backgroundColor: "#282828", color: "white", borderRadius: "15px", marginBottom: "5px", marginTop: "5%" }} onChange={(e) => {
                            setData({
                              ...data,
                              "cocina_largo": e.target.value
                            })
                          }
                          } inputProps={{
                            min: "0",
                            max: "20",
                            step: "0.1"
                          }}
                            helperText="metros"
                          />
                        </Grid>
                      </Grid>
                    </FormGroup>
                  </>
                  }
                </FormControl>
              }

              {mostrarPaso6 &&
                <FormControl component="fieldset" style={{ width: '100%', backgroundColor: "#282828", padding: "5%", borderRadius: "15px", marginBottom: "5px", marginTop: "5%" }}>
                  <FormLabel style={{ color: 'white', fontSize: '24px', fontWeight: "bold", textAlign: "center", marginBottom: "3%" }}>6.- Ingresa tu información de contacto </FormLabel>

                  <Grid container spacing={3} xs={12}>
                    <Grid item xs={6} sm={4}>
                      <TextField type="text" label="Nombre" variant="outlined" style={{ width: "100%", backgroundColor: "#282828", color: "white", borderRadius: "15px", marginBottom: "5px", marginTop: "5%" }} onChange={(e) => {
                        setData({
                          ...data,
                          "cliente_nombre": e.target.value
                        })
                      }
                      } />
                    </Grid>

                    <Grid item xs={6} sm={4}>
                      <TextField type="text" label="Teléfono" variant="outlined" style={{ width: "100%", backgroundColor: "#282828", color: "white", borderRadius: "15px", marginBottom: "5px", marginTop: "5%" }} onChange={(e) => {
                        setData({
                          ...data,
                          "cliente_telefono": e.target.value
                        })
                      }} inputProps={{
                        min: "0",
                        max: "9999999999"
                      }}
                        helperText="Ej. 7710009000" />
                    </Grid>

                    <Grid item xs={6} sm={4}>
                      <TextField type="text" label="Correo electrónico" variant="outlined" style={{ width: "100%", backgroundColor: "#282828", color: "white", borderRadius: "15px", marginBottom: "5px", marginTop: "5%" }} onChange={(e) => {
                        setData({
                          ...data,
                          "cliente_correo": e.target.value
                        })
                      }} />
                    </Grid>
                  </Grid>
                </FormControl>
              }

              {mostrarPaso7 &&
                <Box style={{ width: '100%', backgroundColor: "#282828", padding: "5%", borderRadius: "15px", marginBottom: "5px", marginTop: "5%" }}>

                  <Typography style={{ color: 'white', fontSize: '24px', fontWeight: "bold", textAlign: "center", marginBottom: "3%" }}>Revisa la información</Typography>

                  <Grid container spacing={3} xs={12}>
                    <List dense={true}>
                      <ListItem>
                        <ListItemText primary="Nombre" secondary={data.cliente_nombre} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Teléfono" secondary={data.cliente_telefono} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Correo electrónico" secondary={data.cliente_correo} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Estilo" secondary={data.cocina_estilo} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Color" secondary={data.cocina_color} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Material de Cubierta" secondary={data.cocina_material_cubierta} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Material de Frentes" secondary={data.cocina_material_frente} />
                      </ListItem>
                    </List>
                  </Grid>
                </Box>
              }

              <Grid container xs={12}>
                <Grid item xs={6} style={{ textAlign: "center", alignContent: "center", justifyContent: "center" }}>
                  {
                    mostrarPaso1 ?
                      ""
                      :
                      <Button onClick={() => {
                        if (mostrarPaso2) {
                          setMostrarPaso1(true)
                          setMostrarPaso2(false)
                        } else if (mostrarPaso3) {
                          setMostrarPaso2(true)
                          setMostrarPaso3(false)
                        } else if (mostrarPaso4) {
                          setMostrarPaso3(true)
                          setMostrarPaso4(false)
                        } else if (mostrarPaso5) {
                          setMostrarPaso4(true)
                          setMostrarPaso5(false)
                        } else if (mostrarPaso6) {
                          setMostrarPaso5(true)
                          setMostrarPaso6(false)
                        } else if (mostrarPaso7) {
                          setMostrarPaso6(true)
                          setMostrarPaso7(false)
                          calcularPrecio()
                        }
                      }} variant="contained" color="primary" style={{ backgroundColor: '#282828', color: 'white', textAlign: "center", marginBottom: "3%", marginTop: "3%" }}> Paso anterior
                      </Button>
                  }
                </Grid>

                <Grid item xs={6} style={{ textAlign: "center", alignContent: "center", justifyContent: "center" }}>
                  {mostrarPaso7 ?
                    "" :
                    <Button onClick={() => {
                      if (mostrarPaso1) {
                        setMostrarPaso1(false)
                        setMostrarPaso2(true)
                      } else if (mostrarPaso2) {
                        setMostrarPaso2(false)
                        setMostrarPaso3(true)
                      } else if (mostrarPaso3) {
                        setMostrarPaso3(false)
                        setMostrarPaso4(true)
                      } else if (mostrarPaso4) {
                        setMostrarPaso4(false)
                        setMostrarPaso5(true)
                      } else if (mostrarPaso5) {
                        setMostrarPaso5(false)
                        setMostrarPaso6(true)
                      } else if (mostrarPaso6) {
                        setMostrarPaso6(false)
                        setMostrarPaso7(true)
                        calcularPrecio()
                        setEnviar(true)
                      } else if (mostrarPaso7) {
                        setMostrarPaso7(false)
                        setEnviar(true)
                      }
                    }} variant="contained" color="primary" style={{ backgroundColor: '#FF6100', color: 'white', textAlign: "center", marginBottom: "3%", marginTop: "3%" }}> Siguiente paso
                    </Button>
                  }
                </Grid>
              </Grid>

              {mostrarEnviar &&
                <Grid item xs={12} style={{ textAlign: "center", alignContent: "center", justifyContent: "center" }}>
                  
                  {
                    // Botón con indicador de envío
                  }

                  <LoadingButton
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: '#FF6100', color: 'white', textAlign: "center", padding: "10px", marginBottom: "3%", marginTop: "3%" }}
                    onClick={() => {
                      enviarData()
                    }} 
                    loading={loading}
                    disabled={loading}
                    > {loading ? "Enviando..." : "Enviar"} 
                  </LoadingButton>

                </Grid>
              }

            </Grid>
          </Grid>

        </Container>


      </main>

      <footer>

        <div style={{ backgroundColor: "#282828", padding: "2%", borderRadius: "15px", margin: "2%" }}>
          <a
            href="https://creare.club/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography style={{ color: 'white', fontSize: '24px', fontWeight: "300", textAlign: "center" }}>Launched by Creare Club©</Typography>
          </a>
        </div>
      </footer>
    </div>
  )
}
