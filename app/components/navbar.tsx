"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

// COMPONENTS
import SearchBar from "./search-bar";

// STYLE
import styles from "./navbar.module.scss";

// ICON
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../statics/constants/cartContext";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { state } = useCartContext();

  return (
    <>
      {pathname !== "/" && <div className="page-top-margin" />}
      <nav id={styles.Navbar}>
        <div>
          <div>
            <Link href={"/shop/kitchen&dining"}>Kitchen & Dining</Link>
          </div>
          <div>
            <Link href={"/shop/living"}>Living</Link>
          </div>
        </div>
        <Link href={"/"}>
          <h1>mogutable.</h1>
        </Link>
        <div>
          <SearchBar />
          <div onClick={() => router.push(`/cart`)}>
            <FiShoppingCart />
            {state.totalQuantity}
          </div>
          <div onClick={() => router.push(`/account/login`)}>
            <FiUser />
          </div>
        </div>
      </nav>
    </>
  );
}
