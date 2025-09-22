# 📋 Prueba Técnica Frontend - LegalSuite

# 🏁 Inicio Rápido

Este proyecto es una prueba técnica para LegalSuite. Incluye un dashboard de demandas legales desarrollado con React 18 y Vite.

## 🚀 Inicialización

```bash
npm install
npm run server
npm run dev
```

> 💡 **Recomendado:** Usa `npm run dev:full` para iniciar la API y el frontend al mismo tiempo.

## 📡 API disponible en `http://localhost:3001`

```bash
GET /demands                               # Todas las demandas (12 items)
GET /demands?demandType=laboral            # Filtrar por tipo de demanda exacto
GET /demands?status=abierta                # Filtrar por estado exacto
GET /demands?client=Pedro%20Martínez%20García  # Filtrar por cliente exacto (URL encoded)
GET /demands?demandType=civil&status=cerrada   # Filtros combinados
GET /available_demand_types                # Todos los tipos de demanda disponibles
GET /available_statuses                    # Todos los estados disponibles
GET /available_clients                     # Todos los clientes disponibles
```
