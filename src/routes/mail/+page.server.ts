import type { PageServerLoad, Actions } from './$types.js';

export const load: PageServerLoad = async (event) => {
	const layoutCookie = event.cookies.get('PaneForge:layout');
	const collapsedCookie = event.cookies.get('PaneForge:collapsed');

	let layout: number[] | undefined;
	let collapsed: boolean | undefined;

	if (layoutCookie) {
		layout = JSON.parse(layoutCookie);
	}
	if (collapsedCookie) {
		collapsed = JSON.parse(collapsedCookie);
	}

	return { layout, collapsed };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
		// TODO log the user in
	}
};
