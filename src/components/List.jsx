// import Link from "next/link"

const List =({title, thumbnail, description, warrantyInformation,category, price,discountPercentage, id})=>{
    return(<div  className="border">
        <div className="title">{title}</div>
        <h3 className="description">{description}</h3>
        {/* <div className="warrantyInformation">{warrantyInformation}</div> */}
        <div className="category">{category}</div>
        <div>{id}</div>
        {/* <div className="price">{price}</div> */}
        <img className="thumbnail" src={thumbnail} />
        {/* <div>{discountPercentage}</div> */}
    </div>)
}
export default List


