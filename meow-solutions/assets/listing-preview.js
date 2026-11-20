const listingForm = document.querySelector("#listing-form");
const listingPreview = document.querySelector("#listing-preview");

listingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = new FormData(listingForm);
  const businessName = fields.get("business").trim();
  const listingName = fields.get("listing").trim();
  const description = fields.get("description").trim();

  for (const [field, value] of Object.entries({ business: businessName, listing: listingName, description })) {
    if (!value) {
      const input = listingForm.elements.namedItem(field);
      input.setCustomValidity("Enter a value to update the preview.");
      input.reportValidity();
      return;
    }
  }

  const price = new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
    currencyDisplay: "code",
  }).format(Number(fields.get("price")));

  const values = {
    mark: Array.from(businessName)[0].toLocaleUpperCase("en-SG"),
    business: businessName,
    listing: listingName,
    description,
    category: fields.get("category"),
    type: fields.get("type"),
    price,
  };

  for (const [key, value] of Object.entries(values)) {
    listingPreview.querySelector(`[data-preview="${key}"]`).textContent = value;
  }

  document.querySelector("#listing-status").textContent = `Preview updated for ${listingName}.`;
});

listingForm.addEventListener("input", (event) => {
  if (event.target.validity.customError) {
    event.target.setCustomValidity("");
  }
});
