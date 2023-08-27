import "./blog_search.css";

function chooseBlog(blogs, setter) {
    const sortDropdown = document.querySelector(".blog_sort_button");
    const sortOption = sortDropdown.options[sortDropdown.selectedIndex].value;
    switch (sortOption) {
        case "Category":
            displayCategoryBlog(blogs, setter,"");
            break;
        case "Web Development":
            displayCategoryBlog(blogs, setter,"Web Development");
            break;
        case "Cyber Security":
            displayCategoryBlog(blogs, setter,"Cyber Security");
            break;
        case "Android Development":
            displayCategoryBlog(blogs, setter,"Android Development");
            break;
        case "UI/UX Design":
            displayCategoryBlog(blogs, setter,"UI/UX Design");
            break;
    }
}

function searchFunction(blogs,e,setter) {
    const input = e.currentTarget;
    const filter = input.value.toUpperCase();
    const filteredBlogs = blogs.filter((blogs) => {
        return (
            blogs.title.toUpperCase().includes(filter) ||
            blogs.description.toUpperCase().includes(filter)
        );
    });
    setter(filteredBlogs);
    console.log(filteredBlogs);
}

function displayCategoryBlog(blogs , setter,title) {
        const sortOption = title;
        const filteredBlogs = blogs.filter((blogs) => {
        return (
            blogs.dept.includes(sortOption)
        );
    });
    setter(filteredBlogs);
}

export default function BlogSearch({ all_blogs ,setter }) {
    return (
    <>
        <div className="blogSearch">
            <div className="searchbar">
                <div className="search">
                    <input
                        type="text"
                        id="searchinput"
                        onChange={(e) => {
                            searchFunction(all_blogs,e,setter);
                        }}
                        placeholder="Search"
                    />
                </div>
            </div>
            <div className="buttons">
                <div className="btnGroup">
                    <span>Filter By: </span>
                    <select
                        className="blog_sort_button"
                        onChange={(e) => {
                            chooseBlog(all_blogs,setter);
                        }}
                    >
                        <option>Category</option>
                        <option>Web Development</option>
                        <option>Cyber Security</option>
                        <option>Android Development</option>
                        <option>Machine Learning</option>
                        <option>UI/UX Design</option>
                    </select>
                </div>
            </div>
        </div>
    </>);
}

// <div className={Styles.blogSearch}>
// <div className={Styles.searchbar}>
//   <div className="search">
//     <input
//       type="text"
//       id="searchinput"
//       onChange={(e) => {
//         searchFunction(all_blogs,e,setter);
//       }}
//       placeholder="Search"
//     />
//   </div>
// </div>
// <div className={Styles.right}>
//   <div className={Styles.buttons}>
//     <div className={Styles.btn_group}>
//       <span style={{color: "#ffffff", fontSize: "14px"}}>Filter By: </span>
//       <select
//   className="blog_sort_button"
//   onChange={(e) => {
//     chooseBlog(all_blogs,setter);
//   }}
// >
//         <option>Category</option>
//         <option>Web Development</option>
//         <option>Cyber Security</option>
//         <option>Android Development</option>
//         <option>Machine Learning</option>
//         <option>UI/UX Design</option>
//       </select>
//     </div>
//   </div>
// </div>
