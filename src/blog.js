var blogs = [
    {
        title: "First Blog Entry",
        date: "10-18-2024",
        description: "Hey yall. This is my first blog entry. This is mainly for testing stylization and formatting. I have added some generic images for now",
        image: "genericImage.png",
        imageAlt: "digitally drawn representation of a file",
        slug: "blogs/firstBlog.html",
    },
    {
        title: "A Bit More About Me",
        date: "10-18-2024",
        description: "Hey yall. There is nothing of significance here yet either. It is simply for testing how multiple blog entries will appear",
        image: "genericImage.png",
        imageAlt: "digitally drawn representation of a file",
        slug: "blogs/moreAboutMe.html",
    },
    {
        title: "Third Blog Entry",
        date: "10-18-2024",
        description: "This is yet another blog entry for testing my website. I want to add multiple of these so that I can sample what it will look like when populated.",
        image: "genericImage.png",
        imageAlt: "digitally drawn representation of a file",
        slug: "https://example.com/blogs/how-to-build-a-react-application-in-2024",
    },
];
document.addEventListener('DOMContentLoaded', function () {
    var blogContainer = document.getElementById('blog-container');
    if (blogContainer) {
        blogs.forEach(function (blog) {
            var blogPostDiv = document.createElement('div');
            blogPostDiv.classList.add('blog-post');
            var titleElement = document.createElement('h1');
            titleElement.textContent = blog.title;
            var imgElement = document.createElement('img');
            imgElement.src = blog.image;
            imgElement.alt = blog.imageAlt;
            var descriptionElement = document.createElement('p');
            descriptionElement.textContent = blog.description;
            var linkElement = document.createElement('a');
            linkElement.href = blog.slug;
            linkElement.textContent = "Read more";
            blogPostDiv.appendChild(titleElement);
            blogPostDiv.appendChild(imgElement);
            blogPostDiv.appendChild(descriptionElement);
            blogPostDiv.appendChild(linkElement);
            blogContainer.appendChild(blogPostDiv);
        });
    }
    else {
        console.error('Blog container not found!');
    }
});
