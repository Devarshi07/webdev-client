export default function ListTags() {
    return (
      <div id="wd-lists">
        <h4>List Tags</h4>

        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>

        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
        </ul>
        Common tags covered in this chapter:
        <ul id="wd-ai-html-tags">
          <li>h1 - the largest of the six heading levels</li>
          <li>p - wraps a paragraph and adds vertical spacing</li>
          <li>ol - an ordered list whose items are numbered</li>
          <li>ul - an unordered list whose items are bulleted</li>
          <li>li - a single item inside an ordered or unordered list</li>
          <li>table - arranges content into rows and columns</li>
          <li>span - marks inline text without starting a new line</li>
        </ul>

        <h5>Favorite Recipes - Spaghetti</h5>
        <ol id="wd-your-favorite-recipe">
            <li>Boil spaghetti in salted water until tender</li>
            <li>Drain it, saving a little pasta water</li>
            <li>Heat Marinara sauce in a pan</li>
            <li>Add spaghetti to the sauce and mix well</li>
            <li>Serve with cheese, herbs, or pepper on top</li>
        </ol>

        <h5>Favorite Books</h5>
        <ul id="wd-your-books">
            <li>Harry Potter</li>
            <li>Atomic Habits</li>
            <li>The Alchemist</li>
        </ul>
      </div>
    );
  }