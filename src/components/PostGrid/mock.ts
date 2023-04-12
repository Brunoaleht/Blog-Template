import { PostGridProps } from '.';

export default {
  postData: [
    {
      id: '1',
      attributes: {
        title: 'ReactHook Studies',
        slug: 'react-hook-studies',
        cover: {
          coverData: {
            attributes: {
              alternativeText: null,
              url: 'https://res.cloudinary.com/dxldesniw/image/upload/v1677769491/thumbnail_MKS_entrevista_87872be63c_60bb358adf.jpg',
            },
          },
        },
        excerpt:
          'I made this project using various react hooks, such as useEffect to make a call to the api, use State to keep my data in state, useContext and useReducer to do the work in the general context in the shopping cart.',
        content:
          "Assim ficou o meu código do carrinho: \n```\nimport P from 'prop-types';\nimport { FaRegTimesCircle } from 'react-icons/fa';\nimport styles from './MyCarProducts.module.css';\nimport { Products } from '../../myComponents/Products';\n\nexport const MyCarProducts = ({ show, closedClick, myCart, removeItem, SubmitClick }) => {\n  const subTotal = myCart.reduce((acc, cur) => acc + cur.price, 0);\n\n  return (\n    show && (\n      <div className={styles.MyCarProducts}>\n        <div className={styles.myBug}>\n          <div className={styles.header}>\n            <div className={styles.title}>\n              <h1>Carrinho de Compras</h1>\n            </div>\n            <div className={styles.closedButton} onClick={closedClick}>\n              <FaRegTimesCircle />\n            </div>\n          </div>\n          <div className={styles.ContentProducts}>\n            <div className={styles.myProducts}>\n              <Products myCartProducts={myCart} clickRemoveItem={removeItem} />\n            </div>\n          </div>\n          <div className={styles.contentTotal}>\n            <div className={styles.ToPay}>\n              Total: R$<span>{subTotal}</span>\n            </div>\n            <button className={styles.payButton} onClick={() => SubmitClick(myCart)}>\n              Finalizar Compras\n            </button>\n          </div>\n        </div>\n      </div>\n    )\n  );\n};\nMyCarProducts.propTypes = {\n  show: P.bool.isRequired,\n  closedClick: P.func.isRequired,\n  myCart: P.array.isRequired,\n  removeItem: P.func.isRequired,\n  SubmitClick: P.func.isRequired,\n};\n\n```",
        categories: {
          categoryData: [
            {
              id: '2',
              attributes: {
                displayName: 'ReactJs',
                slug: 'react-js',
              },
            },
            {
              id: '1',
              attributes: {
                displayName: 'JavaScript',
                slug: 'java-script',
              },
            },
          ],
        },
        author: {
          authorData: {
            id: '1',
            attributes: {
              displayName: 'Bruno Alexandre',
              slug: 'bruno-alexandre',
            },
          },
        },
      },
    },
    {
      id: '2',
      attributes: {
        title: 'Vue App',
        slug: 'vue-app',
        cover: {
          coverData: {
            attributes: {
              alternativeText: null,
              url: 'https://res.cloudinary.com/dxldesniw/image/upload/v1679940199/medium_Vue_Categories_9c010b29a0_b53cebb018.jpg',
            },
          },
        },
        excerpt:
          'Foi uma aplicação completa feita em vue js no front-end, no backend ele foi feito completamente em node js, usando middleware para o express como o body-parse, cors. ',
        content:
          '**O projeto** visão mostrar os meus conhecimentos com o node e com o vue, usando diversos conhecimentos aprendidos ao longo dos meus cursos, onde faço toda o backend em node js, usando o express, e junto com ele os middleware body-parse, para interpretar a requisição do body, e o cors para disponibilizar usar duas aplicações, a do front rodando na port 8080 e a do backend 4000, tendo como objetivo um app para artigos escolares, com autenticação de usuário e comparação de token, e criptografia de senha, além de acesso restrito a não autorizados. \n\n```\n<template>\n  <div id="app" :class="{ \'hide-menu\': !isMenuVisible || !user }">\n    <Header\n      title="Base de Conhecimento"\n      :hideToggle="!user"\n      :hideUserMenu="!user"\n    />\n    <MenuM v-if="user" />\n    <Loading v-if="validatingToken" />\n    <Content v-else />\n    <Footer />\n  </div>\n</template>\n\n<script>\nimport axios from "axios";\nimport { baseApiUrl, userKey } from "./config/fileGlobal";\nimport { mapState } from "vuex";\nimport Header from "./components/templates/Header.vue";\nimport Footer from "./components/templates/Footer.vue";\nimport MenuM from "./components/templates/MenuM.vue";\nimport Content from "./components/templates/Content.vue";\nimport Loading from "./components/templates/Loading.vue";\nexport default {\n  name: "App",\n  components: { Header, Footer, MenuM, Content, Loading },\n  computed: mapState(["isMenuVisible", "user"]),\n  data() {\n    return {\n      validatingToken: true,\n    };\n  },\n  methods: {\n    async validateToken() {\n      this.validatingToken = true;\n      const json = localStorage.getItem(userKey);\n      const userData = JSON.parse(json);\n      this.$store.commit("setUser", null);\n      if (!userData) {\n        this.validatingToken = false;\n        return this.$router.push({ name: "AuthV" });\n      }\n      const res = await axios.post(`${baseApiUrl}/validateToken`, userData);\n      if (res.data) {\n        this.$store.commit("setUser", userData);\n        if (this.$mq === "xs" || this.$mq === "sm") {\n          this.$store.commit("toggleMenu", false);\n        }\n      } else {\n        localStorage.removeItem(userKey);\n        this.$router.push({ name: "AuthV" });\n      }\n      this.validatingToken = false;\n    },\n  },\n  created() {\n    this.validateToken();\n  },\n};\n</script>\n\n<style>\n* {\n  font-family: "Lato", sans-serif;\n}\nbody {\n  margin: 0;\n}\n#app {\n  -webkit-font-smoothing: antialiased;\n  -moz-os-font-smoothing: grayscale;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 60px 1fr 40px;\n  grid-template-columns: 300px 1fr;\n  grid-template-areas: "header header" "menu content" "menu footer";\n}\n#app.hide-menu {\n  grid-template-areas: "header header" "content content" "footer footer";\n}\n</style>\n```\n',
        categories: {
          categoryData: [
            {
              id: '4',
              attributes: {
                displayName: 'VueJs',
                slug: 'vue-js',
              },
            },
          ],
        },
        author: {
          authorData: {
            id: '1',
            attributes: {
              displayName: 'Bruno Alexandre',
              slug: 'bruno-alexandre',
            },
          },
        },
      },
    },
  ],
} as PostGridProps;
