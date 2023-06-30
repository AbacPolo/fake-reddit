import './CategoryTag.css';

export function CategoryTag(props) {
  const { category } = props;
  console.log(category);
  return (
    <div className="Tag_Container">
      <p className="Category_Name">{category}</p>
    </div>
  );
}
