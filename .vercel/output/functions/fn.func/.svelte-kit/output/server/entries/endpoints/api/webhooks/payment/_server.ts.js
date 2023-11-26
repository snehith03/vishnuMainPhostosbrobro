import { j as json, e as error } from "../../../../../chunks/index.js";
import { e as PRIVATE_STRIPE_API_KEY, f as PRIVATE_STRIPE_ENDPOINT_SECRET } from "../../../../../chunks/private.js";
import { s as supabaseClientAdmin } from "../../../../../chunks/db.server.js";
import { Stripe } from "stripe";
import { b as PUBLIC_WEBSITE_HOST } from "../../../../../chunks/public.js";
const POST = async ({ request }) => {
  try {
    const signature = request.headers.get("stripe-signature") ?? "";
    const stripe = new Stripe.Stripe(PRIVATE_STRIPE_API_KEY, { apiVersion: "2022-11-15" });
    const event = await stripe.webhooks.constructEventAsync(
      await request.text(),
      signature,
      PRIVATE_STRIPE_ENDPOINT_SECRET
    );
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const clientReferenceID = session.client_reference_id;
        const email = session.customer_email || session.customer_details?.email;
        console.log("session: ", session);
        if (clientReferenceID || email) {
          let user = null;
          if (clientReferenceID) {
            const { data, error: error2 } = await supabaseClientAdmin.auth.admin.getUserById(
              clientReferenceID
            );
            if (error2) {
              throw error2;
            }
            user = data.user;
          } else if (email) {
            console.log("email: ", email);
            const { data, error: error2 } = await supabaseClientAdmin.auth.admin.inviteUserByEmail(email, {
              redirectTo: `${PUBLIC_WEBSITE_HOST}/app`
            });
            if (error2) {
              console.log("error: ", error2);
              throw error2;
            }
            user = data.user;
          }
          if (user) {
            const { error: errorUpsert } = await supabaseClientAdmin.from("user_info").upsert({ id: user.id, paid: true });
            if (errorUpsert) {
              throw errorUpsert;
            }
          } else {
            throw new Error(`User not found: ref_id ${clientReferenceID}, email:${email}`);
          }
        } else {
          throw new Error("Missing reference id and email");
        }
        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    return json({ done: true });
  } catch (error$1) {
    console.error(error$1);
    if (error$1 instanceof Error) {
      console.error(error$1.cause);
      throw error(500, { message: error$1.message });
    }
    throw error(500);
  }
};
export {
  POST
};
