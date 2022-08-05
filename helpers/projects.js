import axios from 'axios';

export const projectsUrl = '/static/json/projects.json';

export const getProjectsByNames = (data = {}, names = []) => {
	const { projects = {} } = data;

	return names.reduce(
		(result, name) =>
			projects[name]
				? {
						...result,
						[name]: projects[name],
				  }
				: result,
		{}
	);
};

export const getProjectsFromCategory = (data = {}, category, preserveSubcategories = false) => {
	const { categories = {} } = data;

	if (!category || !categories[category]) {
		return {};
	}

	return Object.entries(categories[category]).reduce((result, [subcategoryname, subcategory]) => {
		const subcategory_projects = getProjectsByNames(data, subcategory);

		return preserveSubcategories
			? {
					...result,
					[subcategoryname]: subcategory_projects,
			  }
			: { ...result, ...subcategory_projects };
	}, {});
};

export const getProjectsBySubcategories = (data = {}) => {
	const { categories = {} } = data;

	return Object.entries(categories).reduce(
		(result, category) => ({ ...result, ...getProjectsFromCategory(data, category, true) }),
		{}
	);
};

export const getAllProjects = (data = {}) => {
	const { projects = {} } = data;
	return projects;
};

export const fetcher = req => axios.get(req, { responseType: 'json' }).then(res => res.data);
