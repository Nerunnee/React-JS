import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center mt-30 gap-4">
      <ProfileCard
        img="/Tanjiro.jpg"
        name="Tanjiro Kamado"
        desc="Tanjiro Kamado is a fictional character in Demon Slayer."
        num1={10453}
        num2={105}
      />
      <ProfileCard
        img="/Nezuko.png"
        name="Nezuko Kamado"
        desc="Nezuko Kamado is a fictional character in Demon Slayer."
        num1={9879}
        num2={104}
      />
      <ProfileCard
        img="/Zenitsu.png"
        name="Zenitsu Agatsuma"
        desc="Zenitsu Agatsuma is a fictional character in Demon Slayer."
        num1={10204}
        num2={100}
      />
      <ProfileCard
        img="/Inosuke.png"
        name="Inosuke Hashibira"
        desc="Inosuke Hashibira is a fictional character in Demon Slayer."
        num1={10105}
        num2={101}
      />
    </div>
  );
}

const ProfileCard = (props) => {
  return (
    <div
      className="h-115.75 w-66 bg-cover bg-center border-r-5 text-white rounded-xl flex flex-col justify-end border-6 border-red-950 hover:border-cyan-800"
      style={{ backgroundImage: `url('${props.img}')` }}
    >
      <div className="h-47.75 w-64.5 bg-gray-600 blur-3xl absolute"></div>
      <div className="h-30.75 w-fit py-5 px-7 relative">
        <h1 className="uppercase">{props.name}</h1>
        <p>{props.desc}</p>
      </div>

      <div className="flex justify-between items-center p-6 relative">
        <div className="flex gap-1">
          <img src="/user icon.svg" alt="User Icon" />
          <p>{props.num1}</p>
        </div>

        <div className="flex gap-1">
          <img src="/project icon.svg" alt="User Icon" />
          <p>{props.num2}</p>
        </div>

        <button className="bg-white text-black p-2 rounded-xl">Follow +</button>
      </div>
    </div>
  );
};
