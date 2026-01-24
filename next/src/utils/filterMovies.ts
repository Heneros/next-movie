import { MovieItem } from '../interfaces/itemMovie';

export function filterItems(
    movies: MovieItem[],
    selectedCategories: string[],
) {
    let res = movies.slice();

    if (selectedCategories && selectedCategories.length > 0) {
        res = res.filter((m) =>
            selectedCategories.every((cat) => m.category.includes(cat)),
        );
    }
    return res;
}
