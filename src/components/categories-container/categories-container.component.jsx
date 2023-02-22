import "./categories-container.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoriesContainer = ({ categories }) => {
  return (
    <div id="categories-container" className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesContainer;
