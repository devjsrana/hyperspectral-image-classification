const Navbar = () => {
  return (
    <div className="h-20 w-full sticky top-0 px-4 lg:px-6 py-3 bg-white bg-opacity-90">
      <img
        src="/logo.png"
        alt=""
        className="h-full object-contain relative z-[2] mx-auto"
      />
      {/* <div className="absolute h-full w-full bg-white bg-opacity-50 blur-sm top-0 left-0 z-[1]"></div> */}
    </div>
  );
};

export default Navbar;
