import React, {
	createContext,
	useContext,
	useState,
	PropsWithChildren,
} from "react";

//define type of context
interface AppContextInterface {
	active: string;
	setActive: React.Dispatch<React.SetStateAction<string>>;
}

const ShopContext = createContext<AppContextInterface | null>(null);

export const StateContext = (props: PropsWithChildren<{}>) => {
	const [active, setActive] = useState("Stretching");

	return (
		<ShopContext.Provider
			value={{
				active,
				setActive,
			}}>
			{props.children}
		</ShopContext.Provider>
	);
};

export const useStateContext = () => useContext(ShopContext);
