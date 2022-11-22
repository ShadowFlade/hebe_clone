import * as React from 'react';
import { useRef } from 'react';

type IContext = {
	refs: {
		appRef: null | React.MutableRefObject<HTMLDivElement | null>;
	};
};
const Context = React.createContext<IContext>({ refs: { appRef: null } });

const ContextProvider = ({ children }: { children: JSX.Element }) => {
	const appRef = React.useRef<HTMLDivElement | null>(null);
	const defaultContext = { refs: { appRef } };

	return <Context.Provider value={defaultContext}> {children} </Context.Provider>;
};
export { Context };
export default ContextProvider;
