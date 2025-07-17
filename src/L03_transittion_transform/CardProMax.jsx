import img from "../assets/download-Photoroom.png";

export default function CardPromax() {
  return (
    <div className="max-w-md h-auto flex flex-row justify-center mx-auto">
      <div className="border border-gray-200 shadow-md shadow-gray-300 p-5 flex flex-col space-y-3 max-w-60 h-auto rounded-md items-center hover:scale-105 transition duration-300">
        <img src={img} className="w-full object-cover rounded-md" alt="cat" />
        <p className="text-lg font-bold">Name: Cat Promax</p>
        <p className="text-sm text-gray-500">
          Description: a cat, crying, a hand covering its mouth, the other hand
          points at your face
        </p>
        <button className="bg-green-500 text-white font-semibold text-lg px-2 py-1 rounded-md hover:bg-green-600 hover:scale-105 transition duration-300">Mua ngay</button>
      </div>
    </div>
  );
}
