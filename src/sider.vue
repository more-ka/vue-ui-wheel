<template>
  <transition name="fade">
    <div class="sider" v-if="visible">
      <button @click="visible=false">关闭</button>
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: "GuLuSider",
  data() {
    return {
      visible: true
    };
  }
};
</script>
<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  margin-left: -200px;
}
</style>