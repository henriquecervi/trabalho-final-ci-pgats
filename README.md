<p align="center">
  <h1 align="center">🎓 Trabalho Final CI PGATS</h1>
</p>

<p align="center">
  <strong>Integração Contínua com GitHub Actions</strong><br>
  Trabalho final da disciplina de Integração Contínua da Pós-graduação Automação de Testes de Software
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-22-brightgreen" alt="Node.js">
  <img src="https://img.shields.io/badge/Mocha-11.2.2-red" alt="Mocha">
  <img src="https://img.shields.io/badge/CI-GitHub%20Actions-blue" alt="GitHub Actions">
  <img src="https://img.shields.io/badge/Package%20Manager-Yarn-blue" alt="Yarn">
</p>

---

## 🎯 Sobre o Projeto

Este repositório contém o trabalho final da disciplina de **Integração Contínua**, demonstrando a implementação de:

- ✅ **Testes Unitários**
- 🚀 **CI Pipeline** com GitHub Actions
- 📦 **Gerenciamento de Dependências** com Yarn
- 🧪 **Relatórios de Teste**
- 📊 **Integração com GitHub**

---

## 🛠️ Funcionalidades Implementadas

O projeto implementa funções JavaScript para gerenciamento de pets:

- 🏷️ **`geradorDeTagsDeIdentificacao`** - Gera tags de identificação em maiúsculas
- ✅ **`verificarSePodeSerAdotado`** - Verifica critérios de adoção por idade e porte
- 🍖 **`calcularConsumoDeRacao`** - Calcula consumo diário de ração
- 🎾 **`decidirTipoDeAtividadePorPorte`** - Sugere atividades baseadas no porte
- ⚡ **`buscarDadoAsync`** - Demonstra programação assíncrona

---

## 📁 Estrutura do Projeto

```
trabalho-final-ci-pgats/
├── 📁 trabalho-final/
│   ├── 📄 trabalho.js                 # Implementações das funções
│   ├── 📄 trabalho-final-dados.js     # Dados de configuração
│   └── 📁 testes/
│       └── 📄 trabalho-final.js       # Testes unitários
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 tests.yaml              # Pipeline CI
├── 📄 package.json                    # Configurações e dependências
├── 📄 yarn.lock                       # Lock de dependências
└── 📄 README.md                       # Documentação
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ 
- Yarn

### Instalação e Execução

```bash
# 1. Clone o repositório
git clone https://github.com/henriquecervi/trabalho-final-ci-pgats.git
cd trabalho-final-ci-pgats

# 2. Instale as dependências
yarn install

# 3. Execute os testes
yarn unit-tests
```

---

## 🧪 Testes Unitários

Os testes cobrem todas as funcionalidades implementadas:

```bash
# Executar testes
yarn unit-tests

# Executar testes com reporter específico
yarn mocha ./trabalho-final/testes/trabalho-final.js --reporter spec
```

### Cobertura de Testes
- ✅ Geração de tags de identificação
- ✅ Verificação de critérios de adoção
- ✅ Cálculo de consumo de ração
- ✅ Sugestão de atividades por porte
- ✅ Operações assíncronas

---

## 🔄 CI Pipeline

### GitHub Actions Workflow

O pipeline automatizado executa:

1. 📥 **Checkout** do código
2. 🟢 **Setup** do Node.js v22
3. 📦 **Instalação** do Yarn e dependências
4. 🧪 **Execução** dos testes unitários
5. 📊 **Geração** de relatórios JUnit
6. ✅ **Publicação** dos resultados

### Triggers
- ✨ Push na branch `main`
- 🔧 Execução manual (workflow_dispatch)

### Relatórios
- 📋 **Test Summary** no GitHub Actions
- 📊 **JUnit Reports** integrados
- 📈 **Artifacts**
- ✅ **Status Checks** em PRs

---

## 🛡️ Qualidade do Código

- **Framework de Testes**: Mocha v11.2.2
- **Módulos ES6**: Suporte completo com `"type": "module"`
- **Assertions**: Node.js built-in assert
- **Formato de Relatórios**: xUnit XML para integração CI

---

## 📚 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| Node.js | 22.x | Runtime JavaScript |
| Mocha | 11.2.2 | Framework de testes |
| Yarn | Latest | Gerenciador de pacotes |
| GitHub Actions | v4 | CI/CD Pipeline |
| Ubuntu | 24.04 | Ambiente de execução |

---

<p align="center">
  <strong>🎉 Trabalho Final - Integração Contínua PGATS 🎉</strong>
</p>
