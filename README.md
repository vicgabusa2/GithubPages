# GithubPages

Sitio web estático mínimo para aprender a usar GitHub Pages.

## Estructura

| Archivo       | Propósito                                        |
|---------------|--------------------------------------------------|
| `index.html`  | Página principal (GitHub Pages la sirve en `/`)  |
| `acerca.html` | Segunda página, para probar enlaces internos     |
| `style.css`   | Estilos                                          |
| `script.js`   | Un poco de JavaScript para comprobar que se carga|

## Verlo en local

Abre `index.html` en el navegador, o levanta un servidor:

```bash
python3 -m http.server 8000
# luego visita http://localhost:8000
```

## Publicarlo en GitHub Pages

1. Crea un repositorio en GitHub (público, o privado si tu plan lo permite).
2. Sube estos archivos a la rama `main`:
   ```bash
   git init
   git add .
   git commit -m "Sitio inicial"
   git branch -M main
   git remote add origin https://github.com/<usuario>/<repositorio>.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Build and deployment**
   - *Source*: `Deploy from a branch`
   - *Branch*: `main` y carpeta `/ (root)` → **Save**
4. Espera uno o dos minutos. La URL aparece en esa misma pantalla:
   `https://<usuario>.github.io/<repositorio>/`

Cada `git push` a `main` vuelve a publicar el sitio automáticamente
(puedes ver el progreso en la pestaña **Actions**).

## Notas útiles

- El archivo de entrada debe llamarse `index.html` (o `index.md` / `README.md`).
- Usa rutas relativas (`style.css`, no `/style.css`): en un sitio de proyecto
  la raíz es `/<repositorio>/`, no `/`.
- Un repositorio llamado `<usuario>.github.io` se publica en la raíz
  `https://<usuario>.github.io/` (sitio de usuario).
- Para usar un dominio propio, agrega un archivo `CNAME` con el dominio y configura el DNS.
