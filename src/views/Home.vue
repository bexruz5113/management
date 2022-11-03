<template>
  <div>
    <v-container fluid>
      <v-col cols="12" class="bgImage">
        <p class="headTitle">
          Human capital is the <br />
          foundation of societal <br />
          development
        </p>
      </v-col>
      <v-col cols="12" class="py-10 px-md-15 px-5 text-start">
        <p class="text-md-h4 text-h6 font-weight-bold">
          We strive to advance human capital
        </p>
        <p class="text-md-h5 text-body-1 pt-4">
          The name ‘Mahorat’ means Master. The organization's building the
          international Masters - Experts in reaching the organization’s aim
          HRD-Human Resource Development by research-based evidence. We embrace
          the changes toward innovations and constructive dialogue in HRD.
        </p>
      </v-col>
      <v-col cols="12" class="py-5">
        <div>
          <v-img src="../assets/sectionImg.svg"></v-img>
        </div>
      </v-col>
      <v-col cols="12" class="pa-10">
        <p class="project">OUR PROJECTS</p>
      </v-col>
      <v-col cols="12" class="pa-10">
        <v-row>
          <v-col cols="12" md="6"
            ><div><v-img src="../assets/ourProjectImg.svg"></v-img></div
          ></v-col>
          <v-col cols="12" md="6" class="py-10 px-md-15 px-5 text-start">
            <p class="text-md-h4 text-h6 font-weight-bold">
              ETF ‘Torino Process’ project
            </p>
            <p class="text-md-h5 text-body-1 pt-4">
              Mahorat & Management has been cooperating with the European
              Education Foundation since May 2019 within the <br />
              framework of the Torino Process project. It is known that
              Uzbekistan has been participating in the Torino Process since
              <br />
              2010 at the initiative of the European Training Foundation. The
              Torino process monitors political progress every two years,
              allowing partner countries to coordinate and assess their progress
              in vocational education and training reforms.
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-divider class="mx-12"></v-divider>
      <v-col cols="12" class="pa-10">
        <v-row>
          <v-col cols="12" md="6" class="py-10 px-md-15 px-5 text-start">
            <p class="text-md-h4 text-h6 font-weight-bold">
              Journal Research in Adult Learning and Education (RALED)
            </p>
            <p class="text-md-h5 text-body-1 pt-4">
              The Adult Education and Research (RALED) journal encompasses
              lifelong learning, quality assurance and adult learning, in
              accordance with labor market requirements. This includes forms of
              education and upbringing aimed at ensuring the participation of
              adults in society. This journal of research and education is
              published by <br />
              practitioners and researchers in Uzbekistan and can be a resource
              for adult learning and<br />
              education management with the best practice in the world.
              <span @click="information = true" class="toggle"
                >...read more</span
              >
              <span v-if="information">
                RALED aims to provide a medium for informed discussion about the
                principles and practice which determine the methods of social
                capital in society. It also provides a forum for the exchange of
                information and ideas among practitioners and researchers
                worldwide.
                <span @click="information = !information" class="toggle"
                  >show less</span
                ></span
              >
            </p>
          </v-col>
          <v-col cols="12" md="6" class="pt-md-14 pt-5">
            <div>
              <v-img src="../assets/ourProjectImg1.svg"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-divider class="mx-12"></v-divider>

      <v-col cols="12" class="pa-10">
        <v-row>
          <v-col cols="12" md="6"
            ><div><v-img src="../assets/ourProjectImg2.svg"></v-img></div
          ></v-col>
          <v-col cols="12" md="6" class="py-10 px-md-15 px-5 text-start">
            <p class="text-md-h4 text-h6 font-weight-bold">
              Creating a regulatory framework of dual training system
            </p>
            <p class="text-md-h5 text-body-1 pt-4">
              The project ‘Creating an educational and regulatory framework and
              methodological support for the introduction of a dual training
              system in the system of vocational education’ financed by grant
              funds from the government, which is implemented in partnership
              with Uzbekistan Teachers of English Association (UzTEA),
              Mahorat&Management and the Ministry of Higher and Secondary
              Specialized Education is an ongoing project.
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" class="px-10 py-5">
        <v-row>
          <v-col cols="3" class="d-flex align-center justify-center"
            ><p class="grey--text font-weight-bold text-h5 mb-0">
              Our Partners
            </p></v-col
          >
          <v-divider vertical></v-divider>
          <!-- <v-col cols="8">
            <v-carousel>
              <v-carousel-item v-for="(item, i) in items" :key="i">{{
                item.ism
              }}</v-carousel-item>
            </v-carousel>
          </v-col> -->
          <v-col cols="8">
            <span class="d-md-flex d-none justify-space-around align-center">
              <span
                ><v-img
                  width="102"
                  src="https://firebasestorage.googleapis.com/v0/b/mahorat-management.appspot.com/o/M-tech.svg?alt=media&token=96be5352-e34b-4e41-a098-9912d3df6d07"
                ></v-img
              ></span>
              <span
                ><v-img
                  width="102"
                  src="https://firebasestorage.googleapis.com/v0/b/mahorat-management.appspot.com/o/UzTea.svg?alt=media&token=a427aaf5-79b2-476f-bfdc-a8fafde20f24"
                ></v-img
              ></span>
              <span
                ><v-img
                  width="102"
                  src="https://firebasestorage.googleapis.com/v0/b/mahorat-management.appspot.com/o/Raled.svg?alt=media&token=bed6d923-881a-4e57-ba60-84ef91ccb759"
                ></v-img
              ></span>
              <span
                ><v-img
                  width="102"
                  src="https://firebasestorage.googleapis.com/v0/b/mahorat-management.appspot.com/o/ETF.svg?alt=media&token=af759db8-b45a-41de-a5cf-e73d537a6f5c"
                ></v-img
              ></span>
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      information: false,
      items: [
        { ism: "Bexruz" },
        { ism: "Feruz" },
        { ism: "Ferangiz" },
        { ism: "Aziza" },
        { ism: "Xayriddin" },
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
.bgImage {
  width: 100%;
  height: 664px;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/mahorat-management.appspot.com/o/homeBgImg.svg?alt=media&token=fb11d3b5-4845-4f36-98ec-9ad53c8d2ed1");
  background-size: cover;
}
.headTitle {
  color: white;
  font-size: 54px;
  text-align: start;
  font-style: normal;
  font-weight: 600;
  opacity: 0.92;
  line-height: 1.6;
  padding-top: 250px;
  padding-left: 60px;
}
@media (max-width: 768px) {
  .bgImage {
    width: 100%;
    height: 200px;
  }
  .headTitle {
    font-size: 22px;
    line-height: 50px;
    padding-left: 15px;
    padding-top: 12px;
  }
}
.project {
  border-radius: 1px;
  border-top: 6px solid #363df1;
  color: #242424;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  opacity: 0.75;
  padding-top: 20px;
  width: 158px;
}
.toggle {
  cursor: pointer;
  color: #363df1;
}
</style>
