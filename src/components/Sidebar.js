import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Close, HistoryRounded } from "@material-ui/icons";
import fire from "../config/fire";

const Sidebar = ({ isOpen, toggle }) => {
	let history = useHistory();

	const logout = async () => {
		try {
			await fire.auth().signOut();
			history.push("/");
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon fontSize="large" />
			</Icon>
			<SidebarMenu>
				{fire.auth().currentUser != null && (
					<>
						<SidebarHeading>
							Welcome {fire.auth().currentUser.displayName}
						</SidebarHeading>
						<SidebarLink to="/orders">My Orders</SidebarLink>
					</>
				)}
				<SidebarLink to="/menu">Full Menu</SidebarLink>
				{fire.auth().currentUser == null && (
					<>
						<SidebarLink to="/service">Our Services</SidebarLink>
						<SidebarLink to="/about">About Us</SidebarLink>
					</>
				)}
			</SidebarMenu>
			<SideBtnWrap>
				<InnerBtnWrap>
					<SidebarRoute to="/plate">My Plate</SidebarRoute>
					{fire.auth().currentUser == null && (
						<SidebarRoute to="/login">Login</SidebarRoute>
					)}
					{fire.auth().currentUser != null && (
						<LogoutButton onClick={logout}>Logout</LogoutButton>
					)}
				</InnerBtnWrap>
			</SideBtnWrap>
		</SidebarContainer>
	);
};

export default Sidebar;

const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 350px;
	height: 100%;
	background: #ffc500;
	display: grid;
	align-items: center;
	top: 0;
	transition: 0.3s ease-in-out;
	right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

	@media screen and (max-width: 400px) {
		width: 100%;
	}
`;

const CloseIcon = styled(Close)`
	color: #000;
`;
const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;
const SidebarMenu = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(3, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(3, 60px);
	}
`;

const SidebarLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: #000;
	cursor: pointer;

	&:hover {
		color: #e31837;
		transition: 0.2s ease-in-out;
	}
`;

const SidebarHeading = styled.h3`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: #000;
`;

const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
`;

const InnerBtnWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const SidebarRoute = styled(Link)`
	background: #e31837;
	white-space: nowrap;
	padding: 16px 64px;
	color: #fff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	margin-bottom: 1rem;
	transition: 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}
`;

const LogoutButton = styled.button`
	background: #e31837;
	white-space: nowrap;
	padding: 16px 64px;
	color: #fff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	margin-bottom: 1rem;
	transition: 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}
`;
