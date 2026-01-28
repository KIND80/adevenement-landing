
export const getWhatsAppLink = (serviceType = "événement", eventDate = "") => {
  const formattedDate = eventDate ? ` le ${eventDate}` : "";
  const message = `Bonjour Adeline, j'aimerais des informations sur vos prestations que j'ai vu sur le site internet. La date de notre ${serviceType} est prévue pour${formattedDate}.`;
  return `https://wa.me/33784646530?text=${encodeURIComponent(message)}`;
};
