<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
//fetch the products from API

const { data: products } = await useFetch("https://fakestoreapi.com/products");

//for learning: here is another way to add meta tags. this on will override data in config
useHead({
  title: "Nust-Cart | Shop",
  meta: [{ name: "description", content: "Buy products from our store here" }],
});

definePageMeta({
  layout: "product",
});
</script>

<style scoped></style>
