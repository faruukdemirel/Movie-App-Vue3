<template>
  <header>
    <router-link to="/">
      <h1><span>Vue</span>Movies</h1>
    </router-link>
  </header>
  <main>
    
     <router-view/>
  </main>
 
</template>

<style>
  #app{
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
  }
  a{
    text-decoration: none;
  }
  header{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    background-color: #80b9f1;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  }
  h1{
    color: #fff;
    font-size: 28px;
  }
  span{
    
    color:#42B883
  }
</style>
