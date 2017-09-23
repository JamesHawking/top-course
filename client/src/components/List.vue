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
      <div class="column col-4">
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

      <div class="column col-8 col-ml-auto">
        <div class="panel bg-light nav-shadow">
          <div class="panel-header">
            <div class="panel-title">
              <div class="flexy">
                <h2>Awesome : Vue</h2>
                <div class="form-group">
                  <input class="form-input mx-auto" type="text" id="input-example-1" placeholder="Name">
                </div>
              </div>
            </div>
          </div>
          <div class="panel-nav">

            <!-- navigation components: tabs, breadcrumbs or pagination -->
          </div>
          <div class="panel-body">
            <div class="tile">
              <div class="tile-icon">
                <div class="example-tile-icon">
                  <figure class="avatar avatar-xl" data-initial="TH">
                  </figure>
                </div>
              </div>
              <div class="tile-content">
                <h4>Vuetable-2 | Github stars</h4>
                <p class="tile-subtitle text-gray">Data table simplify</p>
                <span class="chip">
                  Crime
                  <a href="#" class="btn btn-clear" aria-label="Close" role="button"></a>
                </span>
                <span class="chip">
                  <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" class="avatar avatar-sm"> Yan Zhu
                  <a href="#" class="btn btn-clear" aria-label="Close" role="button"></a>
                </span>
              </div>
              <div class="tile-action">
                <button class="btn btn-primary">Github</button>
              </div>
            </div>
            <div class="divider text-center" data-content="1"></div>
            <div class="tile">
              <div class="tile-icon">
                <div class="example-tile-icon">
                  <figure class="avatar avatar-xl" data-initial="WB">
                  </figure>
                </div>
              </div>
              <div class="tile-content">
                <p class="tile-title">The Avengers</p>
                <p class="tile-subtitle text-gray">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
              </div>
              <div class="tile-action">
                <button class="btn btn-primary">Join</button>
              </div>
            </div>
            <div class="divider text-center" data-content="2"></div>
            <div class="tile">
              <div class="tile-icon">
                <div class="example-tile-icon">
                  <figure class="avatar avatar-xl" data-initial="DG">
                  </figure>
                </div>
              </div>
              <div class="tile-content">
                <p class="tile-title">The Avengers</p>
                <p class="tile-subtitle text-gray">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
              </div>
              <div class="tile-action">
                <button class="btn btn-primary">Join</button>
              </div>
            </div>
            <div class="divider"></div>
            <div class="tile">
              <div class="tile-icon">
                <div class="example-tile-icon">
                  <figure class="avatar avatar-xl" data-initial="AP">
                  </figure>
                </div>
              </div>
              <div class="tile-content">
                <p class="tile-title">The Avengers</p>
                <p class="tile-subtitle text-gray">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
              </div>
              <div class="tile-action">
                <button class="btn btn-primary">Join</button>
              </div>
            </div>
            <div class="divider"></div>
            <div class="tile">
              <div class="tile-icon">
                <div class="example-tile-icon">
                  <figure class="avatar avatar-xl" data-initial="TH">
                  </figure>
                </div>
              </div>
              <div class="tile-content">
                <p class="tile-title">The Avengers</p>
                <p class="tile-subtitle text-gray">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
              </div>
              <div class="tile-action">
                <button class="btn btn-primary">Join</button>
              </div>
            </div>
            <div class="divider"></div>
          </div>
          <div class="panel-footer">
            <Test/>
            <Test/>
            <Test/>
            <Test/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Test from './TestCard';

export default {
  name: 'list',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
  components: { Test },
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
</style>
