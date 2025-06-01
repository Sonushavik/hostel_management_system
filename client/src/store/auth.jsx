import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState("");
	const authorizationToken = `Bearer ${token}`;
	const storeTokenInLS = (serverToken) => {
		setToken(serverToken);
		return localStorage.setItem("token", serverToken);
	};

	let isLoggedIn = !!token;
	const API = import.meta.env.VITE_APP_URI_API;
	console.log(API)

	const LogoutUser = () => {
		setToken("");
		return localStorage.removeItem("token");
	};

	const userAuthentication = async () => {
		try {
			const response = await fetch(`${API}/api/auth/user`, {
				method: "GET",
				headers: {
					Authorization: authorizationToken,
				},
			});

			if (response.ok) {
				const data = await response.json();
				console.log("user Data", data.userData);
				setUser(data.userData);
			}
		} catch (error) {
			console.error("Error fetching user data");
		}
	};

	useEffect(() => {
		if(token) {
		userAuthentication();
		}
	}, [token]);

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				storeTokenInLS,
				LogoutUser,
				user,
				token,
				API,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const authContextValue = useContext(AuthContext);
	if (!authContextValue) {
		throw new Error("useAuth used outside of the Provider");
	}

	return authContextValue;
};
