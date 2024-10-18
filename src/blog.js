var blogs = [
    {
        title: "Blog1",
        date: "10-18-2024",
        description: "first blog entry: I am making this longer to test if the container expands or not. Hopefully it does.",
        image: "../wallpaper1.jpg",
        imageAlt: "nothing yet",
        slug: "https://example.com/blogs/how-to-build-a-react-application-in-2024",
    },
    {
        title: "Blog2",
        date: "10-18-2024",
        description: "second blog entry",
        image: "../wallpaper1.jpg",
        imageAlt: "nothing yet",
        slug: "https://example.com/blogs/how-to-build-a-react-application-in-2024",
    },
    {
        title: "Blog3",
        date: "10-18-2024",
        description: "Third blog entry",
        image: "../wallpaper1.jpg",
        imageAlt: "nothing yet",
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
