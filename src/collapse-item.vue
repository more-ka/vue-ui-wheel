<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">{{title}}</div>
    <div title="content" v-if="open" class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { log } from "util";
export default {
  name: "GuLuCollapseItem",
  props: {
    title: {
      type: String,
      required: false
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      open: false
    };
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", names => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true;
        } else {
          this.open = false;
        }
      });
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus &&
          this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus && this.eventBus.$emit("update:addSelected", this.name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.collapseItem {
  .title {
    border: 1px solid gray;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    background: #87cefa;
  }
  .content {
    padding: 8px;
  }
  &:first-child {
    .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    margin-bottom: -1px;
    .title:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4pxs;
    }
  }
}
</style>