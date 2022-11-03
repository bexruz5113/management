<template>
  <div>
    <v-container class="mx-auto">
      <v-row>
        <v-col cols="12" class="py-8 px-5">
          <p class="service">OUR SERVICES</p>
        </v-col>
        <v-col cols="12" md="6" class="border_research">
          <div class="d-md-flex d-block pa-5">
            <div>
              <v-img
                max-width="130"
                class="mx-auto mb-5"
                src="../assets/research 1.svg"
              ></v-img>
            </div>
            <div class="text-start pl-md-5 pl-0">
              <p class="text-h4">Research</p>
              <p class="text-h6 font-weight-regular">
                Conducting social surveys in partnership with local and
                international research institutions on HRD, research and
                analysis in the field of education and labor market.
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="border_learning">
          <div class="d-md-flex d-block pa-5">
            <div>
              <v-img
                max-width="130"
                class="mx-auto mb-5"
                src="../assets/learning 1.svg"
              ></v-img>
            </div>
            <div class="text-start pl-md-5 pl-0">
              <p class="text-h4">Adult Learning</p>
              <p class="text-h6 font-weight-regular">
                Organization and conduct of trainings for adults, including
                continuing professional development programs, advanced training,
                retraining of teachers and managers of educational institutions.
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="border_trans">
          <div class="d-md-flex d-block pa-5">
            <div>
              <v-img
                max-width="130"
                class="mx-auto mb-5"
                src="../assets/translating 1.svg"
              ></v-img>
            </div>
            <div class="text-start pl-md-5 pl-0">
              <p class="text-h4">Translation services</p>
              <p class="text-h6 font-weight-regular">
                Written and oral translations from English into Russian, Uzbek,
                Tajik, Kazakh, Turkmen languages and vice versa.
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="border_organizer">
          <div class="d-md-flex d-block pa-5">
            <div>
              <v-img
                max-width="130"
                class="mx-auto mb-5"
                src="../assets/organizer 1.svg"
              ></v-img>
            </div>
            <div class="text-start pl-md-5 pl-0">
              <p class="text-h4">Event Management</p>
              <p class="text-h6 font-weight-regular">
                Organizing round tables, conferences, webinars, trainings,
                workshops with the officials, professional associations, and
                non-governmental organizations.
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="border_Log">
          <div class="d-md-flex d-block pa-5">
            <div>
              <v-img
                max-width="130"
                class="mx-auto mb-5"
                src="../assets/Group.svg"
              ></v-img>
            </div>
            <div class="text-start pl-md-5 pl-0">
              <p class="text-h4">Logistics</p>
              <p class="text-h6 font-weight-regular">
                Open to provide logistic services for the international and
                local partners. Provision of logistics services, including
                transfers, technical support in organizing trainings, coffee
                breaks, seminars and other events.
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="border_Out">
          <div class="d-md-flex d-block pa-5">
            <div>
              <v-img
                max-width="130"
                class="mx-auto mb-5"
                src="../assets/teacher 1.svg"
              ></v-img>
            </div>
            <div class="text-start pl-md-5 pl-0">
              <p class="text-h4">Logistics</p>
              <p class="text-h6 font-weight-regular">
                Offering following outsourcing services:
              </p>
              <ul>
                <li>Finance management (tax reporting; accounting)</li>
                <li>IT Support</li>
                <li>Data analysis</li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.service {
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
  text-align: start;
}
.border_research,
.border_trans,
.border_Log {
  border-right: 1px solid #c5c7d6;
  border-bottom: 1px solid #c5c7d6;
}
.border_learning,
.border_organizer,
.border_Out {
  border-bottom: 1px solid #c5c7d6;
}
@media (max-width: 768px) {
  .border_research,
  .border_trans,
  .border_Log {
    border-right: none;
    border-bottom: none;
    margin-bottom: 15px;
  }
  .border_learning,
  .border_organizer,
  .border_Out {
    border-bottom: none;
    margin-bottom: 15px;
  }
}
</style>
