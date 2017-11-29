export const allCocktailDetails = () => {
    return fetch('http://www.cocktailberater.de/website/cocktail?format=json')
        .then(res => res.json())
        .then(json =>
            json.rsp.cocktails.cocktail
                .filter(
                    cocktail =>
                        cocktail.recipes &&
                        cocktail.recipes.recipe &&
                        cocktail.recipes.recipe.length > 0 &&
                        cocktail.recipes.recipe[0].photos &&
                        cocktail.recipes.recipe[0].photos.photo
                )
                .map(cocktail => ({
                    name: cocktail['@attributes'].name,
                    image: cocktail.recipes.recipe[0].photos.photo.url,
                    price: Math.random() * 22,
                    description:
                        cocktail.recipes.recipe[0]['@attributes'].description,
                }))
                .sort((prev, next) => prev.name.localeCompare(next.name))
        )
}
