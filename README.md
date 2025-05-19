# Gestor de Contactes

## Descripció breu

El **Gestor de Contactes** és una aplicació web desenvolupada amb l'arquitectura MVVM (Model-View-ViewModel) que permet gestionar una llista de contactes personals. L'usuari pot afegir, editar i eliminar contactes, així com visualitzar-los de manera clara i ordenada. El backend utilitza Node.js, Express i MongoDB, mentre que el frontend està desenvolupat amb Vue.js.

---

## Arquitectura i estructura de carpetes

El projecte està dividit en dues parts principals: **backend** i **frontend**.

```
projecte/
│
├── backend/
│   ├── app.js
│   ├── package.json
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── controller.js
│   ├── models/
│   │   └── contact.js
│   └── routes/
│       └── api.js
│
└── frontend/
    ├── index.html
    ├── test-model.html
    ├── css/
    │   └── styles.css
    └── js/
        ├── main.js
        ├── model.js
        ├── view.js
        └── viewmodel.js
```

- **backend/**: Conté el servidor Express, la configuració de la base de dades MongoDB, els models, controladors i rutes de l'API REST.
- **frontend/**: Inclou la interfície d'usuari, els estils CSS i la lògica MVVM implementada amb Vue.js.

---

## Instruccions d'instal·lació i execució

### 1. Requisits previs

- Node.js i npm instal·lats
- MongoDB instal·lat i en execució localment

### 2. Instal·lació del backend

1. Accedeix a la carpeta del backend:
    ```$ cd backend```
2. Instal·la les dependències:
    ```$ npm install```

### 3. Configuració de la base de dades

- Assegura't que MongoDB està en execució a `mongodb://localhost:27017/gestordb`.

### 4. Execució del backend

1. Inicia el servidor:
    ```$ node app.js```
2. El servidor escoltarà per defecte al port `3000`.

### 5. Execució del frontend

1. Accedeix a la carpeta `frontend/`.
2. Obre el fitxer `index.html` amb el teu navegador preferit.
3. L'aplicació es connectarà automàticament a l'API backend per gestionar els contactes.

---

## Notes addicionals

- Pots utilitzar el fitxer `test-model.html` per fer proves directes amb el model de contactes.
- Si canvies la configuració de la base de dades o el port, recorda actualitzar les URLs corresponents al frontend i backend.

---

**Autor: Daniel Clavero García i Eric Barrachina Sabariego**  
