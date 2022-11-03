<template>
  <div>
    <v-container class="mx-auto px-6">
      <v-row>
        <v-col cols="12" class="text-start py-10">
          <p class="text-md-h4 text-h5 font-weight-bold">
            Contact Mahorat & Management
          </p>
          <p class="text-body-1">We appreciate your interest in us.</p>
        </v-col>
        <v-col cols="12" md="6" lg="4" class="text-start">
          <v-icon x-large color="black" class="mb-4">mdi-phone</v-icon>
          <p class="text-h5">Phone number</p>
          <p class="text-md-h6 text-body-1 font-weight-regular">
            +998 95 195-00-55
          </p>
        </v-col>
        <v-col cols="12" md="6" lg="4" class="text-start my-md-0 my-6"
          ><v-icon x-large color="black" class="mb-4">mdi-email</v-icon>
          <p class="text-h5">Email address</p>
          <div class="mb-4 link">
            <a
              class="text-md-h6 text-body-1 font-weight-regular"
              href="info@mahorat.org"
              >info@mahorat.org</a
            >
          </div>
          <div class="link">
            <a
              class="text-md-h6 text-body-1 font-weight-regular"
              href="mahoratmanagement@gmail.com"
              >mahoratmanagement@gmail.com</a
            >
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="4" class="text-start"
          ><v-icon x-large color="black" class="mb-4">mdi-map-marker</v-icon>
          <p class="text-h5">Address</p>
          <p class="text-md-h6 text-body-1 font-weight-regular">
            Shota Rustavili Street 53B
          </p>
          <p class="text-md-h6 text-body-1 font-weight-regular">
            Tashkent, Uzbekistan 100003
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="mt-10 mb-2">
          <div
            id="map-container-google-3"
            class="z-depth-1-half map-container-3"
          >
            <iframe
              src="https://maps.google.com/maps?q=tashkent&t=k&z=14&ie=UTF8&iwloc=&output=embed"
              frameborder="1"
              style="border: 0"
              allowfullscreen
            ></iframe></div
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.link a {
  color: #000;
}
.link:hover a {
  color: blue;
}
.map-container-3 {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.map-container-3 iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
