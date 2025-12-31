import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center mt-30">
      <ProfileCard />
    </div>
  );
}

const ProfileCard = () => {
  return (
    <div className="h-115.75 w-66 bg-[url('/demon-slayer.jpg')] bg-cover bg-center border-r-5 text-white rounded-xl flex flex-col justify-end border">
      <div className="">
        <div className="h-30.75 w-fit py-5 px-7">
          <h1>Tanjiro Kamado</h1>
          <p>Tanjiro Kamado is a fictional character Demon Slayer.</p>
        </div>

        <div className="flex justify-between items-center p-6">
          <div className="flex gap-1">
            <img src="/user icon.svg" alt="User Icon" />
            <p>10453</p>
          </div>

          <div className="flex gap-1">
            <img src="/project icon.svg" alt="User Icon" />
            <p>105</p>
          </div>

          <button className="bg-white text-black p-2 rounded-xl">
            Follow +
          </button>
        </div>
      </div>
    </div>
  );
};
