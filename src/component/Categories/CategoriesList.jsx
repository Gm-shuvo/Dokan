import React, { useEffect } from "react";
import { useStyles } from "./CategoriesListStyles";


const CatagoriesList = ({categories, handleCategories}) => {
  console.log("🚀 ~ file: CatagoriesList ~ categories", categories)
  const [active, setActive] = React.useState(0);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>CategoriesList</h2>
      <ul className={classes.list}>
        <li className={`${classes.item} ${active === 0 && classes.active}`} onClick={()=>{setActive(0); handleCategories()}}>All Prosucts</li>
        {categories.map((category) => (
          <li
            key={category.id}
            className={`${classes.item} ${active === category.id && classes.active}`}
            onClick={() =>{setActive(category.id); handleCategories(category.slug)}}
          >
            {category.name.replace(/\\/g, "")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatagoriesList;
