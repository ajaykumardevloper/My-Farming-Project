
import { DashboardNav } from "../dashboard/DashboardNav";
import { FooterLast } from "../hero/FooterLast";

export default function page() {
  return (
    <>
      <DashboardNav />
      <div className="  absolute w-full">
        <img src="/icons/back.jpg" alt="" className="w-full " />
      </div>
      <div className="mt-14 py-10 relative">
        <div className="">
          <h1 className="font-bold text-4xl text-center">
            MEET <span className="border-b-4 border-green-500">THE</span> TEAM
          </h1>
          <p className="text-center mt-5">
          Meet the dedicated team behind CalmCare Solutions mission to revolutionize mental wellness
          </p>
        </div>
        <div className="grid grid-cols-4 my-10 mx-10 gap-8 m">
          <div className="  rounded-xl">
            <img
              src="/team/1.jpg"
              className="rounded-full h-64 w-64 object-cover drop-shadow-2xl border-2 border-black p-2"
              alt=""
            />
            <h1 className="font-bold text-xl text-center mt-3">Hemasutha</h1>
            <p className="my-3 text-center">CEO and Co-Founder</p>
            <p className="my-1 text-center">
            Leading the charge in redefining mental health care through innovative technology and compassionate leadership.
            </p>
            <div className="grid grid-cols-3 pl-10 items justify-item-center my-6">
              <a href="https://www.facebook.com/profile.php?id=100010343448379/">
                <img
                  src="/icons/face.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/mr_peace_love._//">
                <img
                  src="/icons/instagram.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://wa.me/qr/7XF4CXHS3SRZO1/">
                <img
                  src="/icons/whatsapp.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="  rounded-xl">
            <img
              src="/team/2.jpg"
              className="rounded-full h-64 w-64 object-cover drop-shadow-2xl border-2 border-black p-2"
              alt=""
            />
            <h1 className="font-bold text-xl text-center mt-3">Kalaiselvi</h1>
            <p className="my-3 text-center">Chief Medical Officer</p>
            <p className="my-1 text-center">
            Bringing medical expertise and a deep understanding of mental health to guide the development of effective interventions.
            </p>
            <div className="grid grid-cols-3 pl-10 items justify-item-center my-6">
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/face.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/silent_killer_1206//">
                <img
                  src="/icons/instagram.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://wa.me/qr/7IR7NQBXQ3TML1/">
                <img
                  src="/icons/whatsapp.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="  rounded-xl">
            <img
              src="/team/3.jpeg"
              className="rounded-full h-64 w-64 object-cover drop-shadow-2xl border-2 border-black p-2"
              alt=""
            />
            <h1 className="font-bold text-xl text-center mt-3">Santhoshkumar</h1>
            <p className="my-3 text-center">Lead Data Scientist</p>
            <p className="my-1 text-center">
            Leveraging data analytics and machine learning to uncover insights and enhance the effectiveness of our personalized support.
            </p>
            <div className="grid grid-cols-3 pl-10 items justify-item-center my-6">
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/face.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/stephen.2321//">
                <img
                  src="/icons/instagram.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/whatsapp.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="  rounded-xl">
            <img
              src="/team/4.jpeg"
              className="rounded-full h-64 w-64 object-cover drop-shadow-2xl border-2 border-black p-2"
              alt=""
            />
            <h1 className="font-bold text-xl text-center mt-3">Chithiraiselvi</h1>
            <p className="my-3 text-center">Head of Marketing</p>
            <p className="my-1 text-center">
            Passionate communicator, shaping Farmi's commitment to sustainable agriculture.
            </p>
            <div className="grid grid-cols-3 pl-10 items justify-item-center my-6">
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/face.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/instagram.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/whatsapp.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
