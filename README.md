# MetaBrainz app image

The code/structure in this branch is used to create the app base image (docker)

## Initial build steps
### Vue
```
vue create .
```
#### Config
- Manual, 
- Router, Vuex 
- Vue.3.x
- ESLint with error prevention only
- Lint on save
- Dedicated config files
- Use Yarn
### Quasar
```
vue add quasar
```
#### Config
- Replace *.vue
- Sass with SCSS syntax
- Quasar Icon Set: Material Icons
- Features: Roboto font, Material Icons, Fontawesome
