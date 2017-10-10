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
      <div class="column col-3 col-mx-auto">
        <div class="panel bg-light list-box container-shadow">
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
          </div>
        </div>
      </div>

      <div class="column col-8">
        <div class="panel list-box bg-light container-shadow">
          <div class="panel-header">
            <div class="panel-title">
              <div class="flexy">
                <h2 class="flx-grow">Awesome : Vue</h2>
                <div class="flx-grow form-group has-icon-right">
                  <input class="form-input" type="text" id="input-example-1" placeholder="Name">
                  <i class="form-icon icon icon-search"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="panel-nav">
            <!-- navigation components: tabs, breadcrumbs or pagination -->
          </div>
          <div class="panel-body" >
            <TestTile v-for="item in items" :key="item.id" :description='item.description' />
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
    console.log(this);
    return {
      msg: 'Welcome to Your Vue.js PWA',
      items: {
        item1: {
          id: 0,
          description: 'Vue.js brings together the best features of the javascript framework landscape elegantly. Build complex and maintainable applications faster!',
        },
        item2: {
          id: 1,
          description: 'Vue.js brings together the best features of the javascript framework landscape elegantly. Build complex and maintainable applications faster!',
        },
        item3: {
          id: 2,
          description: 'Vue.js brings together the best features of the javascript framework landscape elegantly. Build complex and maintainable applications faster!',
        },
        item4: {
          id: 3,
          description: 'Vue.js brings together the best features of the javascript framework landscape elegantly. Build complex and maintainable applications faster!',
        },
        item5: {
          id: 4,
          description: 'Vue.js brings together the best features of the javascript framework landscape elegantly. Build complex and maintainable applications faster!',
        },
        item6: {
          id: 5,
          description: 'Vue.js brings together the best features of the javascript framework landscape elegantly. Build complex and maintainable applications faster!',
        },
      },
    };
  },
  components: { TestCard, TestTile },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.list-box {
  border-radius: 5px;
  border: 1px none transparent;
}

.container-shadow {
  box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
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
  background: #f6f9fc;
}

.flexy {
  display: flex;
}

.flx-grow {
  flex-grow: 1;
}
</style>
