import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography-showcase', template: `
        <section class="section"
                 id="hero">
            <h1 class="title">Hero</h1>
            <hr>

            <section class="hero ">
                <!-- Hero head: will stick at the top -->
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <a class="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png"
                                         alt="Logo">
                                </a>
                                <span class="navbar-burger burger"
                                      data-target="navbarMenuHero1">
              <span></span>
              <span></span>
              <span></span>
            </span>
                            </div>
                            <div id="navbarMenuHero1"
                                 class="navbar-menu">
                                <div class="navbar-end">
                                    <a class="navbar-item is-active">
                                        Home
                                    </a>
                                    <a class="navbar-item">
                                        Examples
                                    </a>
                                    <a class="navbar-item">
                                        Documentation
                                    </a>
                                    <div class="navbar-item has-dropdown is-hoverable">
                                        <div class="navbar-link">
                                            More
                                        </div>
                                        <div id="moreDropdown"
                                             class="navbar-dropdown ">
                                            <a class="navbar-item "
                                               href="#">
                                                <div class="level is-mobile">
                                                    <div class="level-left">
                                                        <div class="level-item">
                                                            <p>
                                                                <strong>Extensions</strong>
                                                                <br>
                                                                <small>Side projects to enhance Bulma</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- Hero content: will be in the middle -->
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title">
                            Title
                        </h1>
                        <h2 class="subtitle">
                            Subtitle
                        </h2>
                    </div>
                </div>
                <!-- Hero footer: will stick at the bottom -->
                <div class="hero-foot">
                    <nav class="tabs">
                        <div class="container">
                            <ul>
                                <li class="is-active">
                                    <a>Overview</a>
                                </li>
                                <li>
                                    <a>Modifiers</a>
                                </li>
                                <li>
                                    <a>Grid</a>
                                </li>
                                <li>
                                    <a>Elements</a>
                                </li>
                                <li>
                                    <a>Components</a>
                                </li>
                                <li>
                                    <a>Layout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <br>

            <section class="hero is-primary">
                <!-- Hero head: will stick at the top -->
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <a class="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png"
                                         alt="Logo">
                                </a>
                                <span class="navbar-burger burger"
                                      data-target="navbarMenuHero2">
              <span></span>
              <span></span>
              <span></span>
            </span>
                            </div>
                            <div id="navbarMenuHero2"
                                 class="navbar-menu">
                                <div class="navbar-end">
                                    <a class="navbar-item is-active">
                                        Home
                                    </a>
                                    <a class="navbar-item">
                                        Examples
                                    </a>
                                    <a class="navbar-item">
                                        Documentation
                                    </a>
                                    <div class="navbar-item has-dropdown is-hoverable">
                                        <div class="navbar-link">
                                            More
                                        </div>
                                        <div id="moreDropdown"
                                             class="navbar-dropdown ">
                                            <a class="navbar-item "
                                               href="#">
                                                <div class="level is-mobile">
                                                    <div class="level-left">
                                                        <div class="level-item">
                                                            <p>
                                                                <strong>Extensions</strong>
                                                                <br>
                                                                <small>Side projects to enhance Bulma</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- Hero content: will be in the middle -->
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title">
                            Title
                        </h1>
                        <h2 class="subtitle">
                            Subtitle
                        </h2>
                    </div>
                </div>
                <!-- Hero footer: will stick at the bottom -->
                <div class="hero-foot">
                    <nav class="tabs">
                        <div class="container">
                            <ul>
                                <li class="is-active">
                                    <a>Overview</a>
                                </li>
                                <li>
                                    <a>Modifiers</a>
                                </li>
                                <li>
                                    <a>Grid</a>
                                </li>
                                <li>
                                    <a>Elements</a>
                                </li>
                                <li>
                                    <a>Components</a>
                                </li>
                                <li>
                                    <a>Layout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <br>

            <section class="hero is-link">
                <!-- Hero head: will stick at the top -->
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <a class="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png"
                                         alt="Logo">
                                </a>
                                <span class="navbar-burger burger"
                                      data-target="navbarMenuHero3">
              <span></span>
              <span></span>
              <span></span>
            </span>
                            </div>
                            <div id="navbarMenuHero3"
                                 class="navbar-menu">
                                <div class="navbar-end">
                                    <a class="navbar-item is-active">
                                        Home
                                    </a>
                                    <a class="navbar-item">
                                        Examples
                                    </a>
                                    <a class="navbar-item">
                                        Documentation
                                    </a>
                                    <div class="navbar-item has-dropdown is-hoverable">
                                        <div class="navbar-link">
                                            More
                                        </div>
                                        <div id="moreDropdown"
                                             class="navbar-dropdown ">
                                            <a class="navbar-item "
                                               href="#">
                                                <div class="level is-mobile">
                                                    <div class="level-left">
                                                        <div class="level-item">
                                                            <p>
                                                                <strong>Extensions</strong>
                                                                <br>
                                                                <small>Side projects to enhance Bulma</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- Hero content: will be in the middle -->
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title">
                            Title
                        </h1>
                        <h2 class="subtitle">
                            Subtitle
                        </h2>
                    </div>
                </div>
                <!-- Hero footer: will stick at the bottom -->
                <div class="hero-foot">
                    <nav class="tabs">
                        <div class="container">
                            <ul>
                                <li class="is-active">
                                    <a>Overview</a>
                                </li>
                                <li>
                                    <a>Modifiers</a>
                                </li>
                                <li>
                                    <a>Grid</a>
                                </li>
                                <li>
                                    <a>Elements</a>
                                </li>
                                <li>
                                    <a>Components</a>
                                </li>
                                <li>
                                    <a>Layout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <br>

            <section class="hero is-info">
                <!-- Hero head: will stick at the top -->
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <a class="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png"
                                         alt="Logo">
                                </a>
                                <span class="navbar-burger burger"
                                      data-target="navbarMenuHero4">
              <span></span>
              <span></span>
              <span></span>
            </span>
                            </div>
                            <div id="navbarMenuHero4"
                                 class="navbar-menu">
                                <div class="navbar-end">
                                    <a class="navbar-item is-active">
                                        Home
                                    </a>
                                    <a class="navbar-item">
                                        Examples
                                    </a>
                                    <a class="navbar-item">
                                        Documentation
                                    </a>
                                    <div class="navbar-item has-dropdown is-hoverable">
                                        <div class="navbar-link">
                                            More
                                        </div>
                                        <div id="moreDropdown"
                                             class="navbar-dropdown ">
                                            <a class="navbar-item "
                                               href="#">
                                                <div class="level is-mobile">
                                                    <div class="level-left">
                                                        <div class="level-item">
                                                            <p>
                                                                <strong>Extensions</strong>
                                                                <br>
                                                                <small>Side projects to enhance Bulma</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- Hero content: will be in the middle -->
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title">
                            Title
                        </h1>
                        <h2 class="subtitle">
                            Subtitle
                        </h2>
                    </div>
                </div>
                <!-- Hero footer: will stick at the bottom -->
                <div class="hero-foot">
                    <nav class="tabs">
                        <div class="container">
                            <ul>
                                <li class="is-active">
                                    <a>Overview</a>
                                </li>
                                <li>
                                    <a>Modifiers</a>
                                </li>
                                <li>
                                    <a>Grid</a>
                                </li>
                                <li>
                                    <a>Elements</a>
                                </li>
                                <li>
                                    <a>Components</a>
                                </li>
                                <li>
                                    <a>Layout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <br>

            <section class="hero is-success">
                <!-- Hero head: will stick at the top -->
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <a class="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png"
                                         alt="Logo">
                                </a>
                                <span class="navbar-burger burger"
                                      data-target="navbarMenuHero5">
              <span></span>
              <span></span>
              <span></span>
            </span>
                            </div>
                            <div id="navbarMenuHero5"
                                 class="navbar-menu">
                                <div class="navbar-end">
                                    <a class="navbar-item is-active">
                                        Home
                                    </a>
                                    <a class="navbar-item">
                                        Examples
                                    </a>
                                    <a class="navbar-item">
                                        Documentation
                                    </a>
                                    <div class="navbar-item has-dropdown is-hoverable">
                                        <div class="navbar-link">
                                            More
                                        </div>
                                        <div id="moreDropdown"
                                             class="navbar-dropdown ">
                                            <a class="navbar-item "
                                               href="#">
                                                <div class="level is-mobile">
                                                    <div class="level-left">
                                                        <div class="level-item">
                                                            <p>
                                                                <strong>Extensions</strong>
                                                                <br>
                                                                <small>Side projects to enhance Bulma</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- Hero content: will be in the middle -->
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title">
                            Title
                        </h1>
                        <h2 class="subtitle">
                            Subtitle
                        </h2>
                    </div>
                </div>
                <!-- Hero footer: will stick at the bottom -->
                <div class="hero-foot">
                    <nav class="tabs">
                        <div class="container">
                            <ul>
                                <li class="is-active">
                                    <a>Overview</a>
                                </li>
                                <li>
                                    <a>Modifiers</a>
                                </li>
                                <li>
                                    <a>Grid</a>
                                </li>
                                <li>
                                    <a>Elements</a>
                                </li>
                                <li>
                                    <a>Components</a>
                                </li>
                                <li>
                                    <a>Layout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <br>

            <section class="hero is-warning">
                <!-- Hero head: will stick at the top -->
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <a class="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png"
                                         alt="Logo">
                                </a>
                                <span class="navbar-burger burger"
                                      data-target="navbarMenuHero6">
              <span></span>
              <span></span>
              <span></span>
            </span>
                            </div>
                            <div id="navbarMenuHero6"
                                 class="navbar-menu">
                                <div class="navbar-end">
                                    <a class="navbar-item is-active">
                                        Home
                                    </a>
                                    <a class="navbar-item">
                                        Examples
                                    </a>
                                    <a class="navbar-item">
                                        Documentation
                                    </a>
                                    <div class="navbar-item has-dropdown is-hoverable">
                                        <div class="navbar-link">
                                            More
                                        </div>
                                        <div id="moreDropdown"
                                             class="navbar-dropdown ">
                                            <a class="navbar-item "
                                               href="#">
                                                <div class="level is-mobile">
                                                    <div class="level-left">
                                                        <div class="level-item">
                                                            <p>
                                                                <strong>Extensions</strong>
                                                                <br>
                                                                <small>Side projects to enhance Bulma</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- Hero content: will be in the middle -->
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title">
                            Title
                        </h1>
                        <h2 class="subtitle">
                            Subtitle
                        </h2>
                    </div>
                </div>
                <!-- Hero footer: will stick at the bottom -->
                <div class="hero-foot">
                    <nav class="tabs">
                        <div class="container">
                            <ul>
                                <li class="is-active">
                                    <a>Overview</a>
                                </li>
                                <li>
                                    <a>Modifiers</a>
                                </li>
                                <li>
                                    <a>Grid</a>
                                </li>
                                <li>
                                    <a>Elements</a>
                                </li>
                                <li>
                                    <a>Components</a>
                                </li>
                                <li>
                                    <a>Layout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <br>

            <section class="hero is-danger">
                <!-- Hero head: will stick at the top -->
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <a class="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png"
                                         alt="Logo">
                                </a>
                                <span class="navbar-burger burger"
                                      data-target="navbarMenuHero7">
              <span></span>
              <span></span>
              <span></span>
            </span>
                            </div>
                            <div id="navbarMenuHero7"
                                 class="navbar-menu">
                                <div class="navbar-end">
                                    <a class="navbar-item is-active">
                                        Home
                                    </a>
                                    <a class="navbar-item">
                                        Examples
                                    </a>
                                    <a class="navbar-item">
                                        Documentation
                                    </a>
                                    <div class="navbar-item has-dropdown is-hoverable">
                                        <div class="navbar-link">
                                            More
                                        </div>
                                        <div id="moreDropdown"
                                             class="navbar-dropdown ">
                                            <a class="navbar-item "
                                               href="#">
                                                <div class="level is-mobile">
                                                    <div class="level-left">
                                                        <div class="level-item">
                                                            <p>
                                                                <strong>Extensions</strong>
                                                                <br>
                                                                <small>Side projects to enhance Bulma</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- Hero content: will be in the middle -->
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title">
                            Title
                        </h1>
                        <h2 class="subtitle">
                            Subtitle
                        </h2>
                    </div>
                </div>
                <!-- Hero footer: will stick at the bottom -->
                <div class="hero-foot">
                    <nav class="tabs">
                        <div class="container">
                            <ul>
                                <li class="is-active">
                                    <a>Overview</a>
                                </li>
                                <li>
                                    <a>Modifiers</a>
                                </li>
                                <li>
                                    <a>Grid</a>
                                </li>
                                <li>
                                    <a>Elements</a>
                                </li>
                                <li>
                                    <a>Components</a>
                                </li>
                                <li>
                                    <a>Layout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <br>

            <section class="hero is-white">
                <!-- Hero head: will stick at the top -->
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <a class="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png"
                                         alt="Logo">
                                </a>
                                <span class="navbar-burger burger"
                                      data-target="navbarMenuHero8">
              <span></span>
              <span></span>
              <span></span>
            </span>
                            </div>
                            <div id="navbarMenuHero8"
                                 class="navbar-menu">
                                <div class="navbar-end">
                                    <a class="navbar-item is-active">
                                        Home
                                    </a>
                                    <a class="navbar-item">
                                        Examples
                                    </a>
                                    <a class="navbar-item">
                                        Documentation
                                    </a>
                                    <div class="navbar-item has-dropdown is-hoverable">
                                        <div class="navbar-link">
                                            More
                                        </div>
                                        <div id="moreDropdown"
                                             class="navbar-dropdown ">
                                            <a class="navbar-item "
                                               href="#">
                                                <div class="level is-mobile">
                                                    <div class="level-left">
                                                        <div class="level-item">
                                                            <p>
                                                                <strong>Extensions</strong>
                                                                <br>
                                                                <small>Side projects to enhance Bulma</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- Hero content: will be in the middle -->
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title">
                            Title
                        </h1>
                        <h2 class="subtitle">
                            Subtitle
                        </h2>
                    </div>
                </div>
                <!-- Hero footer: will stick at the bottom -->
                <div class="hero-foot">
                    <nav class="tabs">
                        <div class="container">
                            <ul>
                                <li class="is-active">
                                    <a>Overview</a>
                                </li>
                                <li>
                                    <a>Modifiers</a>
                                </li>
                                <li>
                                    <a>Grid</a>
                                </li>
                                <li>
                                    <a>Elements</a>
                                </li>
                                <li>
                                    <a>Components</a>
                                </li>
                                <li>
                                    <a>Layout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <br>

            <section class="hero is-black">
                <!-- Hero head: will stick at the top -->
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <a class="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png"
                                         alt="Logo">
                                </a>
                                <span class="navbar-burger burger"
                                      data-target="navbarMenuHero9">
              <span></span>
              <span></span>
              <span></span>
            </span>
                            </div>
                            <div id="navbarMenuHero9"
                                 class="navbar-menu">
                                <div class="navbar-end">
                                    <a class="navbar-item is-active">
                                        Home
                                    </a>
                                    <a class="navbar-item">
                                        Examples
                                    </a>
                                    <a class="navbar-item">
                                        Documentation
                                    </a>
                                    <div class="navbar-item has-dropdown is-hoverable">
                                        <div class="navbar-link">
                                            More
                                        </div>
                                        <div id="moreDropdown"
                                             class="navbar-dropdown ">
                                            <a class="navbar-item "
                                               href="#">
                                                <div class="level is-mobile">
                                                    <div class="level-left">
                                                        <div class="level-item">
                                                            <p>
                                                                <strong>Extensions</strong>
                                                                <br>
                                                                <small>Side projects to enhance Bulma</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- Hero content: will be in the middle -->
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title">
                            Title
                        </h1>
                        <h2 class="subtitle">
                            Subtitle
                        </h2>
                    </div>
                </div>
                <!-- Hero footer: will stick at the bottom -->
                <div class="hero-foot">
                    <nav class="tabs">
                        <div class="container">
                            <ul>
                                <li class="is-active">
                                    <a>Overview</a>
                                </li>
                                <li>
                                    <a>Modifiers</a>
                                </li>
                                <li>
                                    <a>Grid</a>
                                </li>
                                <li>
                                    <a>Elements</a>
                                </li>
                                <li>
                                    <a>Components</a>
                                </li>
                                <li>
                                    <a>Layout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <br>

            <section class="hero is-light">
                <!-- Hero head: will stick at the top -->
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <a class="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png"
                                         alt="Logo">
                                </a>
                                <span class="navbar-burger burger"
                                      data-target="navbarMenuHero10">
              <span></span>
              <span></span>
              <span></span>
            </span>
                            </div>
                            <div id="navbarMenuHero10"
                                 class="navbar-menu">
                                <div class="navbar-end">
                                    <a class="navbar-item is-active">
                                        Home
                                    </a>
                                    <a class="navbar-item">
                                        Examples
                                    </a>
                                    <a class="navbar-item">
                                        Documentation
                                    </a>
                                    <div class="navbar-item has-dropdown is-hoverable">
                                        <div class="navbar-link">
                                            More
                                        </div>
                                        <div id="moreDropdown"
                                             class="navbar-dropdown ">
                                            <a class="navbar-item "
                                               href="#">
                                                <div class="level is-mobile">
                                                    <div class="level-left">
                                                        <div class="level-item">
                                                            <p>
                                                                <strong>Extensions</strong>
                                                                <br>
                                                                <small>Side projects to enhance Bulma</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- Hero content: will be in the middle -->
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title">
                            Title
                        </h1>
                        <h2 class="subtitle">
                            Subtitle
                        </h2>
                    </div>
                </div>
                <!-- Hero footer: will stick at the bottom -->
                <div class="hero-foot">
                    <nav class="tabs">
                        <div class="container">
                            <ul>
                                <li class="is-active">
                                    <a>Overview</a>
                                </li>
                                <li>
                                    <a>Modifiers</a>
                                </li>
                                <li>
                                    <a>Grid</a>
                                </li>
                                <li>
                                    <a>Elements</a>
                                </li>
                                <li>
                                    <a>Components</a>
                                </li>
                                <li>
                                    <a>Layout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <br>

            <section class="hero is-dark">
                <!-- Hero head: will stick at the top -->
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <a class="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png"
                                         alt="Logo">
                                </a>
                                <span class="navbar-burger burger"
                                      data-target="navbarMenuHero11">
              <span></span>
              <span></span>
              <span></span>
            </span>
                            </div>
                            <div id="navbarMenuHero11"
                                 class="navbar-menu">
                                <div class="navbar-end">
                                    <a class="navbar-item is-active">
                                        Home
                                    </a>
                                    <a class="navbar-item">
                                        Examples
                                    </a>
                                    <a class="navbar-item">
                                        Documentation
                                    </a>
                                    <div class="navbar-item has-dropdown is-hoverable">
                                        <div class="navbar-link">
                                            More
                                        </div>
                                        <div id="moreDropdown"
                                             class="navbar-dropdown ">
                                            <a class="navbar-item "
                                               href="#">
                                                <div class="level is-mobile">
                                                    <div class="level-left">
                                                        <div class="level-item">
                                                            <p>
                                                                <strong>Extensions</strong>
                                                                <br>
                                                                <small>Side projects to enhance Bulma</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- Hero content: will be in the middle -->
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title">
                            Title
                        </h1>
                        <h2 class="subtitle">
                            Subtitle
                        </h2>
                    </div>
                </div>
                <!-- Hero footer: will stick at the bottom -->
                <div class="hero-foot">
                    <nav class="tabs">
                        <div class="container">
                            <ul>
                                <li class="is-active">
                                    <a>Overview</a>
                                </li>
                                <li>
                                    <a>Modifiers</a>
                                </li>
                                <li>
                                    <a>Grid</a>
                                </li>
                                <li>
                                    <a>Elements</a>
                                </li>
                                <li>
                                    <a>Components</a>
                                </li>
                                <li>
                                    <a>Layout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <br>

        </section>
  `
})
export class HeroShowcaseComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
