import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Recipe Box</h1>
  <h3>Today's Category: {{currentCategory}}</h3>
  <ul>
    <li *ngFor="let currentRecipe of recipes">
      <h3>{{currentRecipe.title}}</h3>
      <p>{{currentRecipe.ingredients}}</p>
      <p>{{currentRecipe.directions}}</p>
    </li>
  </ul>
  `
})

export class AppComponent {
  currentCategory: string = 'Thai';
  recipes: Recipe[] = [
    new Recipe('Tom Ka Gai (Coconut Chicken Soup)', '3/4 pound boneless, skinless chicken meat\nChicken Breasts Boneless\n3 tablespoons vegetable oil\n2 (14 ounce) cans coconut milk\n2 cups water\n2 tablespoons minced fresh ginger root\n4 tablespoons fish sauce\n1/4 cup fresh lime juice\n1/4 teaspoon cayenne pepper\n1/2 teaspoon ground turmeric\n2 tablespoons thinly sliced green onion\n1 tablespoon chopped fresh cilantro', '1) Cut chicken into thin strips and saute in oil for to 2 to 3 minutes until the chicken turns white.\n2) In a pot, bring coconut milk and water to a boil. Reduce heat. Add ginger, fish sauce, lime juice, cayenne powder and turmeric. Simmer until the chicken is done, 10 to 15 minutes.\n3)Sprinkle with scallions and fresh cilantro and serve steaming hot.'),
    new Recipe('Thai Sweet Sticky Rice With Mango (Khao Neeo Mamuang)', '1 1/2 cups uncooked short-grain white rice\n2 cups water\n1 1/2 cups coconut milk\n1 cup white sugar\n1/2 teaspoon salt\n1/2 cup coconut milk\n1 tablespoon white sugar\n1/4 teaspoon salt\n1 tablespoon tapioca starch\n3 mangos, peeled and sliced\n1 tablespoon toasted sesame seeds', '1) Combine the rice and water in a saucepan; bring to a boil; cover and reduce heat to low. Simmer until water is absorbed, 15 to 20 minutes.\n2) While the rice cooks, mix together 1 1/2 cups coconut milk, 1 cup sugar, and 1/2 teaspoon salt in a saucepan over medium heat; bring to a boil; remove from heat and set aside. Stir the cooked rice into the coconut milk mixture; cover. Allow to cool for 1 hour.\n3) Make a sauce by mixing together 1/2 cup coconut milk, 1 tablespoon sugar, 1/4 teaspoon salt, and the tapioca starch in a saucepan; bring to a boil.\n4) Place the sticky rice on a serving dish. Arrange the mangos on top of the rice. Pour the sauce over the mangos and rice. Sprinkle with sesame seeds.'),
    new Recipe('Pad Thai', '1 (12 ounce) package rice noodles\n2 tablespoons butter\n1 pound boneless, skinless chicken breast halves, cut into bite-sized pieces\n1/4 cup vegetable oil\n4 eggs\n1 tablespoon white wine vinegar\n2 tablespoons fish sauce\n3 tablespoons white sugar\n1/8 tablespoon crushed red pepper\n2 cups bean sprouts\n1/4 cup crushed peanuts\n3 green onions, chopped\n1 lemon, cut into wedges', '1)Soak rice noodles in cold water 30 to 50 minutes, or until soft. Drain, and set aside.\n2)Heat butter in a wok or large heavy skillet. Saute chicken until browned. Remove, and set aside. Heat oil in wok over medium-high heat. Crack eggs into hot oil, and cook until firm. Stir in chicken, and cook for 5 minutes. Add softened noodles, and vinegar, fish sauce, sugar and red pepper. Adjust seasonings to taste. Mix while cooking, until noodles are tender. Add bean sprouts, and mix for 3 minutes.')
  ]
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
