// Functions to search for the blog or the content in the blog
function blogsearch(e) {
    const input = e
    const filter = input.value.toUpperCase();
    const filteredBlogs = blogs.filter(blog => {
        return blog.name.toUpperCase().includes(filter);
    });
}

// Function to filter the blogs posted by Technical Department
function filterByTechnical(blogs) {
    filteredBlogs = blogs.filter(blog => blog.department === 'Technical');
    return filteredBlogs
};

// Function to filter the blogs posted by Management Department
function filterByTechnical(blogs) {
    filteredBlogs = blogs.filter(blog => blog.department === 'Management');
    return filteredBlogs
};

// Function to filter the blogs posted by Operations Department
function filterByTechnical(blogs) {
    filteredBlogs = blogs.filter(blog => blog.department === 'Operations');
    return filteredBlogs
};

// Function to filter the blogs posted by Media Department
function filterByTechnical(blogs) {
    filteredBlogs = blogs.filter(blog => blog.department === 'Media');
    return filteredBlogs
};

// Function to filter the blogs posted by Content Department
function filterByTechnical(blogs) {
    filteredBlogs = blogs.filter(blog => blog.department === 'Content');
    return filteredBlogs
};

// Add an Event Listner to filter Dropdown
const filterDropDown = document.querySelector(".button");

filterDropDown.addEventListener("change", ()=> {
    // filterOption will filter the Blogs posted by their Respective Departments from the Dropdown
    // .options returns the collection of all options in the dropdown list
    // .selectedIndex return the index of the selected option in the dropdown list - Index starts from 0
    const filterOption = filterDropDown.options[filterDropDown.selectedIndex].value;
    // Switch case to filter the blogs of the departments
    switch (filterOption) {
        case "Technical":
            filterByTechnical();
            break;
        case "Management":
            filterByManagement();
            break;
        case "Operations":
            filterByOperations();
            break;
        case "Media":
            filterByMedia();
            break;
        case "Content":
            filterByContent();
            break;
        default:
            break;
    }
})