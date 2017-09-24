<template>
  <div class="container">
    <ul class="breadcrumb breacrumb-bg" style="margin-top: 12px;">
      <li class="breadcrumb-item">
        <a href="#">Home</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">JavaScript</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">Vue</a>
      </li>
    </ul>
    <div class="columns" style="margin-top: 12px;">
      <div class="column col-3">
        <div class="panel bg-light list-box">
          <div class="panel-header">
            <div class="panel-title">
              <h2>Awesome : Vue</h2>
            </div>
          </div>
          <div class="panel-nav">
            <!-- navigation components: tabs, breadcrumbs or pagination -->
          </div>
          <div class="panel-body">
            <ul class="nav">
              <li class="nav-item">
                <a href="#">Elements</a>
              </li>
              <li class="nav-item active">
                <a href="#">Layout</a>
                <ul class="nav">
                  <li class="nav-item">
                    <a href="#">Flexbox grid</a>
                  </li>
                  <li class="nav-item">
                    <a href="#">Responsive</a>
                  </li>
                  <li class="nav-item">
                    <a href="#">Navbar</a>
                  </li>
                  <li class="nav-item">
                    <a href="#">Empty states</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#">Components</a>
              </li>
              <li class="nav-item">
                <a href="#">Utilities</a>
              </li>
            </ul>
            <div class="divider"></div>
            <div class="form-group" style="margin-top: 24px;">
              <select class="form-select">
                <option>Choose an option</option>
                <option>Slack</option>
                <option>Skype</option>
                <option>Hipchat</option>
              </select>
            </div>
          </div>
          <div class="panel-footer">
            asd
          </div>
        </div>
      </div>

      <div class="column col-9 col-ml-auto">
        <div class="panel bg-light nav-shadow">
          <div class="panel-header">
            <div class="panel-title">
              <div class="flexy">
                <h2 class="flx-grow">Awesome : Vue</h2>
                <div class="form-group">
                  <input class="form-input" type="text" id="input-example-1" placeholder="Name">
                </div>
              </div>
            </div>
          </div>
          <div class="panel-nav">

            <!-- navigation components: tabs, breadcrumbs or pagination -->
          </div>
          <div class="panel-body">
            <TestCard/>
            <TestCard/>
            <TestCard/>
            <TestCard/>
            <TestTile/>
          </div>
          <div class="panel-footer">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import TestCard from './TestCard';
import TestTile from './TestTile';

export default {
  name: 'list',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
  components: { TestCard, TestTile },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.list-box {
  border: 1px solid #f4f4f4;
  border-radius: 5px;
  box-shadow: 2px 2px 40px -12px #999;
}

.image {
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
}

.divider-vert[data-content]::after,
.divider[data-content]::after {
  background: #f8f9fa;
}

.breacrumb-bg {
  background: #ffffff;
}

.flexy {
  display: flex;
}

.flx-grow {
  flex-grow: 1;
}
</style>
