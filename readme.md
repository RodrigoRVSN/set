# Integrantes do projeto SET

[Link do back-end em que foi desenvolvida a API](https://github.com/RodrigoRVSN/set-api)

- 200897 Rodrigo Victor da Silva Nascimento
- 200067 Antônio Nery Lopes Neto
- 200320 Gabriel Bueno Machado
- 200131 Gabriel Messias da Silva
- 200318 Gianluca Bueno Machado Ribeiro
- 190056 Leonardo Poveda Mayoral
- 200032 Natanael Felipe Garcia

# 📙 University project of sustainability

<br>

___
## 🔨 Tools:

- React Native
- Typescript
- Styled Components
- Eslint / Prettier
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 

___
## 🤺 How to use:

### To clone the project

```bash
git clone https://github.com/rodrigorvsn/set.git
```

### To download the dependencies of the project

```bash
yarn install
```

### To run the expo server

```bash
expo start
```

### Run direct in Android connected

```bash
expo android
```

### Run direct in Iphone connected

```bash
expo ios
```

### To verify with Eslint the linting errors in code

```bash
yarn lint
```

### To fix the erros in the Eslint 

```bash
yarn lint:fix
```

___
## 🤖 Auto-formatting on save:

Inside `/.vscode/settings.json` we set prettier as the default formatter, and also set `editor.codeActionsOnSave` to run:

- **Lint:** `"source.fixAll.eslint"`
- **Format:** `"source.fixAll.format"`

___
## ✅  Checking standards pre-commit:

Using [husky](https://www.npmjs.com/package/husky) we can check all of our style standards to make sure our git commits are up to par. Check those checks out at [`.husky/pre-commit`](.husky/pre-commit)
