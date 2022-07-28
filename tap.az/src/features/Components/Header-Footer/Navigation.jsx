import React, { useState, useEffect } from "react";
import { Button, Form, NavItem, NavLink } from "reactstrap";
import { BiCategory, BiSearch } from "react-icons/bi";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { fetchProducts, selectAllProducts } from "../../Redux/products/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const [searchCity, setSearchCity] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const dispatch = useDispatch();
  const allproducts = useSelector(selectAllProducts);
  console.log(allproducts);

  const handleSearch = (e) => {
    allproducts.map((product) => {
      if (product.city === searchCity && product.name === searchProduct) {
        console.log(product);
      } else if (searchProduct) {
        if (product.name.toLowerCase() === searchProduct.toLowerCase()) {
          console.log(product);
        }
      } else if (searchCity) {
        if (product.city.toLowerCase() === searchCity.toLowerCase()) {
          console.log(product);
        }
      }
    });

    e.preventDefault();
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="d-flex flex-column ">
      <div className="topNav mt-2 mb-1 d-flex justify-content-between ">
        <div className="leftSide-nav d-flex">
          <NavItem>
            <NavLink href="https://turbo.az/">Turbo.az</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://bina.az/">Bina.az</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://boss.az/">Boss.az</NavLink>
          </NavItem>
        </div>
        <div className="rightSide-nav d-flex">
          <NavItem>
            <p>Dəstək:(012) 599-08-05</p>
          </NavItem>
          <NavItem>
            <NavLink href="#">Yardım</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Seçilmişlər</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signIn">Giriş</NavLink>
          </NavItem>
        </div>
      </div>

      <div className="bottomNav">
        <Link to="/">
          <h3>tap.az</h3>
        </Link>

        <h6>
          <BiCategory /> Kataloq
        </h6>

        <Form className=" search-form" onSubmit={handleSearch}>
          <input type="text" placeholder="Əşya və ya xidmət axtarışı" className="left-search-input" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} />
          <select name="city" id="city" className="right-search-input" value={searchCity} onChange={(e) => setSearchCity(e.target.value)}>
            <option value=""> Şəhər</option>
            <option value="Bakı">Bakı</option>
            <option value="Gəncə">Gəncə</option>
            <option value="Sumqayıt">Sumqayıt</option>
            <option value="Naxçıvan">Naxçıvan</option>
            <option value="Xankəndi">Xankəndi</option>
            <option value="Xocavənd">Xocavənd</option>
          </select>
          <Button className="search-button" type="submit">
            <BiSearch /> Tap
          </Button>
        </Form>
        <Button className="new_elan">
          <Link to="/addProduct">
            <HiOutlinePlusCircle /> Yeni elan
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
