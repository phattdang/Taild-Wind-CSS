export default function L1() {
  return (
    <div className="container flex flex-col items-center-safe gap-5 sm:flex-row sm:justify-center-safe">
      <button disabled className="focus:ring-2  focus:ring-black hover:bg-blue-700 disabled:bg-blue-100 bg-blue-500 text-white rounded-sm px-3 py-1">Nhỏ</button>
      <button className="focus:ring-2  focus:ring-black hover:bg-blue-700 bg-blue-500 text-white rounded-sm px-3 py-1">Trung bình</button>
      <button className="focus:ring-2  focus:ring-black hover:bg-blue-700 bg-blue-500 text-white rounded-sm px-3 py-1">Lớn</button>
    </div>
  );
}
