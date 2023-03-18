<template>
  <div :class="['question', { active: $props.content.id === active }]" @click="clickHandler">
    <img class="image" :src="$props.content.image" :alt="$props.content.heading" />
    <div class="content">
      <h3 class="heading">{{ $props.content.heading }}</h3>
      <p class="description" v-if="$props.content.id === active">
        {{ $props.content.description }}
      </p>
    </div>
    <ArrowSVG class="arrow" />
  </div>
</template>
<script lang="js">
import ArrowSVG from './ArrowSVG.vue'
export default {
  name: 'Question',
  props: {
    content: {
      type: Object,
      reqiured: true
    }
  },
  computed: {
    active() {
      return this.$store.getters.getActiveQuestion
    }
  },
  methods: {
    clickHandler() {
      this.$store.commit('setActiveQuestion', this.$props.content.id)
    }
  },
  components: {ArrowSVG}
}
</script>
<style lang="scss" scoped>
.question {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 12px 0;
  border-bottom: 1px solid #e7ebf0;
  .content {
    padding-top: 6px;
    padding-right: 80px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    .heading {
      font-size: 24px;
      line-height: 28px;
      font-weight: 700;
      color: #2e3a59;
    }
    .description {
      font-size: 16px;
      line-height: 18px;
      font-weight: 400;
      color: #2e3a59;
    }
  }
  .arrow {
    position: absolute;
    right: 0;
    top: 25px;
  }
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    cursor: pointer;
  }
}
.question.active {
  .content {
    .heading {
      color: #00c368;
    }
  }
  .arrow {
    transform: rotate(180deg);
  }
}
@media (max-width: 900px) {
  .question {
    .image {
      display: none;
    }
    .content {
      gap: 14px;
      .heading {
        font-size: 16px;
        line-height: 18px;
      }
      .description {
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
}
</style>
