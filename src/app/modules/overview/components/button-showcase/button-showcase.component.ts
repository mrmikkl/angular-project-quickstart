import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography-showcase', template: `
        <section class="section"
                 id="button">
            <h1 class="title"> Button </h1>
            <hr>
            <div class="columns">
                <div class="column">
                    <div class="buttons">
                        <a class="button"> Button </a>
                        <a class="button is-white"> White </a>
                        <a class="button is-light"> Light </a>
                        <a class="button is-dark"> Dark </a>
                        <a class="button is-black"> Black </a>
                        <a class="button is-link"> Link </a>
                        <a class="button is-text"> Link </a>
                    </div>
                    <div class="buttons">
                        <a class="button is-primary"> Primary </a>
                        <a class="button is-info"> Info </a>
                        <a class="button is-success"> Success </a>
                        <a class="button is-warning"> Warning </a>
                        <a class="button is-danger"> Danger </a>
                    </div>
                    <div class="buttons">
                        <a class="button is-focused"> Focus </a>
                        <a class="button is-primary is-focused"> Focus </a>
                        <a class="button is-info is-focused"> Focus </a>
                        <a class="button is-success is-focused"> Focus </a>
                        <a class="button is-warning is-focused"> Focus </a>
                        <a class="button is-danger is-focused"> Focus </a>
                    </div>
                    <div class="buttons">
                        <a class="button is-hovered"> Hover </a>
                        <a class="button is-primary is-hovered"> Hover </a>
                        <a class="button is-info is-hovered"> Hover </a>
                        <a class="button is-success is-hovered"> Hover </a>
                        <a class="button is-warning is-hovered"> Hover </a>
                        <a class="button is-danger is-hovered"> Hover </a>
                    </div>
                    <div class="buttons">
                        <a class="button is-active"> Active </a>
                        <a class="button is-primary is-active"> Active </a>
                        <a class="button is-info is-active"> Active </a>
                        <a class="button is-success is-active"> Active </a>
                        <a class="button is-warning is-active"> Active </a>
                        <a class="button is-danger is-active"> Active </a>
                    </div>
                    <div class="buttons">
                        <a class="button is-loading"> Loading </a>
                        <a class="button is-primary is-loading"> Loading </a>
                        <a class="button is-info is-loading"> Loading </a>
                        <a class="button is-success is-loading"> Loading </a>
                        <a class="button is-warning is-loading"> Loading </a>
                        <a class="button is-danger is-loading"> Loading </a>
                    </div>
                    <p class="field">
                        <a class="button">
          <span class="icon is-small">
            <i class="fas fa-bold"> </i>
          </span>
                        </a>
                        <a class="button">
          <span class="icon is-small">
            <i class="fas fa-italic"> </i>
          </span>
                        </a>
                        <a class="button">
          <span class="icon is-small">
            <i class="fas fa-underline"> </i>
          </span>
                        </a>
                        <a class="button">
          <span class="icon">
            <i class="fab fa-github"> </i>
          </span>
                            <span> GitHub </span>
                        </a>
                        <a class="button is-primary">
          <span class="icon">
            <i class="fab fa-twitter"> </i>
          </span>
                            <span> Twitter </span>
                        </a>
                        <a class="button is-success">
          <span class="icon is-small">
            <i class="fas fa-check"> </i>
          </span>
                            <span> Save </span>
                        </a>
                        <a class="button is-danger is-outlined">
                            <span> Delete </span>
                            <span class="icon is-small">
            <i class="fas fa-times"> </i>
          </span>
                        </a>
                    </p>
                    <div class="field has-addons">
                        <p class="control">
                            <a class="button">
            <span class="icon is-small">
              <i class="fas fa-bold"></i>
            </span>
                                <span>Bold</span>
                            </a>
                        </p>
                        <p class="control">
                            <a class="button">
            <span class="icon is-small">
              <i class="fas fa-italic"></i>
            </span>
                                <span>Italic</span>
                            </a>
                        </p>
                        <p class="control">
                            <a class="button">
            <span class="icon is-small">
              <i class="fas fa-underline"></i>
            </span>
                                <span>Underline</span>
                            </a>
                        </p>
                    </div>

                    <div class="field has-addons">
                        <p class="control">
                            <a class="button">
            <span class="icon is-small">
              <i class="fas fa-align-left"></i>
            </span>
                                <span>Left</span>
                            </a>
                        </p>
                        <p class="control">
                            <a class="button">
            <span class="icon is-small">
              <i class="fas fa-align-center"></i>
            </span>
                                <span>Center</span>
                            </a>
                        </p>
                        <p class="control">
                            <a class="button">
            <span class="icon is-small">
              <i class="fas fa-align-right"></i>
            </span>
                                <span>Right</span>
                            </a>
                        </p>
                    </div>
                    <div class="buttons">
                        <a class="button is-rounded">Rounded</a>
                        <a class="button is-primary is-rounded">Rounded</a>
                        <a class="button is-link is-rounded">Rounded</a>
                        <a class="button is-info is-rounded">Rounded</a>
                        <a class="button is-success is-rounded">Rounded</a>
                        <a class="button is-danger is-rounded">Rounded</a>
                    </div>
                </div>
                <div class="column">
                    <div class="buttons">
                        <a class="button is-small"> Small </a>
                        <a class="button"> Normal </a>
                        <a class="button is-medium"> Medium </a>
                        <a class="button is-large"> Large </a>
                    </div>
                    <div class="buttons">
                        <a class="button is-outlined"> Outlined </a>
                        <a class="button is-primary is-outlined"> Outlined </a>
                        <a class="button is-info is-outlined"> Outlined </a>
                        <a class="button is-success is-outlined"> Outlined </a>
                        <a class="button is-danger is-outlined"> Outlined </a>
                    </div>
                    <div class="buttons notification is-primary">
                        <a class="button is-primary is-inverted is-outlined"> Invert Outlined </a>
                        <a class="button is-info is-inverted is-outlined"> Invert Outlined </a>
                        <a class="button is-success is-inverted is-outlined"> Invert Outlined </a>
                        <a class="button is-danger is-inverted is-outlined"> Invert Outlined </a>
                    </div>
                    <div class="buttons notification is-primary">
                        <a class="button is-primary is-inverted"> Inverted </a>
                        <a class="button is-info is-inverted"> Inverted </a>
                        <a class="button is-success is-inverted"> Inverted </a>
                        <a class="button is-danger is-inverted"> Inverted </a>
                    </div>
                    <p class="buttons">
                        <a class="button is-small">
          <span class="icon is-small">
            <i class="fab fa-github"> </i>
          </span>
                            <span> GitHub </span>
                        </a>
                        <a class="button">
          <span class="icon">
            <i class="fab fa-github"> </i>
          </span>
                            <span> GitHub </span>
                        </a>
                        <a class="button is-medium">
          <span class="icon">
            <i class="fab fa-github"> </i>
          </span>
                            <span> GitHub </span>
                        </a>
                        <a class="button is-large">
          <span class="icon is-medium">
            <i class="fab fa-github"> </i>
          </span>
                            <span> GitHub </span>
                        </a>
                    </p>
                    <p class="field">
                        <a class="button is-small">
          <span class="icon is-small">
            <i class="fas fa-heading"> </i>
          </span>
                        </a>
                    </p>
                    <p class="field">
                        <a class="button">
          <span class="icon is-small">
            <i class="fas fa-heading"> </i>
          </span>
                        </a>
                        <a class="button">
          <span class="icon">
            <i class="fas fa-heading fa-lg"> </i>
          </span>
                        </a>
                    </p>
                    <p class="field">
                        <a class="button is-medium">
          <span class="icon is-small">
            <i class="fas fa-heading"> </i>
          </span>
                        </a>
                        <a class="button is-medium">
          <span class="icon">
            <i class="fas fa-heading fa-lg"> </i>
          </span>
                        </a>
                        <a class="button is-medium">
          <span class="icon is-medium">
            <i class="fas fa-heading fa-2x"> </i>
          </span>
                        </a>
                    </p>
                    <p class="field">
                        <a class="button is-large">
          <span class="icon is-small">
            <i class="fas fa-heading"> </i>
          </span>
                        </a>
                        <a class="button is-large">
          <span class="icon is-medium">
            <i class="fas fa-heading fa-lg"> </i>
          </span>
                        </a>
                        <a class="button is-large">
          <span class="icon is-large">
            <i class="fas fa-heading fa-2x"> </i>
          </span>
                        </a>
                    </p>
                </div>
            </div>
        </section>
  `
})
export class ButtonShowcaseComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
