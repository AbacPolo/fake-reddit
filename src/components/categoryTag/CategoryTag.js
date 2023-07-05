import classNames from "classnames";
import "./CategoryTag.css";
import { useEffect, useState } from "react";

export function CategoryTag(props) {
  const { category, handleSelectCategory, selectedCategories } = props;
  const [activeTag, setActiveTag] = useState(false);

  useEffect(() => {
    if (selectedCategories !== undefined) {
      if (selectedCategories.includes(category) === true) {
        setActiveTag(true);
      } else {
        setActiveTag(false);
      }
    }
  }, [selectedCategories, category]);

  return (
    <button
      className={classNames("Tag_Container", {
        CategoryTagSelected: activeTag === true,
      })}
      aria-label="Category Button"
      onClick={() => handleSelectCategory(category)}
    >
      <p className="Category_Name">{category}</p>
    </button>
  );
}
