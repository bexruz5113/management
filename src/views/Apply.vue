<template>
  <div>
    <v-container class="mx-auto px-6 py-10">
      <v-row>
        <v-col cols="12" md="3" class="text-start pt-5">
          <p class="text-md-h4 text-h5 font-weight-bold">Join us</p>
          <p class="text-subtitle-1">
            Please fill out the application form <br />
            to join <br />
            our Experts team.
          </p>
        </v-col>
        <v-col cols="12" md="9">
          <v-stepper v-model="e6" vertical>
            <v-stepper-step :complete="e6 > 1" step="1">
              Personal Info
            </v-stepper-step>

            <v-stepper-content step="1">
              <v-card light class="mb-12">
                <v-col class="d-flex pa-md-3" cols="12" sm="6">
                  <v-select :items="items" label="Title" outlined></v-select>
                </v-col>
                <v-col cols="12"
                  ><v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        class="px-md-3 px-0"
                        label="First name"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        class="px-md-3"
                        label="Last name"
                        outlined
                      ></v-text-field>
                    </v-col> </v-row
                ></v-col>
                <v-col cols="12"
                  ><v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        class="px-md-3"
                        :rules="emailRules"
                        label="E-mail address"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        class="px-md-3"
                        label="Phone number"
                        outlined
                      ></v-text-field>
                    </v-col> </v-row
                ></v-col>
              </v-card>
              <div class="d-flex justify-end">
                <v-btn color="primary" @click="e6 = 2"> Next </v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2">
              Professional Info
            </v-stepper-step>

            <v-stepper-content step="2">
              <v-card light class="mb-12 pt-4">
                <v-col cols="12"
                  ><v-row>
                    <v-col cols="12" md="6">
                      <v-select
                        class="px-md-3"
                        :items="section"
                        label="Sector"
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-select
                        class="px-md-3"
                        :items="experience"
                        label="Work experience"
                        outlined
                      ></v-select>
                    </v-col> </v-row
                ></v-col>
                <v-col cols="12"
                  ><v-row>
                    <v-col cols="12" md="6">
                      <v-select
                        class="px-md-3"
                        :items="language"
                        label="Spoken language"
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-select
                        class="px-md-3"
                        :items="city"
                        label="Citizenship"
                        outlined
                      ></v-select>
                    </v-col> </v-row
                ></v-col>
                <v-col class="d-flex pa-md-3" cols="12">
                  <div>
                    <p class="text-lg-h6 text-body-2">
                      Preffered project duration
                    </p>
                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        v-for="n in radios"
                        :key="n"
                        :label="n"
                        :value="n"
                      ></v-radio>
                    </v-radio-group>
                  </div>
                </v-col>
              </v-card>
              <div class="d-flex justify-end">
                <v-btn class="" color="primary" @click="e6 = 3"> Next </v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3">
              Attach CV
            </v-stepper-step>

            <v-stepper-content step="3">
              <v-card light class="mb-12 pt-4">
                <v-col cols="12">
                  <v-file-input
                    class="pa-md-10 pa-2"
                    truncate-length="15"
                    label="Choose file"
                  ></v-file-input>
                </v-col>
              </v-card>
              <div class="d-md-flex d-block justify-end py-5">
                <v-btn class="mr-sm-2 mb-sm-0 mb-2" @click="e6 = 2">
                  Previous
                </v-btn>

                <v-btn color="primary" class="px-7" @click="snackbar = true">
                  Submit
                </v-btn>
                <v-snackbar v-model="snackbar" color="success " bottom left>
                  {{ text }}

                  <template v-slot:action="{ attrs }">
                    <v-btn
                      color="gray"
                      text
                      v-bind="attrs"
                      @click="snackbar = false"
                    >
                      x
                    </v-btn>
                  </template>
                </v-snackbar>
              </div>
            </v-stepper-content>
          </v-stepper>
        </v-col>
      </v-row></v-container
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      text: `Successful`,
      e6: 1,
      radioGroup: 1,
      radios: ["Short term", "Long term"],
      section: ["Section 1", "Section 2", "Section 777"],
      experience: [
        "Less than 1 year",
        "More than 1 year",
        "More than 5 years",
        "Less than 5 years",
      ],
      language: ["Russian", "English", "Uzbek"],
      city: [
        "American",
        "Austrian",
        "Bahraini",
        "Belgian",
        "British",
        "Canadian",
        "Chinese",
        "French",
        "Dreek",
        "Uzbek",
        "Russian",
        "Ukrain",
        "Indian",
      ],

      items: ["Dr.", "Professor", "Expert", "Mr.", "Miss.", "Mrs.", "Title 74"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
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
</style>
