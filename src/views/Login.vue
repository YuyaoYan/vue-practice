 <template>
  <div>
    <h2>用户登录</h2>
    <div>
      <input type="text" v-model="username" />
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "admin"
    };
  },
  methods: {
    login() {
      var _this = this;
      this.$store
        .dispatch("user/login", { username: this.username })
        .then(() => {
          console.log(_this);
          
          _this.$router.push({
            path: "/home"
          });
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>