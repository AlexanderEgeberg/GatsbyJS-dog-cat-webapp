import {
	useCallback,
	useEffect,
	useState
} from 'react';

const useFetch = <T,>(fetchData: () => Promise<T>, dependencies = []): {
	state?: T,
	handle: () => void,
	error?: unknown,
	loading: boolean,
} => {
	const [state, setState] = useState<T>();
	const [error, setError] = useState<unknown | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const getData = useCallback(fetchData, dependencies);

	const handle = useCallback(async () => {
		setLoading(true);

		try {
			const result = await getData();
			setState(result);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}

		// We don't want to include `initialState` in the
		// As that would make the hook refresh every call
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getData]);

	useEffect(() => {
		handle();
	}, [handle]);

	return {
		state,
		handle,
		error,
		loading
	};
};

export default useFetch;
