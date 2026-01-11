# ACTIVITY TRACKER API


#### Backend que registra eventos/actividades de un usuario o sistemas
---

### Que tipo de aactividades?
- login
- logout
- view_page
- click_button
- error 
- api call

### Tecnologias claves
- NodeJS / Express.js
- MongoDB
---

Ejemplos de documentos MongoDB

``` bash
{
  "_id": "65fabc...",
  "type": "login",
  "userId": "u123",
  "ip": "192.168.0.1",
  "device": "mobile",
  "metadata": {
    "browser": "Chrome",
    "os": "Windows"
  },
  "createdAt": "2025-01-10T10:20:00Z"
}
```
ma;ana se podria guardar otro evento asi
``` bash
{
  "type": "error",
  "code": 500,
  "message": "Internal Server Error",
  "stack": "...",
  "service": "payments",
  "createdAt": "2025-01-10T11:00:00Z"
}

```

### Endpoints principales del proyecto

- POST /events -> Guardar evento
- GET /events -> listar (con filtros)
- GET /events/stats -> agregaciones
- DELETE /events -> Limpieza

# activity-tracker-api
