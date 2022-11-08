import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import useTheme from "@lib/hooks/useTheme";
import SidebarLayout from "@components/common/SidebarLayout";
import { useUI, Collapse } from "@components/ui";
import Avatar from "../Avatar";

const MobileNavbar: FC = () => {
  const theme = useTheme();
  const { closeSidebar, setSidebarView, setModalView, openModal } = useUI();

  const _handleClose = () => closeSidebar();

  return (
    <SidebarLayout handleClose={_handleClose}>
      <div className="_container flex-1 px-4 flex flex-col">
        {/* Profile */}
        <div className="menu_profile mb-10">
          <Row className="menu_avator items-center mb-5">
            <button
              onClick={() => {
                setModalView("LOGIN_VIEW");
                openModal();
              }}
              className="flex justify-center items-center"
            >
              {false && (
                <div
                  className="w-12 h-12 border-2 rounded-full mr-4"
                  style={{ backgroundColor: theme.gray_primary }}
                />
              )}
              {true && <Avatar className="w-12 h-12 mr-4" />}
            </button>
            <div className="">
              <p>Someone</p>
            </div>
          </Row>
          <Row className="menu_order justify-around space-x-3">
            <ProgressWrapper>
              <Col className="justify-center items-center text-center">
                <span className="text-lg font-bold">0</span>
                <div className="text-xs">
                  <span className="block">Completed</span>
                  <span className="block">Orders</span>
                </div>
              </Col>
            </ProgressWrapper>
            <ProgressWrapper>
              <Col className="justify-center items-center text-center">
                <span className="text-lg font-bold">0</span>
                <div className="text-xs">
                  <span className="block">Delivery in</span>
                  <span className="block">Progress</span>
                </div>
              </Col>
            </ProgressWrapper>
            <ProgressWrapper>
              <Col className="justify-center items-center text-center">
                <span className="text-lg font-bold">0</span>
                <div className="text-xs">
                  <span className="block">Delivery</span>
                  <span className="block">Completed</span>
                </div>
              </Col>
            </ProgressWrapper>
          </Row>
        </div>
        {/* Menu */}
        <div className="menu_collapsible h-[60vh] max-h-[60vh] overflow-y-scroll">
          <Collapse title="Store">
            <ul>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>Outer</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>Top</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>Bottom</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>Bag</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>Shose</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>Acceesries</span>
                </a>
              </li>
            </ul>
          </Collapse>
          <Collapse title="New Arrivals">
            <ul>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>1</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>2</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>3</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>4</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>5</span>
                </a>
              </li>
            </ul>
          </Collapse>
          <Collapse title="Fallowing">
            <ul>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>A</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>B</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>C</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>D</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>E</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>F</span>
                </a>
              </li>
            </ul>
          </Collapse>
          <Collapse title="Brand">
            <ul>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>Outer</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>Top</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>Bottom</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>Bag</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>Shose</span>
                </a>
              </li>
              <li className="py-1">
                <a className="cursor-pointer">
                  <span>Acceesries</span>
                </a>
              </li>
            </ul>
          </Collapse>
          <Collapse title="And more...">more features will coming...</Collapse>
        </div>
        {/*  */}
        <div className="h-[8vh] flex items-center justify-around my-10">
          <div>insta</div>
          <div>facebook</div>
          <div>youtube</div>
          <div>email</div>
          <div>call</div>
        </div>
      </div>
    </SidebarLayout>
  );
};
export default MobileNavbar;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProgressWrapper = styled.a`
  ${tw`flex-1 px-2 py-5 shadow-md cursor-pointer rounded-sm`}
`;
