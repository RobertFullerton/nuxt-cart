<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const uri = "https://fakestoreapi.com/products/" + id;

//fetching the product by id

const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Sorry... that product is not in our inventory",
    fatal: true
    //fatal forces client side errors to show on page
  });
}

definePageMeta({
  layout: "product",
});
</script>

<style scoped></style>
