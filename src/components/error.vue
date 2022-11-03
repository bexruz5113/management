<template>
  <div>
    <v-container class="mx-auto my-md-10 my-5 px-4">
      <v-row class="my-md-10 my-5">
        <v-col cols="12" md="6"
          ><img
            style="width: 100%; max-width: 450px"
            src="../assets/error.png"
            alt=""
        /></v-col>
        <v-col cols="12" md="6" class="py-md-12 py-3"
          ><p class="text-md-h3 text-sm-h4 text-h5 font-weight-black">
            404 - Page Not Found
          </p>
          <p class="text-sm-body-2">
            Whoops! Sorry, but this page doesn't exist.
          </p>
          <br />
          <p class="text-sm-body-2">
            Why not use the links above or search to find what you're looking
            for? Alternatively, you could go back to where you were or start
            again from the <router-link to="/"> home page.</router-link>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
