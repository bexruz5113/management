<template>
  <div>
    <v-container class="py-10 mx-auto">
      <v-row>
        <v-col cols="12">
          <p class="expert">OUR EXPERTS</p>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col
              cols="12"
              sm="6"
              lg="4"
              class="my-2"
              v-for="(info, index) in experts"
              :key="index"
            >
              <div class="grey lighten-2 px-2 py-4 ma-4 section rounded">
                <div class="d-flex justify-center align-center">
                  <div>
                    <v-img
                      class="mx-auto"
                      :src="require(`@/assets/experts/${info.img}.svg`)"
                    ></v-img>
                  </div>
                </div>
                <div class="px-2">
                  <p class="name">{{ info.name }}</p>
                  <p class="py-4 text-h6 font-weight-regular">
                    {{ info.position }}
                  </p>
                  <div class="my-4">
                    <a :href="`https://www.linkedin.com/in/${info.link}`">
                      <v-img
                        width="50"
                        class="mx-auto"
                        src="../assets/Linkedin.svg"
                      ></v-img>
                    </a>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experts: [
        {
          name: "Khudaynazar Kurbanov",
          position: "Founder/CEO Mahorat & Management",
          img: "Khudoynazar",
          link: "khudaynazar-kurbanov-70950723b/",
        },
        {
          name: "Feruza Rashidova",
          position: "QA Expert in Education system PhD in Pedagogy",
          img: "Feruza",
          link: "dr-feruza-rashidova-01438326/",
        },
        {
          name: "Shuhratxo’ja Amanov",
          position: "Skills & Employment expert Education",
          img: "Shuhratxoja",
          link: "shukhrathoja-amanov-mba-916a3513/",
        },
        {
          name: "Farhod Furkatov",
          position: "Data Scientist CEO - Goodly Wellness",
          img: "Farhod",
          link: "farhodf/",
        },
        {
          name: "Sultanmurad Hamroev",
          position: "Business Analyst Project Coordinator - TVET",
          img: "Sultanmurad",
          link: "",
        },
        {
          name: "Alisher Akmaljonov",
          position: "Entrepreneur/Founder of “Event Entertainment” LLC",
          img: "Alisher",
          link: "alisher-akmaljonov-447125233/",
        },
        {
          name: "Sadokat Kaziyeva",
          position: "Product Designer User Experience specialist",
          img: "Sadokat",
          link: "sadokat/",
        },
        {
          name: "Sirojiddin Olimov",
          position: "Member of Central Asian Youth Leadership Academy (CAYLA)",
          img: "Sirojiddin",
          link: "sirojiddinolimov/",
        },
        {
          name: "Nodir Ergashev",
          position: "UzTEA expert",
          img: "Nodir",
          link: "",
        },
        {
          name: "Sabrina Bakhtiyorova",
          position: "Project development coordinator",
          img: "Sabrina",
          link: "sabrina-bakhtiyorova-201694207/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.expert {
  border-radius: 1px;
  border-top: 6px solid #363df1;
  color: #242424;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  opacity: 0.75;
  padding-top: 20px;
  margin-left: 20px;
  margin-bottom: 25px;
  width: 158px;
  text-align: start;
}

@media (max-width: 768px) {
  .expert {
    margin-left: 20px;
  }
}
.name {
  margin-top: 15px;
  cursor: pointer;
  color: #242424;
  font-size: 28px;
  font-weight: 700;
}
.bool {
  height: 700px;
}
.section:hover .name {
  color: #363df1;
}
</style>
