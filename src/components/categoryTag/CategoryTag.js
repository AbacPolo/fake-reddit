import classNames from "classnames";
import "./CategoryTag.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function CategoryTag(props) {
  const { category, handleSelectCategory, selectedCategory } = props;
  const [activeTag, setActiveTag] = useState(false);

  useEffect(() => {
    if (selectedCategory !== undefined) {
      if (selectedCategory.includes(category) === true) {
        setActiveTag(true);
      } else {
        setActiveTag(false);
      }
    }
  }, [selectedCategory, category]);

  return (
    <Link to="/">
      <button
        className={classNames("Tag_Container", {
          CategoryTagSelected: activeTag === true,
        })}
        aria-label="Category Button"
        onClick={() => handleSelectCategory(category)}
      >
        <p className="Category_Name">{category}</p>
      </button>
    </Link>
  );
}
