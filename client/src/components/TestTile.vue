<template>
  <div>
    <div class="tile">
      <div class="tile-icon">
        <div class="example-tile-icon">
          <figure class="avatar avatar-xl" data-initial="1">
            <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="...">
          </figure>
        </div>
      </div>
      <div class="tile-content">
        <h4>Introduction to Vue.js</h4>
        <p class="tile-subtitle text-gray">{{description}}</p>
      </div>
      <div class="tile-action">
        <i class="icon icon-bookmark"></i>
      </div>
    </div>
    <!-- <div class="divider text-center" data-content="1"></div> -->
  </div>
</template>

<script>
export default {
  props: ['description'],
};
</script>

<style lang="scss">
.tile {
  padding: 5px 30px;
}

.tile-icon {
  margin-right: 5px;
}

.tile-action {
  // margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>