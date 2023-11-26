// @ts-nocheck
import type { PageLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

export const load = async (event: Parameters<PageLoad>[0]) => {
	const { session } = await getSupabase(event);
	if (!session) {
		throw redirect(303, '/login');
	}
};
