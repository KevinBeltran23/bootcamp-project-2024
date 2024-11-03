import type { Blog } from "@/typings/blog.ts"

const blogs: Blog[] = [
	{
		name: "First Blog Entry",
		posted: "10-18-2024",
		description: "Hey yall. This is my first blog entry. This is mainly for testing stylization and formatting. I have added some generic images for now",
        image: "/genericImage.png",
        imageAlt: "digitally drawn representation of a file",
        slug: "blogs/firstBlog.html",
	},
	{
		name: "A Bit More About Me",
		posted: "10-18-2024",
		description: "Hey yall. There is nothing of significance here yet either. It is simply for testing how multiple blog entries will appear",
        image: "/genericImage.png",
        imageAlt: "digitally drawn representation of a file",
        slug: "blogs/moreAboutMe.html",
	},
	{
		name: "Third Blog Entry",
		posted: "10-18-2024",
		description: "This is yet another blog entry for testing my website. I want to add multiple of these so that I can sample what it will look like when populated.",
        image: "/genericImage.png",
        imageAlt: "digitally drawn representation of a file",
        slug: "https://example.com/blogs/how-to-build-a-react-application-in-2024",
	},
];

export default blogs;