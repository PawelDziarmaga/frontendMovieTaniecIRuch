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
	handleClick: (active: string) => void;
}

const ShopContext = createContext<AppContextInterface | null>(null);

export const StateContext = (props: PropsWithChildren<{}>) => {
	const [active, setActive] = useState("");

	const handleClick = function (active: string) {
		const elements = document.getElementsByClassName("category-elements");
		for (let i = 0; i < elements.length; i++) {
			elements[i].classList.remove("active");
		}

		const chosenElement = document.getElementsByClassName(active);
		chosenElement[0]?.classList.add("active");
	};

	return (
		<ShopContext.Provider
			value={{
				active,
				setActive,
				handleClick,
			}}>
			{props.children}
		</ShopContext.Provider>
	);
};

export const useStateContext = () => useContext(ShopContext);
