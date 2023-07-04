import { CategoryTag } from "../categoryTag/CategoryTag";
import "./CategoriesDisplay.css";

export function CategoriesDisplay(props) {
  const { defaultCategories, selectedCategories, handleSelectCategory } = props;
  return (
    <div className="Categories_Container">
      <h3>Categories</h3>
      <div className="CategoriesTags_Container">
        {defaultCategories.map((category, index) => (
          <CategoryTag
            key={index}
            category={category}
            selectedCategories={selectedCategories}
            onClick={handleSelectCategory}
          />
        ))}
      </div>
    </div>
  );
}
