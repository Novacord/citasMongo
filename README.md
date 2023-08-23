# mongoCitas - Ejemplo de Gestión de Citas con Express y MongoDB

`mongoCitas` es una aplicación de ejemplo que demuestra cómo construir una API de gestión de citas utilizando Express y MongoDB. La aplicación incluye limitación de velocidad, rutas de API y una configuración de base de datos MongoDB.

## Requisitos

- Node.js (v14 o superior)
- MongoDB

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Novacord/mongoCitas.git
   ```

2. Navega a la carpeta del proyecto:

   ```bash
   cd mongoCitas
   ```

3. Instala las dependencias utilizando npm:

   ```bash
   npm install
   ```

4. Configura las variables de entorno:

   Crea un archivo `.env` en la raíz del proyecto y agrega la configuración de tu base de datos MongoDB:

   ```.env
   codeMONGODB_URI=URI_DE_TU_BASE_DE_DATOS
   PORT=PUERTO_DE_TU_APP
   ```

- ## Uso

  1. Inicia la aplicación:

     ```bash
     npm run dev
     ```

  2. Accede a la API en tu navegador o herramienta de prueba de API en la siguiente dirección:

     ```bash
     http://localhost:PUERTO/api
     ```

  3. Utiliza las rutas API para gestionar citas:

     - `GET /api/citas/obtener`: Obtiene la lista de todas las citas.
     - `GET /api/citas/obtener/user/:id`: Obtiene las citas de un usuario específico.
     - `GET /api/citas/obtener/doctor/:id`: Obtiene las citas de un doctor específico.
     - `GET /api/citas/obtener/consultorio/:id`: Obtiene las citas de un consultorio específico.
     - `GET /api/citas/obtener/numeroCitasMedico/:id`: Obtiene el número de citas para un médico específico.

  4. Utiliza las rutas API para gestionar médicos:

     - `GET /api/medicos/obtener`: Obtiene la lista de todos los médicos.

  5. Utiliza las rutas API para gestionar pacientes:

     - `GET /api/pacientes/obtener`: Obtiene la lista de todos los pacientes.
     - `POST /api/pacientes/insertar`: Inserta un nuevo paciente.

  6. Limitación de Velocidad:

     Se ha implementado un middleware de limitación de velocidad utilizando `express-rate-limit`. Esto significa que cada IP tendrá un máximo de 7 solicitudes permitidas por minuto. Si se excede esta tasa, se recibirá una respuesta de error.