# Activity Tracker API

Backend API para registro, consulta y análisis de eventos de actividad

## Descripción general

Activity Tracker API es un backend desarrollado en **Node.js + Express + TypeScript** que permite registrar, consultar, analizar y limpiar eventos de actividad generados por usuarios o sistemas.

Está diseñado para simular sistemas reales de logging y analítica, como los que usan plataformas grandes para auditoría, monitoreo y métricas.

## Casos de uso

La API permite registrar distintos tipos de eventos, por ejemplo:

- **Login / Logout**
- **Registro de usuarios**
- **Errores del sistema**
- **Interacciones** (clicks, views)
- **Llamadas a servicios internos** (API calls)

Cada evento puede contener información flexible según el tipo.

## Tecnologías usadas

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB**
- **Mongoose**
- **Nodemon**
- **dotenv**

## Modelo de datos (MongoDB)

Los eventos se almacenan como documentos flexibles en MongoDB:

```json
{
  "_id": "ObjectId",
  "type": "login | error | register | api_call",
  "userId": "u123",
  "ip": "192.168.0.1",
  "device": "mobile",
  "metadata": {
    "browser": "Chrome",
    "os": "Windows"
  },
  "code": 500,
  "message": "Internal Server Error",
  "service": "payments",
  "createdAt": "2026-01-11T06:49:22.582Z"
}
```

MongoDB permite manejar estructuras variables según el tipo de evento.

## Endpoints principales

### Crear evento

```
POST /api/v1/events
```

Guarda un evento de cualquier tipo con validación básica.

**Ejemplo de body:**
```json
{
  "type": "login",
  "userId": "u123",
  "ip": "192.168.0.1",
  "metadata": {
    "browser": "Chrome",
    "os": "Windows"
  }
}
```

### Listar eventos con filtros

```
GET /api/v1/events
```

**Filtros disponibles (query params):**
- `type` - Filtrar por tipo de evento
- `userId` - Filtrar por ID de usuario
- `from` / `to` - Rango de fechas (formato ISO)
- `limit` - Número máximo de resultados (default: 50)

Incluye ordenamiento por fecha (más recientes primero).

**Ejemplo:**
```
GET /api/v1/events?type=login&userId=u123&limit=10
```

### Estadísticas (Aggregations)

```
GET /api/v1/events/stats
```

Devuelve métricas agregadas como:
- **Eventos por tipo**
- **Eventos por día**

Usa MongoDB Aggregation Pipeline para procesar datos directamente en la base.

**Ejemplo de respuesta:**
```json
{
  "byType": [
    { "type": "login", "count": 45 },
    { "type": "error", "count": 12 }
  ],
  "byDay": [
    { "day": "2026-01-10", "count": 23 },
    { "day": "2026-01-11", "count": 34 }
  ]
}
```

### Limpieza de eventos

```
DELETE /api/v1/events
```

Permite borrar eventos antiguos usando reglas de retención:
- **`olderThan`** (required) - Número de días (borra eventos creados antes de ese período)
- **`type`** (optional) - Filtro adicional por tipo de evento

**Ejemplo:**
```
DELETE /api/v1/events?olderThan=30&type=error
```

Borra todos los eventos de tipo "error" que tengan más de 30 días.

## Aprendizajes clave demostrados

- ✅ Modelado flexible con MongoDB
- ✅ Queries dinámicas y filtros avanzados
- ✅ Manejo correcto de fechas y timezones
- ✅ Aggregations en MongoDB
- ✅ Limpieza y retención de datos
- ✅ Arquitectura MVC en Express
- ✅ TypeScript en backend real

## Valor para portafolio

Este proyecto demuestra habilidades de backend profesional, incluyendo:

- Diseño de APIs REST reales
- Uso avanzado de MongoDB (no solo CRUD)
- Pensamiento de producción (retención, performance)
- Buen manejo de errores y validaciones
- Código organizado y escalable

## Cómo ejecutar

1. **Clonar el repositorio**
```bash
git clone <repo-url>
cd activity-tracker-api
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env con:
MONGO_URI=mongodb://localhost:27017/activity-tracker
PORT=3000
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`
