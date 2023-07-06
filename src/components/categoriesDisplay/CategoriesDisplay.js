import { CategoryTag } from "../categoryTag/CategoryTag";
import "./CategoriesDisplay.css";

export function CategoriesDisplay(props) {
  const { defaultCategories, selectedCategory, handleSelectCategory } = props;
  return (
    <div className="Categories_Container">
      <h3>Categories</h3>
      <div className="CategoriesTags_Container">
        {defaultCategories.map((category, index) => (
          <CategoryTag
            key={index}
            category={category}
            selectedCategory={selectedCategory}
            handleSelectCategory={handleSelectCategory}
          />
        ))}
      </div>
    </div>
  );
}
