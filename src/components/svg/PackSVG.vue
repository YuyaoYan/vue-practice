<template>
  <div class="hello">
    <SvgIcon icon-class="QQ"></SvgIcon>
    <SvgIcon icon-class="QQ"></SvgIcon>
  </div>
</template>

<script>
// @ is an alias to /src
import "@/icons/svg/QQ.svg";
import SvgIcon from "@/components/svg/SvgIcon.vue";

export default {
  name: "PackSVG",
  components: { SvgIcon },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
