import img from "../assets/logo.png";

export default function NavigationBar() {
  return (
    <div className="nav flex flex-row justify-between items-center bg-gray-700 text-white text-base px-6 py-2">
      <a href="#">
        <img
          className="h-10 w-10 object-cover rounded-full"
          src={img}
          alt="logo"
        />
      </a>
      <ul className="flex flex-row space-x-5">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
}
