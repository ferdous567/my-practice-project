
const Category = ({category}) => {
   
    const {logo, category_name, availability} = category;

    return (
        
        <div>
            
            <img src={logo} alt="" />
            <h2>{category_name}</h2>
            <h2>{availability}</h2>
        </div>
    );
};

export default Category;