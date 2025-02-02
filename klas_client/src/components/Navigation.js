import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function Navigation() {
  const [showCategories, setShowCategories] = useState(false);
  const { userTpye, setUserType } = useContext(UserContext);
  const handleMouseEnter = () => {
    setShowCategories(true);
  };

  const handleMouseLeave = () => {
    setShowCategories(false);
  };
  return (
    <div class="h-full w-full flex flex-col">
      <div class="h-full w-full flex flex-row justify-between bg-white  ">
        <Link
          to="/home"
          class="ml-[5%] flex w-[20%] justify-center h-full text-[20px] items-center"
        >
          <div class="text-[30px]">mini-klas</div>
        </Link>

        <div
          class=" ml-[25%] flex w-[50%] justify-evenly h-full text-[20px] items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div class="flex w-[20%] justify-center rounded-[20px] hover:bg-slate-100 ">
            수강신청
          </div>
          <div class="flex w-[20%] justify-center rounded-[20px] hover:bg-slate-100 ">
            수강관리
          </div>
          <div class="flex w-[20%] justify-center rounded-[20px] hover:bg-slate-100 ">
            학습관리
          </div>
          <div class="flex w-[20%] justify-center rounded-[20px] hover:bg-slate-100 ">
            게시판
          </div>
        </div>
        <div class="mr-[5%] flex w-[20%] justify-center h-full text-[20px] items-center ">
          <div class="flex w-[50%] justify-center rounded-[20px] hover:bg-slate-100 ">
            MY
          </div>
          <Link
            to="/"
            class="flex w-[20%] text-[12px] justify-center rounded-[20px] hover:bg-slate-100 "
            onClick={() => {
              setUserType(0);
            }}
          >
            Logout
          </Link>
        </div>
      </div>
      {showCategories && (
        <div
          class=" absolute w-full flex flex-row h-[150px] bg-white border-[1px] rounded-[3px]  mt-[45px] z-[90]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div class="ml-[5%] flex w-[20%] justify-center h-full text-[20px] items-center"></div>
          <div class="ml-[25%] flex w-[50%] justify-evenly h-full text-[20px] items-center">
            <div class="flex flex-col w-[20%] justify-center "></div>
            <div class="flex flex-col w-[20%] justify-center ">
              <Link
                to="/lecture/plan/list"
                class="rounded-[10px] hover:bg-slate-100"
              >
                강의계획서
              </Link>
              <div>출석체크</div>
              <Link to="/users/grade" class="rounded-[10px] hover:bg-slate-100">
                성적
              </Link>
            </div>
            <div class="flex flex-col w-[20%] justify-center ">
              <div>공지</div>
              <div>자료실</div>
              <div>과제</div>
            </div>
            <div class="flex flex-col w-[20%] justify-center "></div>
          </div>
          <div class="mr-[5%] flex w-[20%] justify-center h-full text-[20px] items-center"></div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
