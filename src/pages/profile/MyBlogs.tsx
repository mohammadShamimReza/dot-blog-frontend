function MyBlogs() {
  return (
    <div>
      <div className="max-w-sm  overflow-hidden border rounded-lg">
        <img
          className="w-full"
          src="/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className=" text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex items-center px-6 pt-4 pb-2">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="/img/jonathan.jpg"
          />
          <div className="text-sm">
            <p className=" leading-none">Jonathan Reinink</p>
            <p className="">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBlogs;