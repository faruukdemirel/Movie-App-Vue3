<template>
  <div class="movie-detail">
    <el-row :gutter="20">
      <el-col :span="18" :offset="4">
        <h2 class="text-center">{{ movie.Title }}</h2>
        <el-tag>{{ movie.Year }}</el-tag>
        <el-tag>{{ movie.Country }}</el-tag>
        <el-tag>{{ movie.Language }}</el-tag>
        <el-tag type="warning">{{ movie.imdbRating }}</el-tag>
        <el-tag type="success">{{ movie.Genre }}</el-tag>
        <img :src="movie.Poster" alt="Movie Poster" class="featured-img" />
        <p>{{ movie.Plot }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getData } from "@/common/api.service.js";
export default {
  name: "MovieDetail",
  data() {
    return {
      movie: {},
    };
  },
  mounted() {
    getData(`i=${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.movie = response.data;
    });
  },
};
</script>

<style scoped>
.movie-detail {
  padding: 16px;
  background-color: #aca9ac;
}
h2 {
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 16px;
}
.featured-img {
  display: block;
  max-width: 200px;
  margin-bottom: 16px;
}
p {
  color: #fff;
  font-size: 18px;
  line-height: 1.4;
}
.el-tag{
    margin-left:5px;
    margin-bottom:10px
}
</style>