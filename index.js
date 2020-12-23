// Requiring node-fetch to fetch the API
const fetch = require('node-fetch');

/**
 * @param subreddit, a subreddit of course!
 */
module.exports.random = async function(subreddit) {
	if (!subreddit) throw new TypeError('No subreddit provided!');

	let post = await fetch(
		`https://subredditapi.cf/reddit/random/${subreddit}`
	).then(res => res.json());
	if (post.message === 404)
		throw new TypeError('Invalid subreddit provided!');

	return post;
};

/**
 * @param subreddit, a subreddit again.
 * An optional @param sort, the sort type such as 'all', 'hour', 'day', 'week', 'month', 'yeae'
 */

module.exports.top = async function(subreddit, sort) {
	if (!subreddit) throw new TypeError('No subreddit provided!');

	let post = await fetch(
		`https://subredditapi.cf/reddit/top/${sort ? sort : 'week'}/${subreddit}`
	).then(res => res.json());
	if (post.message === 404)
		throw new TypeError('Invalid subreddit/sort type provided!');

	return post;
};

/**
 * @param subreddit, a subreddit
 */

module.exports.new = async function(subreddit) {
	if (!subreddit) throw new TypeError('No subreddit provided!');

	let post = await fetch(
		`https://subredditapi.cf/reddit/new/${subreddit}`
	).then(res => res.json());
	if (post.message === 404)
		throw new TypeError('Invalid subreddit provided!');

	return post;
};

/**
 * @param subreddit, a subreddit
 */

module.exports.rising = async function(subreddit) {
	if (!subreddit) throw new TypeError('No subreddit provided!');

	let post = await fetch(
		`https://subredditapi.cf/reddit/rising/${subreddit}`
	).then(res => res.json());
	if (post.message === 404)
		throw new TypeError('Invalid subreddit provided!');

	return post;
};

/**
 * @param query, a query can be a search term or a subreddit name
 */

module.exports.search = async function(query) {
	if (!query) throw new TypeError('No query provided!');

	let post = await fetch(`https://subredditapi.cf/reddit/search/${query}`).then(
		res => res.json()
	);
	if (post.message === 404) throw new TypeError('Invalid query provided!');

	return post;
};

/**
 * Returns the total number of requests made on the api. More soon
 */

module.exports.stats = async () => {
	let stats = await fetch('https://subredditapi.cf/stats').then(res =>
		res.json()
	);

	return {
		totalRequests: stats.totalRequests
	};
};
