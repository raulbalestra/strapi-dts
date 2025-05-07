module.exports = {
  async beforeUpdate(event) {
    const { params } = event;

    // Store the existing airport entry BEFORE the update
    const existingEntry = await strapi.db.query("api::airport.airport").findOne({
      where: { id: params.where.id },
    });

    if (!existingEntry) {
      console.warn(`❌ ${event.result.type} entry not found before update!`);
      return;
    }

    // Store the existing entry in the Strapi request context
    // This will make it accessible in the afterUpdate hook
    if (!event.state) event.state = {};
    event.state.previousEntry = existingEntry;
    
    console.log("🔍 Before update hook executed, saved previous state");
  },

  async afterUpdate(event) {
    const { result, params, state } = event;


    if (!result) {
      console.warn(`❌ ${result.type} entry not found after update!`);
      return;
    }

    // Get previous entry from state (if available from beforeUpdate)
    const previousEntry = state?.previousEntry || await strapi.db.query("api::airport.airport").findOne({
      where: { id: params.where.id },
      select: ['publishedAt', 'slug']
    });

    if (!previousEntry) {
      console.warn("❌ Unable to fetch previous airport state!");
      return;
    }

    // Check if status changed (published/unpublished)
    if (previousEntry.publishedAt !== result.publishedAt) {
      console.log(`📝 ${result.type} status changed: ${result.publishedAt ? "Published" : "Unpublished"}`);

      await sendWebhook({
        event: `${result.type}.status_updated`,
        status: result.publishedAt ? "published" : "unpublished",
        airportId: result.id,
        type: result.type,
      });
    }

    // Check if slug changed
    if (previousEntry.slug !== result.slug) {
      console.log(`🔄 Slug changed from "${previousEntry.slug}" to "${result.slug}"`);

      await sendWebhook({
        event: `${result.type}.slug_updated`,
        oldSlug: previousEntry.slug,
        newSlug: result.slug,
        airportId: result.id,
        type: result.type
      });
    }
  },

  async afterDelete(event) {
    const { result } = event;

    if (!result) {
      console.warn("❌ Airport entry not found before delete!");
      return;
    }

    console.log(`🗑️ Airport deleted: ID ${result.id}`);

    await sendWebhook({
      event: `${result.type}.deleted`,
      airportId: result.id,
    });
  },
};

// ✅ Webhook function
async function sendWebhook(payload) {
  const baseUrl = "https://luxyride.com";
  const webhookUrl = `${baseUrl}/api/airport-city-sitemap`;

  try {
    console.log(`⏳ Delaying webhook for 2 seconds...`);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay for 2 sec

    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log(`✅ Webhook sent: ${payload.event}`);
  } catch (error) {
    console.error("❌ Webhook error:", error);
  }
}