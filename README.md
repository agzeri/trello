This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how we achieve this project step by step.<br>
You can find the demo version of this project [here](#).

## Table of Contents

- [Initial commit](#1-initial-commit).
- [Create `List.js` file.](2-create-list-js-file)
- [Create a basic `List` component.](#3-create-a-basic-list-component)
- [Call `List.js` component in `App.js` file.](4-call-list-js-component-in-app-js-file)
- [[`List.js`] Create the header and title element.](5-[-list-js-]-create-the-header-and-title-element)
- [[`List.js`] Create the footer element.](6-[-list-js-]-create-the-footer-element)
- [[`FontAwesome`] Add Font Awesome CDN to `index.html` file.](7-[-fontawesome-]-add-font-awesome-cdn-to-index-html-file)
- [[`List.js`] Create the `Card` basic structure.](8-[-list-js-]-create-the-card-basic-structure)
- [[`Card.js`] Create `Card.js` component and link it into `List.js` file.](9-[-card-js-]-create-card-js-component-and-link-it-into-list-js-file)
- [[`styles`] Add classes and styles to Trello clone.](10-[-styles-]-add-classes-and-styles-to-trello-clone)
- [[`data`] Create fake information.](11-[-data-]-create-fake-information)
- [[`Container.js`] Refactor `List` and `App` components.](12-[-container-js-]-refactor-list-and-app-components)
- [[`React.props`] Make advantage of props to pass data between components.](13-[-react-props-]-make-advantage-of-props-to-pass-data-between-components)

## 1. Initial commit

#### 1.1 Install global on your machine `create-react-app`.
```sh
$ npm install -g create-react-app
```

#### 1.2 Create a project, and named Trello.
```sh
$ create-react-app trello
```

#### 1.3 Run `npm start` inside `Trello` folder and go to `localhost:3000`
```sh
$ cd trello
$ npm start
```

**You can see the changes in this [commit](https://github.com/agzeri/trello-props/commit/12129ec265353cc8c1559f806686ad739780d006).**

## 2. Create `List.js` file.

#### 2.1 Create a `components` folder inside `src`.
```sh
$ mkdir src/components
```

#### 2.2 Create a `List.js` file inside `components` folder.
```sh
$ touch src/components/List.js
```

**You can see the changes in this [commit](https://github.com/agzeri/trello-props/commit/5b99b316e092d62068b077cb2ab8f832b120b672).**

## 3. Create a basic `List` component.

#### 3.1 We are going to add a simple React components to our `List.js` file. Start with the `import` lines.
```js
import React, { Component } from 'react';
```

#### 3.2 Create a basic `render` function that return a `h2` element.
```diff
import React, { Component } from 'react';
+
+ class List extends Component {
+   render() {
+     return <h2>List</h2>
+   }
+ }
```

#### 3.3. Don’t forget to export the React Component.
```diff
import React, { Component } from 'react';

class List extends Component {
  render() {
    return <h2>List</h2>
  }
}

+ export default List;
```

**You can see the changes in this [commit](https://github.com/agzeri/trello-props/commit/5084fb9695bb293cbebd15ccdc55838184fe6139).**

## 4. Call `List.js` component in `App.js` file.

#### 4.1 Import the `List` Component in `App.js`
```diff
+
+ import List from './components/List';
+
```

#### 4.2 Remove all markup from `render` function in `App.js`

#### 4.2 Call the `List` Component in the `render` function.
```diff
class App extends Component {
  render() {
    return (
+     <List />
    );
  }
}
```

**You can see the changes in this [commit](https://github.com/agzeri/trello-props/commit/02113519ff7eed23b99faf9023a5df355fc98662).**

## 5. [`List.js`] Create the header and title element.

#### 5.1 Add the next markup to `src/components/List.js`

```diff
class List extends Component {
  render() {
-   return <h2>List</h2>
+   return (
+     <section>
+       <div className='list'>
+         <header className='list__header'>
+           <h3>Week 3</h3>
+         </header>
+       </div>
+     </section>
+   );
  } 
}
```

###### We are using a `section` element to work as container, and each _list_ from Trello will be rendered using a `<div>` with a `list` class. As we are in `React` we can’t user `class` atttribute to attach a CSS class like in `HTML`, instead of we have to use `className`.
###### Inside the `<div className='list'` we only have a `header` element with a heading tag.

**You can see the changes in this [commit](https://github.com/agzeri/trello-props/commit/85467ebae1cd2a52179fcc395158e929d1e060dc).**

## 6. [`List.js`] Create the footer element.

#### 6.1 Add the below markup to `src/component/List.js`
```diff
class List extends Component {
  render() {
    return (
      <section>
        <div className='list'>
          <header className='list__header'>
            <h3>Week 3</h3>
          </header>
+         <footer>
+           <a href='#'>Add a card...</a>
+         </footer>
        </div>
      </section>
    );
  } 
}
```

**You can see the changes in this [commit](https://github.com/agzeri/trello-props/commit/06c1f0bd0b2cc57006d7a98715ac94f4c643069e).**

## 7. [`FontAwesome`] Add Font Awesome CDN to `index.html` file.

#### 7.1 Find the **Font Awesome** library on some Content Delivery Network (CDN) in Google.
Use this [link](https://www.google.com.mx/search?q=font+awesome+cdn&oq=font+awesome+cdn&aqs=chrome..69i57.2610j0j1&sourceid=chrome&ie=UTF-8).

#### 7.2 Find `Font Awesome · BootstrapCDN by MaxCDN` in results. Normally the first link.
[Font Awesome · BootstrapCDN by MaxCDN](https://www.bootstrapcdn.com/fontawesome/)

#### 7.3 Copy the **Font Awesome CSS** link.
`https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css`

#### 7.4 Go to `public/index.html` and create a valid CSS link.
```diff
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
+ <link rel="stylesheet" href="" />
```

#### 7.5 Paste the CSS link that we copied from `Font Awesome · BootstrapCDN by MaxCDN` in the `href` attribute.
```diff
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
+ <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
```

**You can see the changes in this [commit](https://github.com/agzeri/trello-props/commit/5e28656b31a1934565c71eb2748c5f8bd99befe1).**

## 8. [`List.js`] Create the `Card` basic structure.

#### 8.1 Create a `<div></div>` and add a `list__container` class. We will use the div as container of all lists.
```diff
  <header className='list__header'>
    <h3>Week 3</h3>
  </header>
+ <div className='list__container'></div>
```

#### 8.2 We’ll use an `<article></article>` tag to render each _list_.
```diff
  <header className='list__header'>
    <h3>Week 3</h3>
  </header>
- <div className='list__container'></div>
+ <div className='list__container'>
+   <article></article>
+ </div>
```

#### 8.3 Add an `<h4></h4>` element inside **article**. It will work as the heading title.
```diff
  <header className='list__header'>
    <h3>Week 3</h3>
  </header>
  <div className='list__container'>
-   <article></article>
+   <article>
+     <h4>Week 1 – Monday</h4>
+   </article>
  </div>
```

#### 8.4 To render all cards we’ll use an `<ul></ul>` element.
```diff
  <header className='list__header'>
    <h3>Week 3</h3>
  </header>
  <div className='list__container'>
    <article>
      <h4>Week 1 – Monday</h4>
+     <ul></ul>
    </article>
  </div>
```

#### 8.5 Each `<li></li>` tag will contain the icon (using Font Awesome classes) and the proper text. But first, let’s create the basic structure.
```diff
  <header className='list__header'>
    <h3>Week 3</h3>
  </header>
  <div className='list__container'>
    <article>
      <h4>Week 1 – Monday</h4>
-     <ul></ul>
+     <ul>
+       <li>
+         <i className=''></i>
+       </li>
+     </ul>
    </article>
  </div>
```

#### 8.6 Add `eye`, `bars`, `comment-o`, `paperclip`, `check-square-o` classes to each icon. I mean, create five `<li></li>` tags.
```diff
<ul>
  <li>
+   <i className='fa fa-eye'></i>
  </li>
+ <li>
+   <i className='fa fa-bars'></i>
+ </li>
+ <li>
+   <i className='fa fa-comment-o'></i> 6
+ </li>
+ <li>
+   <i className='fa fa-paperclip'></i> 2
+ </li>
+ <li>
+   <i className='fa fa-check-square-o'></i> 0/14
+ </li>
</ul>
```

#### 8.7 At the end, you should have this markup:
```html
<div className='list__container'>
  <article>
    <h4>Day 1 – Monday</h4>
    <ul>
      <li>
        <i className='fa fa-eye'></i>
      </li>
      <li>
        <i className='fa fa-bars'></i>
      </li>
      <li>
        <i className='fa fa-comment-o'></i> 6
      </li>
      <li>
        <i className='fa fa-paperclip'></i> 2
      </li>
      <li>
        <i className='fa fa-check-square-o'></i> 0/14
      </li>
    </ul>
  </article>
</div>
```

**You can see the changes in this [commit](https://github.com/agzeri/trello-props/commit/b2057b72a25d56a2884a5b460de347915e9e0ceb).**

## 9. [`Card.js`] Create `Card.js` component and link it into `List.js` file.

#### 9.1 Time to refactor our code. We want to split the `Card` markup into another file/component. Create a `Card.js` file in `src/components`
```sh
$ touch src/components/Card.js
```

#### 9.2 Add basic React structure.
```js
import React, { Component } from 'react';

class Card extends Component {}

export default Card;
```

#### 9.3 Cut the `Card` markup from `List.js`
```diff
<div className='list__container'>
- <article>
-   <h4>Day 1 – Monday</h4>
-   <ul>
-     <li>
-       <i className='fa fa-eye'></i>
-     </li>
-     <li>
-       <i className='fa fa-bars'></i>
-     </li>
-     <li>
-       <i className='fa fa-comment-o'></i> 6
-     </li>
-     <li>
-       <i className='fa fa-paperclip'></i> 2
-     </li>
-     <li>
-       <i className='fa fa-check-square-o'></i> 0/14
-     </li>
-   </ul>
- </article>
</div>
```

#### 9.4 Paste the `Card` markup from `List.js` into `Card.js`
```diff
import React, { Component } from 'react';

+class Card extends Component {
+ render() {
+   return (
+     <article>
+       <h4>Day 1 – Monday</h4>
+       <ul>
+         <li>
+           <i className='fa fa-eye'></i>
+         </li>
+         <li>
+           <i className='fa fa-bars'></i>
+         </li>
+         <li>
+           <i className='fa fa-comment-o'></i> 6
+         </li>
+         <li>
+           <i className='fa fa-paperclip'></i> 2
+         </li>
+         <li>
+           <i className='fa fa-check-square-o'></i> 0/14
+         </li>
+       </ul>
+     </article>
+   );
+ }
+}

export default Card;
```

#### 9.5 Import `Card.js` file into `List.js`

```diff
import React, { Component } from 'react';

+import Card from './Card';
+
class List extends Component {
```

#### 9.6 Call the component in the `render` function from `List` Component (`List.js`).
```diff
<div className='list__container'>
+ <Card />
</div>
```

**You can see the changes in this [commit](https://github.com/agzeri/trello-props/commit/1de64a1cba42eb68ad4b1117bbe8bcb6d76ed5d7).**

## 10. [`styles`] Add classes and styles to Trello clone.

#### 10.1 Add the below styles into `src/App.css`. Paste it to the end of file.
```css
.list {
  background-color: #e2e4e6;
  width: 270px;
  border-radius: 3px;
}

.list,
.card {
  padding: 8px 10px;
}

.list__title,
.card__title {
  margin: 0;
}

.card {
  background-color: white;
  margin-bottom: 8px;
  border-radius: 4px;
  border-bottom: 1px solid #CCC;
}

.stats {
  color: #999;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  margin: 6px 0;
  font-size: 12px;
}

.stats li {
  margin: 0 5px;
}

.card__add {
  color: #838c91;
  text-decoration: none;
  display: block;
}

.card__add:hover {
  text-decoration: underline;
}
```

#### 10.2 With those styles we need to add a `class` to `<article></article>` element in `src/components/Card.js`
```diff
class Card extends Component {
  render() {
    return (
+     <article className='card'>
        <h4>Day 1 – Monday</h4>
    );
  }
}
```

#### 10.3 Also, add a `class` to `<h4></h4>` element in `src/components/Card.js`
```diff
class Card extends Component {
  render() {
    return (
      <article className='card'>
+       <h4 className='card__title'>Day 1 – Monday</h4>
    );
  }
}
```

#### 10.4 And, finally add a `class` to `<ul></ul>` element in `src/components/Card.js`
```diff
class Card extends Component {
  render() {
    return (
      <article className='card'>
        <h4 className='card__title'>Day 1 – Monday</h4>
+       <ul className='stats'>
    );
  }
}
```

#### 10.5 In `src/components/List.js`, add a `class` to `<h3></h3>` element
```diff
<section>
  <div className='list__header'>
    <h3>Week 3</h3>
+   <h3 className='list__title'>
  </div>
</section>
```

#### 10.6 And finally, add a `class` to `<a href="#"></a>`
```diff
<footer>
+ <a href='#' className='card__add'>Add a card...</a>
</footer>
```

**You can see the changes in this [commit](https://github.com/agzeri/trello-props/commit/f552b57b728853a0eeaf15f401a3e0814ff4fbcc).**

## 11. [`data`] Create fake information.

#### 11.1 Create a `src/data` folder to store data files.
```sh
$ mkdir src/data
```

#### 11.2 Create a `cards.js` file in `src/data` folder.
```sh
$ touch src/data/cards.js
```

#### 11.3 Add a JS Array full of Objects as elements in `cards.js` file. And export it directly.
```js
export default [];
```

#### 11.4 Add the below information to create a fake data module.
```diff
-export default [];
+export default [
+ {
+   title: 'Week 3',
+   cards: [{
+     title: 'Day 1 - Monday'
+   }, {
+     title: 'Day 2 - Tuesday'
+   }, {
+     title: 'Day 3 - Wednesday'
+   }]
+ }
+];
```

#### 11.5 Import that data into `src/App.js`
```diff
import List from './components/List';
+import data from './data/cards';
```

**You can see the changes in this [commit](https://github.com/agzeri/trello-props/commit/d5465019b6f7472ab31cda5d46ce016fd81ce3bd).**

## 12. [`Container.js`] Refactor `List` and `App` components.

#### 12.1 Create a `Container.js` file in `src/components/`
```sh
$ touch src/components/Container.js
```

#### 12.2 Add the basic structure to render a component
```js
import React, { Component } from 'react';

class Container extends Container {}

export default Container;
```

#### 12.3 Return a `<section></section>` element in the `render` function
```diff
import React, { Component } from 'react';

+class Container extends Container {
+ render() {
+   return (
+     <section></section>
+   );
+ }
+}

export default Container;
```

#### 12.4 Import the `List` component in `Container.js`
```diff
import React, { Component } from 'react';
+
+import List from './List';
+
```

#### 12.5 Call the `List` component imported in `render` function
```diff
class Container extends Container {
  render() {
    return (
+     <section>
+       <List />
+     </section>
    );
  }
}

export default Container;
```

#### 12.5 Refactor `List` component in `List.js`, delete just the `<section></section>` element and re-indent the rest of the code.
```diff
class List extends Component {
  render() {
    return (
-     <section>
        <div className='list'>
          <header className='list__header'>
            <h3 className='list__title'>Week 3</h3>
          </header>
          <div className='list__container'>
            <Card />
          </div>
          <footer>
            <a href='#' className='card__add'>Add a card...</a>
          </footer>
        </div>
-     </section>
    );
  }
}
```

#### 12.6 Change imported component to `Container` instead of `List` in `App.js` file
```diff
import React, { Component } from 'react';

-import List from './components/List';
+import Container from './components/Container';
```

#### 12.7 Call the `Container` component in `render` function
```diff
class App extends Component {
  render() {
    return (
-     <List />
+     <Container />
    );
  }
}
```

**You can see the changes in this [commit](https://github.com/agzeri/trello-props/commit/54ae90b37f62f8ae0273a4ee910ecaeb5ca44e31).**

## 13. [`React.props`] Make advantage of props to pass data between components.

#### 13.1 Create a prop to add it to the `Container` component. Call it `info`.
```diff
class App extends Component {
  render() {
    return (
-     <Container />
+     <Container info={data} />
    );
  }
}
```
#### 13.2 In `Container` component (`Container.js`) access that prop and save it into a variable called `allData`
```diff
 class Container extends Component {
  render() {
+   const allData = this.props.info;
+
```

#### 13.3 Iterate over `allData` variable using `.map` and return a `List` component with each call

#### 13.3.1 Remove <List /> component from code
```diff
return (
  <section>
-   <List />
  </section>
);
```

#### 13.3.2 Add the map iteration
```diff
return (
  <section>
+   {allData.map(function(list) {
+     return <List />
+   })}
  </section>
);
```

#### 13.4 Create a `title` prop in `List` component
```diff
return (
  <section>
    {allData.map(function(list) {
-     return <List />
+     return <List title={list.title} />
    })}
  </section>
);
```

#### 13.5 Change the title to be dynamic in `List.js` component and access it using `this.props` object
```diff
<header className='list__header'>
- <h3 className='list__title'>Week 3</h3>
+ <h3 className='list__title'>{this.props.title}</h3>
</header>
```

#### 13.6 Create a `cards` prop in `List` component and send all _cards_ from `list` object
```diff
return (
  <section>
    {allData.map(function(list) {
-     return <List title={list.title} />
+     return <List title={list.title} cards={list.cards} />
    })}
  </section>
);
```

#### 13.7 Save that prop in `List.js` component using a variable and `this.props`
```diff
   render() {
+    const cards = this.props.cards;
+
```

#### 13.8 Iterate over _cards_ variable and return a `<Card />` component
```diff
<div className='list__container'>
+ {cards.map(function(card) {
+   return <Card />
+ })}
</div>
```

#### 13.9 Send to `<Card />` component the title from each card using a prop.
```diff
<div className='list__container'>
  {cards.map(function(card) {
+   return <Card title={card.title} />
  })}
</div>
```

#### 13.10 Change the value in title from `Card.js` to be dynamic using the `this.props` object 
```diff
<article className='card'>
- <h4 className='card__title'>Day 1 – Monday</h4>
+ <h4 className='card__title'>{this.props.title}</h4>
```

**You can see the changes in this [commit](https://github.com/agzeri/trello-props/commit/a070881d18f85135e5b916a5b5eaf4fd12f9bb80).**
