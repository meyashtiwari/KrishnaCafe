import React, { useEffect, useState, createContext } from "react";
import fire from "../config/fire";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		fire.auth().onAuthStateChanged(setCurrentUser);
	}, []);

	return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
