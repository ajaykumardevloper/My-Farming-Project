import { DashboardNav } from "@/app/dashboard/DashboardNav";
import Link from "next/link";

export default function page() {
  return (
    <>
      <DashboardNav />
      <div className="py-20 bg-slate-200">
        <Link href="/videos"><button className="bg-green-500 py-3 px-5 font-semibold text-white  ml-3 rounded-2xl">Back</button></Link>
        <h1 className="font-bold text-3xl text-center">Mindf<span className="border-b-4 border-green-500">ul Moments - Daily Wellness Prac</span>tices</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10 px-10 ">
          <div className="">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/ZToicYcHIOU?si=htUA9FlwyCtCF5wt"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="mt-2 pl-3 font-semibold text-xl">Daily Calm | 10 Minute Mindfulness Meditation | Be Present</h1>
          </div>
          <div className="">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/qzR62JJCMBQ?si=qWWrTSyS6J2WR7p2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="mt-2 pl-3 font-semibold text-xl">All it takes is 10 mindful minutes | Andy Puddicombe | TED</h1>
          </div>
          <div className="">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/Zyeq-4tvmqE?si=V82lG1lifCCJhJ8q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="mt-2 pl-3 font-semibold text-xl">BODY SCAN | Guided Mindfulness Meditation 3 minutes (2022) Stress and Anxiety Release</h1>
          </div>
          <div className="">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/30VMIEmA114?si=2M8Vnx-yMeEyi8R8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="mt-2 pl-3 font-semibold text-xl">The 5-4-3-2-1 Method: A Grounding Exercise to Manage Anxiety</h1>
          </div>
          <div className="">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/2DXqMBXmP8Q?si=w01Fh1GmBq9B8qQO"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="mt-2 pl-3 font-semibold text-xl">The Powerful Release of Letting Go! Guided Meditation</h1>
          </div>
          <div className="">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/inpok4MKVLM?si=51L40T74sygFxUct"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="mt-2 pl-3 font-semibold text-xl">5-Minute Meditation You Can Do Anywhere</h1>
          </div>
          <div className="">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/nJw9-15ncOM?si=CUFeNBhM2axh7jEw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="mt-2 pl-3 font-semibold text-xl">5 Small Habits that Will Change Your Life Forever (Monk Advise) | Buddhism In English</h1>
          </div>
          <div className="">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/_Tqn03eYvBM?si=GxkaHaoAywBP-r-z"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="mt-2 pl-3 font-semibold text-xl">How To Control Your Mind | Buddhism In English</h1>
          </div>
          <div className="">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/godVDNVWeso?si=eR20JWV5rQnxceEh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="mt-2 pl-3 font-semibold text-xl">3 Tips to Become Mentally Strong | Buddhism In English</h1>
          </div>
          <div className="">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/TLKxdTmk-zc?si=_yQThB37YByhVESr"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="mt-2 pl-3 font-semibold text-xl">The Most Eye Opening 10 Minutes Of Your Life | David Goggins</h1>
          </div>
          <div className="">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/84dYijIpWjQ?si=KpSE9iTrG2CXcYqp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="mt-2 pl-3 font-semibold text-xl">How to Build Willpower | David Goggins & Dr. Andrew Huberman</h1>
          </div>
          <div className="">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/9QiE-M1LrZk?si=U_8oZ12BFvmzuPze"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="mt-2 pl-3 font-semibold text-xl">How I Tricked My Brain To Like Doing Hard Things (dopamine detox)</h1>
          </div>
          <div className="">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/P6FORpg0KVo?si=thMYZQSua5RMITmL"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="mt-2 pl-3 font-semibold text-xl">How to Make Learning as Addictive as Social Media | Luis Von Ahn | TED</h1>
          </div>
          
        </div>
      </div>
    </>
  );
}
