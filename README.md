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
  "type": "login",
  "userId": "u123",
  "ip": "192.168.0.1",
  "metadata": {
    "browser": "Chrome",
    "os": "Windows"
  }
}

```
ma;ana se podria guardar otro evento asi
``` bash
{
  "type": "error",
  "code": 500,
  "message": "Internal Server Error",
  "service": "payments"
}


```

### Endpoints principales del proyecto

- POST /events -> Guardar evento
- GET /events -> listar (con filtros)
- GET /events/stats -> agregaciones
- DELETE /events -> Limpieza
