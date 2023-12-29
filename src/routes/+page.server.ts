import { NILTO_API_KEY } from '$env/static/private';
const apiBase = 'https://cms-api.nilto.com/v1';

type Portfolio = {
	_id: number;
	_model: string;
	_status: string;
	_title: string;
	_created_at: string;
	_updated_at: string;
	_published_at: string;
	title: string;
	thumbnail: {
		url: string;
		alt: string;
	};
	iframe?: string;
	content: string;
};

export const load = async () => {
	const portfolios = (await fetch(`${apiBase}/contents?model=portfolio`, {
		headers: {
			'X-NILTO-API-KEY': NILTO_API_KEY
		}
	}).then((res) => res.json())) as {
		total: number;
		limit: number;
		offset: number;
		data: Portfolio[];
	};

	return {
		portfolios
	};
};
