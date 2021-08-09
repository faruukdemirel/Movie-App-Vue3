<template>
  <div class="home">
    <el-row>
      <el-col :span="20" :offset="2">
        <el-card :body-style="{ padding: '0px' }">
          <router-link to="/movie/tt0409591">
            <img
              src="https://wallpaperaccess.com/full/37952.jpg"
              class="image"
            />
            <div class="detail" style="padding: 14px">
              <h3><span>Interstellar</span></h3>
              <p>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </p>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
              </div>
            </div>
          </router-link>
        </el-card>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :span="20" :offset="2">
        <form @submit.prevent="" class="search">
          <el-input
            placeholder="What are you looking for?"
            v-model="search"
            @keydown.enter="searchMovies"
            clearable
          >
          </el-input>
          <el-button
            class="searchBtn"
            icon="el-icon-search"
            type="primary"         
            @click="searchMovies"
            circle
          ></el-button>
        </form>
      </el-col>

      <el-col :span="2"></el-col>
    </el-row>
    <div class="movies-list" style="margin-top:20px">
      <el-row>
        <el-col
          :span="3"
          v-for="movie in movies"
          :key="movie.imdbID"
          :offset="2"
          style="margin-bottom:15px"
        >
        <router-link :to="'/movie/'+movie.imdbID">
           <el-card :body-style="{ padding: '0px' }">
            <img
              :src="movie.Poster"
              class="image movieImage"
            />
            <div style="padding: 14px">
              <span>{{movie.Title}}</span>
              <div class="bottom" style="margin-top:5px;">
                <time class="time">{{movie.Type}}-{{movie.Year}}</time>             
              </div>
            </div>
          </el-card>
        </router-link>
       
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getData } from "@/common/api.service.js";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      currentDate: new Date(),
      search: "",
      movies: [],
    };
  },
  methods: {
    searchMovies() {
      if (this.search != "") {
        console.log(this.search);
        getData(`s=${this.search}`).then((response) => {
          console.log(response.data.Search);
          this.movies = response.data.Search;
          this.search = "";
        });
      }
    },
  },
};
</script>
<style scoped>
.image {
  display: block;
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: relative;
  z-index: 0;
}
.movieImage{
  height: 300px;
}
.detail {
  position: absolute;
  left: 159px;
  right: 160px;
  bottom: 2px;
  background-color:  rgb(244 241 241 / 51%);
  padding: 16px;
  z-index: 1;
}
.searchBtn {
  position: absolute;
  right: 170px;
  width: 55px;
}
.movies-list{
  margin-top: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-left: 50px;
}
.el-card {
  height: 415px;
}

</style>