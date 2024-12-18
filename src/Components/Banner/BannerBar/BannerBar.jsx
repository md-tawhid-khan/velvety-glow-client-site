

const BannerBar = () => {
    return (
        <div className="navbar bg-pink-200">
  
  <div className="navbar-center  lg:flex mx-auto">
    <ul className="menu menu-horizontal px-1">
      <li><a>All Categories</a></li>
      <li className="z-50">
        <details>
          <summary>Brands</summary>
          <ul className="p-2">
            <li className="bg-gray-200 focus:bg-gray-400 text-pink-400"><a>Armani Beauty</a></li>
            <li className="bg-gray-200 focus:bg-gray-400 text-pink-400"><a>Tom Ford Beauty</a></li>
            <li className="bg-gray-200 focus:bg-gray-400 text-pink-400"><a>Dior</a></li>
            <li className="bg-gray-200 focus:bg-gray-400 text-pink-400"><a>Chanel</a></li>
            <li className="bg-gray-200 focus:bg-gray-400 text-pink-400"><a>La Mer</a></li>
            <li className="bg-gray-200 focus:bg-gray-400 text-pink-400"><a>La Prairie</a></li>
          </ul>
        </details>
      </li>
      <li className="z-50" >
        <details>
          <summary>Products</summary>
          <ul className="p-2">
            <li className="bg-gray-200 focus:bg-gray-400 text-pink-400"><a>Skincare Products</a></li>
            <li className="bg-gray-200 focus:bg-gray-400 text-pink-400"><a>Makeup Products</a></li>
            <li className="bg-gray-200 focus:bg-gray-400 text-pink-400"><a>Haircare Products</a></li>
            <li className="bg-gray-200 focus:bg-gray-400 text-pink-400"><a>Body Care Products</a></li>
            <li className="bg-gray-200 focus:bg-gray-400 text-pink-400"><a>Fragrance</a></li>
            <li className="bg-gray-200 focus:bg-gray-400 text-pink-400"><a>Lifestyle Products</a></li>
            <li className="bg-gray-200 focus:bg-gray-400 text-pink-400"><a>Wellness Products</a></li>
            <li className="bg-gray-200 focus:bg-gray-400 text-pink-400"><a>Beauty Tools</a></li>
          </ul>
        </details>
      </li>
      <li><a>Blog</a></li>
      <li><a>Contact</a></li>
      <li><a>Discount</a></li>
      <li><a>New arrival</a></li>
    </ul>
  </div>
  
</div>
    );
};

export default BannerBar;