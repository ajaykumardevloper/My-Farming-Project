import { fullBlog } from "@/app/blogs/lib/interface";
import { client, urlFor } from "@/app/blogs/lib/sanity";
import { DashboardNav } from "@/app/dashboard/DashboardNav";
import { PortableText } from "@portabletext/react";
import { User } from "@nextui-org/react";
import Image from "next/image";
import { FooterLast } from "@/app/hero/FooterLast";
import Link from "next/link";
async function getData(slug: string) {
  const query = `
   *[_type == "blog" && slug.current == '${slug}'] {
    "currentSlug":slug.current,
      title,
      content,
      titleImage
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

  return (
    <>
      <DashboardNav /> 
      <h1 className="mt-[60px] py-5 bg-slate-300 text-3xl font-bold text-center w-full">
        The Blog Page
      </h1>
      <div className=" bg-slate-300  w-full   flex gap-5 ">
        <div className="p-3 bg-white ml-5 rounded-lg shadow-2xl flex flex-auto flex-col mb-10 w-96">
          <h1 className="text-2xl font-semibold uppercase">{data.title}</h1>
          <Image
            src={urlFor(data.titleImage).url()}
            width={700}
            height={500}
            priority
            className="rounded-lg mt-8 border w-full select-none h-[430px]"
            alt={"title image"}
          />
          <div className="mt-5 font-semibold select-none cursor-pointer ">
            <User
              name="Ajay"
              description="Product Designer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            />
          </div>
          <div className="mt-5 w-full prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
            <PortableText value={data.content} />
          </div>
        </div>

        <div className="p-3 bg-white mr-5 rounded-lg shadow-2xl  flex-auto max-w-96 h-[970px]">
          <label htmlFor="">
            <input
              type="text"
              className="border border-black bg-slate-200 mb-3"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </label>

          <h1 className="font-semibold text-lg underline">Recent Post...</h1>
          <div className="flex flex-col gap-5 border my-5">
            <div className="flex gap-4">
              <img
                src="https://validthemes.net/site-template/farmi/assets/img/thumbs/1.jpg"
                className="w-20 h-20"
              />
              <div>
                <h1 className="font-semibold ">
                  Participate in staff meetingness manage dedicated
                </h1>
                <p className=" pt-3 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  <span className="pl-2">12 FEB 2024</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 border my-5">
            <div className="flex gap-4">
              <img
                src="https://validthemes.net/site-template/farmi/assets/img/thumbs/3.jpg"
                className="w-20 h-20"
              />
              <div>
                <h1 className="font-semibold ">
                  Participate in staff meetingness manage dedicated
                </h1>
                <p className=" pt-3 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  <span className="pl-2">12 FEB 2024</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 border my-5">
            <div className="flex gap-4">
              <img
                src="https://validthemes.net/site-template/farmi/assets/img/thumbs/4.jpg"
                className="w-20 h-20"
              />
              <div>
                <h1 className="font-semibold ">
                  Participate in staff meetingness manage dedicated
                </h1>
                <p className=" pt-3 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  <span className="pl-2">12 FEB 2024</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 border my-5">
            <div className="flex gap-4">
              <img
                src="https://validthemes.net/site-template/farmi/assets/img/thumbs/5.jpg"
                className="w-20 h-20"
              />
              <div>
                <h1 className="font-semibold ">
                  Participate in staff meetingness manage dedicated
                </h1>
                <p className=" pt-3 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  <span className="pl-2">12 FEB 2024</span>
                </p>
              </div>
            </div>
          </div>
              <h1 className="font-semibold text-xl mb-4">Gallery...</h1>
          <div className="grid grid-cols-3 gap-3">
            <img src="https://validthemes.net/site-template/farmi/assets/img/thumbs/2.jpg" alt="" className="h-28 w-28"/>
            <img src="https://validthemes.net/site-template/farmi/assets/img/thumbs/2.jpg" alt="" className="h-28 w-28"/>
            <img src="https://validthemes.net/site-template/farmi/assets/img/thumbs/2.jpg" alt="" className="h-28 w-28"/>
            <img src="https://validthemes.net/site-template/farmi/assets/img/thumbs/2.jpg" alt="" className="h-28 w-28"/>
            <img src="https://validthemes.net/site-template/farmi/assets/img/thumbs/2.jpg" alt="" className="h-28 w-28"/>
            <img src="https://validthemes.net/site-template/farmi/assets/img/thumbs/2.jpg" alt="" className="h-28 w-28"/>
            <img src="https://validthemes.net/site-template/farmi/assets/img/thumbs/2.jpg" alt="" className="h-28 w-28"/>
            <img src="https://validthemes.net/site-template/farmi/assets/img/thumbs/2.jpg" alt="" className="h-28 w-28"/>
            <img src="https://validthemes.net/site-template/farmi/assets/img/thumbs/2.jpg" alt="" className="h-28 w-28"/>
          </div>
        </div>
      </div>
      <button className="mt-20 relative left-[90%] mb-10 bg-green-400 px-5 py-2 rounded-xl ">
        <Link href="/blogs">Back</Link>
      </button> 
      <FooterLast/>
    </>
  );
}
