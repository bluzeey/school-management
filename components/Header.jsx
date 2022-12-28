import React from "react";

function Header() {
  return (
    <header>
      <nav class="shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        <div class="px-6 w-full flex flex-wrap items-center justify-between">
          <div
            class="collapse grow items-center"
          >
            <ul class=" lg:flex lg:flex-row lg:justify-around">
              <li class="nav-item">
                <a
                  class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  About 
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="student"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Student
                </a>
              </li>
              <li class="nav-item mb-2 lg:mb-0">
                <a
                  class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="teacher"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Teacher
                </a>
              </li>
              <li class="nav-item mb-2 lg:mb-0">
                <a
                  class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="admin"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                 Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
