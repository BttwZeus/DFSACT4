# DFSACT4

# Proyecto Tasklist

Este proyecto es una aplicación de gestión de tareas desplegada en Vercel.

## Despliegue Automático

El despliegue automático se realiza mediante GitHub Actions. Cada vez que se hace un push a la rama `main`, el workflow:

1. Instala las dependencias.
2. Compila el proyecto.
3. Despliegar en Vercel.

### Secrets Requeridos

- `VERCEL_TOKEN`: Token de acceso a Vercel.
- `VERCEL_ORG_ID`: ID de la organización en Vercel.
- `VERCEL_PROJECT_ID`: ID del proyecto en Vercel.

### Cómo Contribuir

1. Clona el repositorio.
2. Crea una rama para tu feature
3. Haz commit de tus cambios
4. Sube la rama
5. Abre un Pull Request.
