import { e as PRIVATE_STRIPE_API_KEY } from "../../../../chunks/private.js";
import { b as PUBLIC_WEBSITE_HOST, d as PUBLIC_STRIPE_PRICE_ID } from "../../../../chunks/public.js";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { r as redirect, e as error } from "../../../../chunks/index.js";
import { Stripe } from "stripe";
const GET = async (event) => {
  try {
    const { session, supabaseClient } = await getSupabase(event);
    if (session) {
      if ((await supabaseClient.from("user_info").select("*", { count: "exact" }).eq("paid", true)).count == 1) {
        throw redirect(303, "/app");
      }
    }
    const stripe = new Stripe(PRIVATE_STRIPE_API_KEY, {
      apiVersion: "2022-11-15"
    });
    console.log("stripe");
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: `${PUBLIC_WEBSITE_HOST}/payment_success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${PUBLIC_WEBSITE_HOST}#cancel_payment`,
      line_items: [
        {
          price: PUBLIC_STRIPE_PRICE_ID,
          quantity: 1
        }
      ],
      customer_email: session?.user.email,
      client_reference_id: session?.user.id,
      mode: "payment",
      allow_promotion_codes: true
    });
    if (stripeSession.url) {
      throw redirect(303, stripeSession.url);
    } else {
      throw new Error("Stripe session not valid", {
        cause: stripeSession
      });
    }
  } catch (error$1) {
    if (error$1 instanceof Error) {
      console.error(error$1.cause);
      throw error(500, { message: error$1.message });
    }
    throw error$1;
  }
};
export {
  GET
};
