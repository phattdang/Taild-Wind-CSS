import productImg from "../../assets/download-Photoroom.png";

export default function Card() {
  return (
    <div className="max-w-md mx-auto flex flex-row justify-center space-x-3">
      <div className="rounded-md p-5 border bg-white border-gray-200 shadow-md card w-64 h-auto flex flex-col items-center space-y-2">
        <img
          className="w-50 h-50 object-cover rounded-md"
          src={productImg}
          alt="cat"
        />
        <p className="text-xl font-semibold">Name: Cat</p>
        <p className="text-sm text-gray-600">
          Description: a cat points its hand on your face
        </p>
      </div>
      <div className="flex flex-col space-y-2 rounded-md w-64 h-auto p-5 border border-gray-200 shadow-md items-center">
        <img
          className="w-50 h-50 object-cover rounded-md"
          src={productImg}
          alt="cat 2"
        />
        <p className="text-xl font-semibold">Name: Cat 2</p>
        <p className="text-sm text-gray-600">
          Description: another cat points on your face lol
        </p>
      </div>
    </div>
  );
}
