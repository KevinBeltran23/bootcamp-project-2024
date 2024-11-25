import type { Portfolio } from "@/typings/portfolio.ts"

const portfolioEntries: Portfolio[] = [
	{
		name: "Some project ",
		posted: "10-18-2024",
		description: "Going to change this to a project + github link for each of these",
        image: "/genericImage.png",
        imageAlt: "digitally drawn representation of a file",
        slug: "/blogs/firstBlog",
	},
	{
		name: "A Bit More About Me",
		posted: "10-18-2024",
		description: "Hey yall. There is nothing of significance here yet either. It is simply for testing how multiple blog entries will appear",
        image: "/genericImage.png",
        imageAlt: "digitally drawn representation of a file",
        slug: "/blogs/moreAboutMe",
	},
	{
		name: "Third Blog Entry",
		posted: "10-18-2024",
		description: "This is yet another blog entry for testing my website. I want to add multiple of these so that I can sample what it will look like when populated.",
        image: "/genericImage.png",
        imageAlt: "digitally drawn representation of a file",
        slug: "https://example.com/blogs/how-to-build-a-react-application-in-2024", // This one is external
	},
];

export default portfolioEntries;