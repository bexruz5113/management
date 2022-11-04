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
              <div class="scene">
                <div
                  class="card"
                  v-bind:class="{ flipme: cardOne == `flipped_${info.id}` }"
                >
                  <div class="card__face card__face--front">
                    <div class="d-flex justify-center align-center">
                      <div>
                        <v-img
                          class="mx-auto"
                          :src="require(`@/assets/experts/${info.img}.svg`)"
                        ></v-img>
                      </div>
                    </div>
                    <div class="px-2">
                      <p
                        class="name"
                        @click="
                          cardOne == 'start'
                            ? (cardOne = `flipped_${info.id}`)
                            : (cardOne = 'start')
                        "
                      >
                        {{ info.name }}
                      </p>
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
                  <div class="card__face card__face--back overflow-auto">
                    <p
                      class="text-end mb-0"
                      @click="
                        cardOne == 'start'
                          ? (cardOne = 'flipped')
                          : (cardOne = 'start')
                      "
                    >
                      <v-icon style="cursor: pointer">mdi-window-close</v-icon>
                    </p>
                    <p class="text-h4">{{ info.name }}</p>
                    <p class="text-h6 font-weight-regular text-justify px-2">
                      {{ info.information }}
                    </p>
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
      cardOne: "start",
      experts: [
        {
          id: 1,
          name: "Khudaynazar Kurbanov",
          position: "Founder/CEO Mahorat & Management",
          img: "Khudoynazar",
          link: "khudaynazar-kurbanov-70950723b/",
          information:
            "Researcher (in the field of vocational education). Specialist with international experience in the fields of NQF, ISCED (UNESCO), Quality Assurance in Education. Content developer. Project manager. Co-founder of “Management & Management” organization. Has 18+ years of consulting experience in international and national projects.",
        },
        {
          id: 2,
          name: "Feruza Rashidova",
          position: "QA Expert in Education system PhD in Pedagogy",
          img: "Feruza",
          link: "dr-feruza-rashidova-01438326/",
          information:
            "Doctor of Science in Pedagogy. An expert on the quality of education system for more than 20 years. Expert and trainer in ensuring the quality of educational programs and systems for more than 10 years. Content developer. Project manager. Leading expert of “Management & Management” organization as with the rich experience in consulting, developing the international projects on enhancement of HRD as systematic approach on Quality Assurance establishment in management, establishing the standards of qualifications of the teachers and personnel in education systems for sustainable development of local educational providers.",
        },
        {
          id: 3,
          name: "Shuhratxo’ja Amanov",
          position: "Skills & Employment expert Education",
          img: "Shuhratxoja",
          link: "shukhrathoja-amanov-mba-916a3513/",
          information:
            "Holds an MBA degree in . 20+ years working experience for the International Organizations in the areas of Business Development, Education, Skills and Human Capital Development. Several years' experience in management of and consultancy to donor and international lending agency funded projects in Armenia, Georgia, Kazakhstan, Tajikistan, Turkmenistan and Uzbekistan.",
        },
        {
          id: 4,
          name: "Farhod Furkatov",
          position: "Data Scientist CEO - Goodly Wellness",
          img: "Farhod",
          link: "farhodf/",
          information:
            "National Expert of “Management & Management” organization. He has over 10 years of experience building and implementing digital products. /n His journey to the Tech world started with an introduction to the Data world in California, Silicon Valley. He is a tech entrepreneur with a passion to deliver quality tech solutions for businesses and people.",
        },
        {
          id: "5",
          name: "Sultanmurad Hamroev",
          position: "Business Analyst Project Coordinator - TVET",
          img: "Sultanmurad",
          link: "",
          information:
            "Expert on the quality of professional education. National expert in Mahorat & Management. Head of Young analytics development project (YADP).",
        },
        {
          id: 6,
          name: "Alisher Akmaljonov",
          position: "Entrepreneur/Founder of “Event Entertainment” LLC",
          img: "Alisher",
          link: "alisher-akmaljonov-447125233/",
          information:
            "Entrepreneur.Founder and director of the “Event Entertainment” LLC. Member of Central Asian Youth Leadership Academy (CAYLA).",
        },
        {
          id: 7,
          name: "Sadokat Kaziyeva",
          position: "Product Designer User Experience specialist",
          img: "Sadokat",
          link: "sadokat/",
          information:
            "Sadokat made a transition into UI/UX Design field after many years in Human Resources and Recruiting. Enthusiastic about helping people solve their problems ensuring the best possible outcome. She has a work experience with one of the leading companies in the world - Apple. She aspires to help people transform their ideas into products that are simple, appealing, and harmonious.",
        },
        {
          id: 8,
          name: "Sirojiddin Olimov",
          position: "Member of Central Asian Youth Leadership Academy (CAYLA)",
          img: "Sirojiddin",
          link: "sirojiddinolimov/",
          information:
            "Member of Central Asian Youth Leadership Academy (CAYLA). Master Program student of Edinburgh University",
        },
        {
          id: 9,
          name: "Nodir Ergashev",
          position: "UzTEA expert",
          img: "Nodir",
          link: "",
          information:
            "UzTEA expert. Member of the Management Board of UzTEA.Content developer and trainer.",
        },
        {
          id: 10,
          name: "Sabrina Bakhtiyorova",
          position: "Project development coordinator",
          img: "Sabrina",
          link: "sabrina-bakhtiyorova-201694207/",
          information:
            "Young analytics development project activist. Bachelor of Business and Financial Management (MDIST). Methodist.",
        },
      ],
    };
  },
  methods: {},
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
.name:hover {
  color: #363df1;
}
.scene {
  width: 94%;
  height: 520px;
  margin: 0 auto;
  perspective: 1100px;
}
.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
}
.card__face {
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  backface-visibility: hidden;
}
.card__face--back {
  width: 100%;
  height: 100%;
  padding: 8px 12px;
  border-radius: 10px;
  background-color: #f5f5f5;
  transform: rotateY(180deg);
}
.card__face--front {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 8px 12px;
  background-color: #f5f5f5;
}
.flipme {
  transform: rotateY(180deg);
}
</style>
