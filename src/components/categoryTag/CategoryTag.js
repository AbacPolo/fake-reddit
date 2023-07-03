import classNames from "classnames";
import "./CategoryTag.css";
import { useEffect, useState } from "react";

export function CategoryTag(props) {
  const { category, onClick, preSelectedCategories } = props;
  const [activeTag, setActiveTag] = useState(false);

  useEffect(() => {
    if (preSelectedCategories !== undefined) {
      if (preSelectedCategories.includes(category) === true) {
        setActiveTag(true);
      } else {
        setActiveTag(false)
      }
    }
  }, [preSelectedCategories, category]);

  return (
    <button
      className={classNames("Tag_Container", {
        CategoryTagSelected: activeTag === true,
      })}
      onClick={() => onClick(category)}
    >
      <p className="Category_Name">{category}</p>
    </button>
  );
}
