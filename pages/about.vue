<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut
      recusandae vero ducimus amet dolorem magni? Neque animi nam dolor eos
      cupiditate accusamus? Accusamus quam, nulla ab excepturi est eligendi.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/USD");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
