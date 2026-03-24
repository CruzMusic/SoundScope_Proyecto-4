# SoundScope

Aplicacion web hecha con React y Vite para buscar artistas musicales, ver su informacion y albums, guardar favoritos y enviar sugerencias.

La app consume la API publica de TheAudioDB y guarda los artistas favoritos en el navegador (localStorage).

El endpoint para obtener la biografia de los artistas suele cambiar cada cierto tiempo

## 1) Resumen del proyecto

SoundScope permite:

- Buscar artistas por nombre.
- Ver una lista de resultados con imagen y nombre.
- Entrar al detalle de un artista para consultar su biografia y albums.
- Agregar o quitar artistas de favoritos.
- Mantener favoritos aunque cierres el navegador.
- Enviar sugerencias desde un formulario.

## 2) Tecnologias usadas

- React 19
- React Router DOM
- React Hook Form
- Vite
- CSS

## 3) Funcionalidades

### Busqueda de artistas

Desde Home, el usuario escribe un nombre y pulsa Search.
Se consulta TheAudioDB y se muestran tarjetas de artistas.

### Detalle de artista

En la vista de detalle se carga:

- Informacion del artista (nombre, imagen, biografia).
- Lista de albums.

### Favoritos

Cada artista se puede anadir o quitar de favoritos desde:

- La tarjeta en los resultados de busqueda.
- La pantalla de detalle del artista.

Los favoritos se almacenan en localStorage con la clave:

- `SoundScope_Fav`

### Sugerencias

Incluye formulario con React Hook Form para:

- Nombre
- Email
- Sugerencia

Ahora aporta valor real al usuario con:

- Validaciones utiles (requeridos, formato email, min/max longitud).
- Feedback visual de exito o error en pantalla.
- Contador de caracteres para redactar mejor la sugerencia.
- Textos de formulario en ingles para mantener consistencia.

### Accesibilidad y UX

Se mejoro la experiencia con:

- Busqueda con tecla Enter en la barra de busqueda.
- Textos alternativos descriptivos en imagenes de artistas y albums.
- `aria-label` en enlaces importantes para lectores de pantalla.

## 4) Flujo de la aplicacion

1. `main.jsx` monta la app dentro de `BrowserRouter`.
2. `App.jsx` define rutas y envuelve todo con `FavouritesProvider` y `Layout`.
3. En Home se ejecuta la busqueda con `theAudioDB(searchTerm)`.
4. Se renderizan `ArtistCard` con opcion de favorito.
5. Al entrar en un artista, la pagina `Artist` usa `UseFetch` para:
	 - Cargar datos del artista.
	 - Cargar albums.
6. `ArtistDetails` muestra informacion y `AlbumList`.
7. Favoritos se sincronizan automaticamente con localStorage.

## 5) Instalacion y ejecucion

### Requisitos

- Node.js 18 o superior
- npm

## 6) Endpoints de API usados

Base: `https://www.theaudiodb.com/api/v1/json/123`

- Busqueda por nombre:
	- `/search.php?s={artist}`
- Detalle de artista por id:
	- `/artist.php?i={id}`
- Albums por id de artista:
	- `/album.php?i={id}`

## 7) Gestion de estado (favoritos)

El estado global se maneja con Context API:

- `FavouriteContext` define el contexto.
- `FavouritesProvider` expone:
	- `favourites`
	- `isFavourite(idArtist)`
	- `addFavourite(artist)`
	- `removeFavourite(artist)`

Comportamiento importante:

- Al iniciar, carga favoritos desde localStorage.
- En cada cambio, vuelve a guardar en localStorage.
- Evita duplicados usando `isFavourite`.

## 8) Formulario de sugerencias

Se implementa con `react-hook-form` en la pagina Suggestions.

Estado actual:

- Captura datos correctamente.
- Valida nombre, email y contenido de sugerencia.
- Muestra mensajes visuales de validacion y envio.
- Mantiene etiquetas de formulario en ingles para coherencia de interfaz.


