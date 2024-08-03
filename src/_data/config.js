// Config for the entire site.
module.exports = {
  // Site title.
  title: "Babynaaz Qazi",

  // Default description for pages. Provide "description" in the front matter of
  // a page to override this.
  description: "Contact information for Babynaaz Qazi",

  // Site URLs.
  baseUrl: "https://www.babynaaz.com/", // No slash at the end.
  shortBaseUrl: "babynaaz.com/", // Same as baseUrl but without http or https.

  // Your name.
  name: "Babynaaz Qazi",

  // Profile picture on home page. Set to null to leave out.
  profilePic: {
    best: "https://d35hr0os3yc7ki.cloudfront.net/Babynaaz/Babynaaz_photo.jpg",
    small: "https://d35hr0os3yc7ki.cloudfront.net/Babynaaz/Babynaaz_photo.jpg",
  },

  // Name pronunciation. Set to null to leave out.
  pronunciation: "https://d35hr0os3yc7ki.cloudfront.net/Babynaaz/Babynaaz_audio.mp3",

  // Tagline that shows up below the profile picture on the home page and below
  // the name on the business card. Set to null to leave out.
  tagline: "Cost Management Account",

  // Path to Open Graph image. Change this URL whenever the image changes so
  // that sites like FB change their preview. Set to null to leave out.
  openGraph: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/Babynaaz/Babynaaz_photo.jpg",
  },

  // Path to Twitter preview image. Set to null to leave out.
  twitterPreview: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/Babynaaz/Babynaaz_photo.jpg",
  },

  // Links to your other websites.
  // - "fa" is the FontAwesome code for the icon; for example, see here:
  //   https://fontawesome.com/v5.15/icons/globe-americas
  // - textColor is configured strangely because tailwind needs to pick up on it
  //   and avoid purging the class name -- see here:
  //   https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
  //   - See tailwind.config.js (in the root of this repo) for how to add custom
  //     colors.
  links: [
    {
      name: "Babynaaz Qazi",
      desc: "babynaaz.com",
      url: "https://www.babynaaz.com/",
      fa: "fas fa-globe-americas",
      textColor: "text-website",
    },
    {
      name: "Email",
      desc: "mail@babynaaz.com",
      url: "mailto:mail@babynaaz.com",
      fa: "fas fa-envelope",
      textColor: "text-gray-600",
    },
    {
      name: "LinkedIn",
      desc: "@Babynaaz Qazi",
      url: "https://www.linkedin.com/in/babynaaz-qazi-964226150/",
      fa: "fab fa-linkedin",
      textColor: "text-linkedin",
    },
     {
      name: "Instagram",
      desc: "@claziaevents",
      url: "https://www.instagram.com/claziaevents/",
      fa: "fab fa-instagram",
      textColor: "text-instagram",
    },
    {
      name: "Save Contact",
      url: "https://d35hr0os3yc7ki.cloudfront.net/Babynaaz/Babynaaz_contact.vcf",
      fa: "fas fa-file-alt",
      textColor: "text-yellow-500",
    },
  ],
};
