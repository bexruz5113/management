<template>
  <div>
    <div :class="{ rocketUp: comin, rocketDown: leavin }" @click="scrollPos()">
      <svg
        id="Capa_1"
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 490.52 256.01"
      >
        <path
          class="cls-1"
          d="M487.41,355.05,252.74,120.38a10.67,10.67,0,0,0-15.08,0L3,355.05a10.67,10.67,0,0,0,15.09,15.08L245.19,143,472.31,370.15a10.66,10.66,0,0,0,15.08-15.08Z"
          transform="translate(0 -117.26)"
        />
        <path
          d="M479.86,373.27a10.68,10.68,0,0,1-7.55-3.12L245.19,143,18.08,370.15A10.67,10.67,0,0,1,3,355.07L237.66,120.4a10.67,10.67,0,0,1,15.08,0L487.41,355.07a10.67,10.67,0,0,1-7.55,18.2Z"
          transform="translate(0 -117.26)"
        />
      </svg>
    </div>
    <v-app>
      <v-navigation-drawer width="276" v-model="drawer" temporary app>
        <div class="title py-3 pl-6"><h3>Management</h3></div>
        <v-list dense>
          <v-list-item-group v-model="selectedItem" color="grey">
            <v-list-item
              v-for="item in nav"
              :key="item.title"
              @click="routerLink(item.to)"
            >
              <v-list-item-content>
                <v-list-item-title
                  class="pl-2 text-start"
                  v-text="item.title"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar class="px-0" app color="white" dark height="85">
        <v-container fluid>
          <v-row>
            <v-col cols="6" md="2" class="text-md-center text-start">
              <router-link to="/" tag="button">
                <v-img src="./assets/Logo.svg" />
              </router-link>
            </v-col>
            <v-col cols="6" md="10" class="d-flex justify-end align-center">
              <div class="d-md-flex d-none ml-6">
                <router-link class="text-lg-h6 px-2 linkHover" to="/about">
                  {{ $t("navbar.about") }}
                </router-link>

                <router-link class="text-lg-h6 px-2 linkHover" to="/services">
                  {{ $t("navbar.services") }}
                </router-link>

                <router-link class="text-lg-h6 px-2 linkHover" to="/projects">
                  {{ $t("navbar.projects") }}
                </router-link>

                <router-link class="text-lg-h6 px-2 linkHover" to="/experts">
                  {{ $t("navbar.experts") }}
                </router-link>

                <router-link class="text-lg-h6 px-2 linkHover" to="/apply">
                  {{ $t("navbar.apply") }}
                </router-link>

                <router-link class="text-lg-h6 px-2 linkHover" to="/new">
                  {{ $t("navbar.news") }}
                </router-link>

                <router-link class="text-lg-h6 px-2 linkHover" to="/contact">
                  {{ $t("navbar.contact") }}
                </router-link>
              </div>
              <v-menu rounded offset-y open-on-hover>
                <template v-slot:activator="{ attrs, on }">
                  <v-btn v-bind="attrs" v-on="on" icon class="ml-4">
                    <v-icon color="black">mdi-web</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    class="d-flex align-center"
                    v-for="(item, index) in items"
                    :key="index"
                    link
                    @click="exchange(item.value)"
                  >
                    <v-img
                      :src="require(`@/assets/${item.flag}.png`)"
                      width="20"
                      class="mr-1"
                    ></v-img>
                    <v-list-item-title
                      v-text="item.state"
                      class="text-caption"
                    ></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-app-bar-nav-icon
                color="black"
                class="d-md-none d-block"
                @click="drawer = !drawer"
              />
            </v-col> </v-row
        ></v-container>
      </v-app-bar>

      <v-main>
        <div style="overflow: hidden">
          <div style="z-index: 1; position: relative">
            <router-view />
          </div>
        </div>
      </v-main>
      <v-footer dark padless class="d-block indigo darken-4 white--text py-5">
        <v-col cols="12" class="d-lg-flex d-none">
          <v-row>
            <v-col cols="3">
              <div class="mb-5">
                <v-img
                  width="80"
                  class="mx-auto"
                  src="./assets/footerLogo.svg"
                />
              </div>
              <div class="d-flex justify-center">
                <a href="#">
                  <v-img max-width="25px" src="./assets/facebook.svg"
                /></a>
                <a href="#">
                  <v-img class="mx-2" max-width="25px" src="./assets/insta.svg"
                /></a>
                <a href="#">
                  <v-img
                    class="mr-2"
                    max-width="25px"
                    src="./assets/telegram.svg"
                /></a>
                <a href="#">
                  <v-img max-width="25px" src="./assets/youtube.svg"
                /></a>
              </div>
            </v-col>
            <v-col cols="6">
              <li class="d-md-flex justify-space-around d-none ml-6">
                <ol>
                  <router-link class="white--text text-lg-h6" to="/about">
                    {{ $t("navbar.about") }}
                  </router-link>
                </ol>
                <ol>
                  <router-link class="white--text text-lg-h6" to="/services">
                    {{ $t("navbar.services") }}</router-link
                  >
                </ol>

                <ol>
                  <router-link class="white--text text-lg-h6" to="/apply">
                    {{ $t("navbar.apply") }}</router-link
                  >
                </ol>
                <ol>
                  <router-link class="white--text text-lg-h6" to="/contact">
                    {{ $t("navbar.contact") }}</router-link
                  >
                </ol>
              </li>
              <div class="white--text text-lg-h6 d-flex justify-center mt-2">
                <p class="mr-5">Privacy Policy</p>
                <p class="ml-5">Terms & Conditions</p>
              </div>
            </v-col>
            <v-col cols="3" class="text-left text-h6">
              <p class="mb-1">Address:</p>
              <p class="mb-1">Shota Rustavili Street 53B</p>
              <p class="mb-1">Tashkent, Uzbekistan</p>
              <p>+99895 195-00-55</p>
            </v-col>
          </v-row>
        </v-col>
        <!-- responsive -->
        <v-col cols="12" class="d-lg-none d-block px-15">
          <v-row>
            <v-col cols="12">
              <div class="mb-5">
                <v-img
                  width="80"
                  class="mx-sm-0 mx-auto"
                  src="./assets/footerLogo.svg"
                />
              </div>
            </v-col>
            <v-col cols="12">
              <v-row>
                <v-col cols="12" sm="6" class="text-left text-h6">
                  <p class="mb-1">Address:</p>
                  <p class="mb-1">Shota Rustavili Street 53B</p>
                  <p class="mb-1">Tashkent, Uzbekistan</p>
                  <p>+99895 195-00-55</p>
                </v-col>
                <v-col cols="12" sm="6" class="text-left">
                  <li class="d-block text-h6">
                    <ol class="pl-0">
                      <router-link
                        class="white--text text-lg-h6"
                        to="/politics"
                      >
                        About us
                      </router-link>
                    </ol>
                    <ol class="pl-0">
                      <router-link class="white--text text-lg-h6" to="/society">
                        Our Services</router-link
                      >
                    </ol>

                    <ol class="pl-0">
                      <router-link class="white--text text-lg-h6" to="/culture">
                        Apply</router-link
                      >
                    </ol>
                    <ol class="pl-0">
                      <router-link class="white--text text-lg-h6" to="/sport">
                        Contact</router-link
                      >
                    </ol>
                  </li>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" class="d-flex justify-center">
              <div class="d-flex">
                <a href="#">
                  <v-img max-width="25px" src="./assets/facebook.svg"
                /></a>
                <a href="#">
                  <v-img class="mx-2" max-width="25px" src="./assets/insta.svg"
                /></a>
                <a href="#">
                  <v-img
                    class="mr-2"
                    max-width="25px"
                    src="./assets/telegram.svg"
                /></a>
                <a href="#">
                  <v-img max-width="25px" src="./assets/youtube.svg"
                /></a>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-divider></v-divider>

        <v-card-text class="white--text text-center"
          >© {{ new Date().getFullYear() }} —
          <strong>Mahorat & Management. All rights reserved</strong>
        </v-card-text>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    selectedItem: 0,
    topPoint: 0,
    items: [
      { flag: "lat", state: "O'zbek", value: "uz-lat", appear: true },
      { flag: "united-states", state: "English", value: "en", appear: true },
      { flag: "lat", state: "Ўзбек", value: "uz-kir", appear: true },
      { flag: "russia", state: "Russian", value: "ru", appear: true },
    ],
    nav: [
      {
        title: "About",
        to: "/about",
      },
      {
        title: "Services",
        to: "/services",
      },
      {
        title: "Projects",
        to: "/projects",
      },
      {
        title: "Experts",
        to: "/experts",
      },
      {
        title: "Apply",
        to: "/apply",
      },
      {
        title: "News",
        to: "/new",
      },
      {
        title: "Contact",
        to: "/contact",
      },
    ],
  }),
  computed: {
    comin() {
      return this.topPoint > 250 ? true : false;
    },
    leavin() {
      return this.topPoint > 250 ? false : true;
    },
  },
  methods: {
    exchange(locale) {
      this.$i18n.locale = locale;

      console.log("xaxaxaxa" + locale);
    },
    routerLink(to) {
      this.$router.push(to);
    },
    scrollPos() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.topPoint = window.scrollY;
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html {
  scroll-behavior: smooth;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
.linkHover {
  color: #000 !important;
}
.linkHover:hover {
  color: #1a237e !important;
}
.rocketUp {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #1a237e;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  animation: comingUp 0.5s linear;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 1px 0px 10px 0px #1a237e;
  }
  svg {
    width: 100%;
    max-width: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    path {
      fill: white;
    }
  }
}

.rocketDown {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #323b9c;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  animation: comingDown 0.5s linear forwards;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 1px 0px 20px 0px #154278;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    path {
      fill: white;
    }
  }
}
@keyframes comingUp {
  from {
    bottom: -50px;
    opacity: 0;
  }
  to {
    visibility: visible;
    bottom: 20px;
    opacity: 1;
  }
}
@keyframes comingDown {
  from {
    bottom: 20px;
    opacity: 1;
  }
  to {
    visibility: hidden;
    bottom: -50px;
    opacity: 0;
  }
}
.breadcrub-sheet {
  box-shadow: 0 8px 10px -9px rgba(0, 0, 0, 0.05),
    0 3px 14px 2px rgba(0, 0, 0, 0.01), 0 5px 5px -3px rgba(0, 0, 0, 0.05);
}
::-webkit-scrollbar {
  width: 10px;
  max-height: 10px;
}
::-webkit-scrollbar-track {
  background: #eee;
}
::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(174, 173, 173);
}
</style>
